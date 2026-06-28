"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FilingLayout } from "@/components/filing/FilingLayout";
import ConnectorGrid from "@/components/filing/connectors/ConnectorGrid";
import {
  QuickEstimateForm,
  EMPTY_QUICK_ESTIMATE,
  type QuickEstimateValues,
} from "@/components/filing/import/QuickEstimateForm";
import {
  Banner,
  Button,
  FilingActions,
  ScreenTitle,
} from "@/components/filing/ui";
import { ItrAnalyticsPanel } from "@/components/filing/ItrAnalyticsPanel";
import { WhyWeAskHint } from "@/components/filing/WhyWeAskHint";
import { WHY_WE_ASK } from "@/lib/copy/trust";
import { FILING_IMPORT } from "@/lib/copy/filing";
import { useDraftStore } from "@/lib/store/draft";
import { trackEvent } from "@/lib/analytics";
import { useDraftTaxCompute } from "@/lib/hooks/useDraftTaxCompute";
import { useItrAiSummary } from "@/lib/hooks/useItrAiSummary";
import {
  applySalariedFastPathDefaults,
  FORM16_FAST_PATH_SOURCE,
  isForm16FastPath,
} from "@/lib/filing/routes";
import { getImportContinueHref, type ImportStartMode } from "@/lib/filing/importModes";
import { FileDown, FilePlus2, CloudDownload, HelpCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function DocumentsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    name,
    income,
    deductions,
    setName,
    setFilingMode,
    setFilingPath,
    ensureIncomeChip,
    setItrConfirmed,
    setIncome,
    setDeductions,
    connectedConnectors,
    lastParseResult,
  } = useDraftStore();

  const form16FastPath = isForm16FastPath(searchParams);
  const addEmployerMode = searchParams.get("addEmployer") === "1";
  const form16Connected = connectedConnectors.includes("form16");
  
  const [importMode, setImportMode] = useState<ImportStartMode | null>(null);
  const [estimateValues, setEstimateValues] = useState<QuickEstimateValues>({
    grossSalary: income.grossSalary,
    tds: income.tds,
    section80C: deductions.section80C,
    section80D: deductions.section80D,
  });

  const { result: taxResult } = useDraftTaxCompute();
  const taxSnapshot = useMemo(
    () =>
      taxResult
        ? {
            recommendedRegime: taxResult.regime_comparison.recommended_regime,
            taxOld: taxResult.regime_comparison.old.total_tax,
            taxNew: taxResult.regime_comparison.new.total_tax,
            taxSaving: taxResult.regime_comparison.tax_saving,
            refundEstimate:
              taxResult.regime_comparison.recommended_regime === "old"
                ? taxResult.regime_comparison.old.net_payable
                : taxResult.regime_comparison.new.net_payable,
          }
        : undefined,
    [taxResult]
  );
  const { aiSummary, aiLoading, aiEnabled } = useItrAiSummary({
    income,
    deductions,
    lastParseResult,
    connectedConnectors,
    taxSnapshot,
    enabled: form16FastPath || importMode === "form16",
  });

  useEffect(() => {
    trackEvent("import_started", {
      source: form16FastPath ? "form16_fast_path" : "documents",
    });
  }, [form16FastPath]);

  useEffect(() => {
    if (!form16FastPath) return;
    applySalariedFastPathDefaults(
      { setName, setFilingMode, setFilingPath, ensureIncomeChip, setItrConfirmed },
      searchParams.get("name")
    );
  }, [
    form16FastPath,
    searchParams,
    setName,
    setFilingMode,
    setFilingPath,
    ensureIncomeChip,
    setItrConfirmed,
  ]);

  const handleModeSelect = useCallback((mode: ImportStartMode) => {
    setImportMode(mode);
    trackEvent("import_mode_selected", { mode });
  }, []);

  const handleClearImportMode = useCallback(() => {
    setImportMode(null);
    setEstimateValues({ ...EMPTY_QUICK_ESTIMATE });
  }, []);

  const applyEstimateDraft = useCallback(() => {
    setFilingMode("estimate");
    setFilingPath("simple");
    ensureIncomeChip("salary");
    setItrConfirmed(true);
    setIncome({
      grossSalary: estimateValues.grossSalary,
      tds: estimateValues.tds,
    });
    setDeductions({
      section80C: estimateValues.section80C,
      section80D: estimateValues.section80D,
    });
    trackEvent("import_estimate_submitted", {
      grossSalary: estimateValues.grossSalary,
      section80C: estimateValues.section80C,
    });
  }, [
    ensureIncomeChip,
    estimateValues,
    setDeductions,
    setFilingMode,
    setFilingPath,
    setIncome,
    setItrConfirmed,
  ]);

  const effectiveImportMode: ImportStartMode | null = form16FastPath ? "form16" : importMode;
  const continueHref =
    effectiveImportMode !== null
      ? getImportContinueHref(effectiveImportMode, {
          form16Connected,
          form16FastPath,
        })
      : null;

  const handleContinue = useCallback(() => {
    if (effectiveImportMode === "manual") {
      if (estimateValues.grossSalary <= 0) return;
      applyEstimateDraft();
      router.push("/file/comprehensive");
      return;
    }
    if (continueHref) {
      router.push(continueHref);
    }
  }, [applyEstimateDraft, continueHref, effectiveImportMode, estimateValues.grossSalary, router]);

  const continueDisabled =
    effectiveImportMode === null ||
    effectiveImportMode === "itd" ||
    (effectiveImportMode === "manual" && estimateValues.grossSalary <= 0);

  return (
    <FilingLayout
      mirrorText="Upload your documents once, and our AI securely extracts every figure you need. No more manual data entry."
    >
      <ScreenTitle
        title="How do you want to start?"
        subtitle="Pick what you have handy — add documents or refine numbers anytime."
      />

      {/* Mode Selection Grid */}
      {!form16FastPath && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-6">
          <button
            onClick={() => handleModeSelect("form16")}
            className={cn(
              "flex flex-col text-left rounded-2xl border-2 p-5 transition-all",
              importMode === "form16" 
                ? "border-blue-600 bg-blue-50/80 shadow-md shadow-blue-500/10" 
                : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-sm"
            )}
          >
            <div className={cn("rounded-xl p-3 inline-block mb-4", importMode === "form16" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500")}>
              <FilePlus2 className="size-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-[15px]">Upload Form 16</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Fastest. AI parses your PDF from your employer instantly.</p>
          </button>

          <button
            onClick={() => handleModeSelect("manual")}
            className={cn(
              "flex flex-col text-left rounded-2xl border-2 p-5 transition-all",
              importMode === "manual" 
                ? "border-blue-600 bg-blue-50/80 shadow-md shadow-blue-500/10" 
                : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-sm"
            )}
          >
            <div className={cn("rounded-xl p-3 inline-block mb-4", importMode === "manual" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500")}>
              <HelpCircle className="size-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-[15px]">Start with estimates</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">No documents needed now. Enter rough numbers, refine later.</p>
          </button>

          <button
            onClick={() => handleModeSelect("itd")}
            className={cn(
              "flex flex-col text-left rounded-2xl border-2 p-5 transition-all opacity-80",
              importMode === "itd" 
                ? "border-slate-400 bg-slate-50/80 shadow-md" 
                : "border-slate-100 bg-slate-50/50 hover:border-slate-300 hover:shadow-sm"
            )}
          >
            <div className={cn("rounded-xl p-3 inline-block mb-4", importMode === "itd" ? "bg-slate-600 text-white" : "bg-slate-200 text-slate-500")}>
              <CloudDownload className="size-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-[15px]">Import from ITD</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Direct ERI fetch of AIS/26AS. <strong className="text-blue-600">Coming soon.</strong></p>
          </button>
        </div>
      )}

      {importMode !== null && !form16FastPath && (
        <div className="flex justify-end mb-6">
          <button onClick={handleClearImportMode} className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline">
            Change selection
          </button>
        </div>
      )}

      {/* Manual Estimate Section */}
      {!form16FastPath && importMode === "manual" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-100 pt-8 mt-2">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Enter rough estimates</h3>
          <QuickEstimateForm values={estimateValues} onChange={setEstimateValues} />
        </div>
      )}

      {/* ITD Import Section */}
      {!form16FastPath && importMode === "itd" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Banner variant="info">
            <strong>Import from ITD is rolling out soon!</strong> We&apos;re building a secure ERI connection to pull AIS and Form 26AS automatically. For now, please select another option.
          </Banner>
        </div>
      )}

      {/* Form 16 Upload Section */}
      {(form16FastPath || importMode === "form16") && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:items-start border-t border-slate-100 pt-8 mt-2">
          <div className="min-w-0">
            {addEmployerMode && (
              <Banner variant="info">
                <strong>Adding another Form 16.</strong> Upload the next employer&apos;s Form 16 — we'll add its salary and TDS to your existing total.
              </Banner>
            )}
            <ConnectorGrid
              highlightConnectorId={form16FastPath ? FORM16_FAST_PATH_SOURCE : "form16"}
              form16FastPath={form16FastPath}
              appendAsEmployer={addEmployerMode}
            />
          </div>
          <ItrAnalyticsPanel
            income={income}
            deductions={deductions}
            lastParseResult={lastParseResult}
            connectedConnectors={connectedConnectors}
            aiSummary={aiSummary}
            aiLoading={aiLoading}
            aiEnabled={aiEnabled}
            taxSnapshot={taxSnapshot}
          />
        </div>
      )}

      {/* Continue Action */}
      {importMode !== null && importMode !== "itd" && (
        <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
          {continueHref && effectiveImportMode !== "manual" ? (
            <Button href={continueHref} disabled={continueDisabled}>
              Next Step <ChevronRight className="size-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleContinue} disabled={continueDisabled}>
              Continue to Filing <ChevronRight className="size-4 ml-1" />
            </Button>
          )}
        </div>
      )}
    </FilingLayout>
  );
}

export default function DocumentsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-slate-600">Loading…</div>}>
      <DocumentsContent />
    </Suspense>
  );
}
