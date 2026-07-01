"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDraftStore, type FieldConfidence } from "@/lib/store/draft";
import { formatINR } from "@/lib/filing/types";
import { FilingLayout } from "@/components/filing/FilingLayout";
import {
  Banner,
  Button,
  FilingActions,
  ScreenTitle,
} from "@/components/filing/ui";
import { ImportRevealPanel } from "@/components/filing/ImportRevealPanel";
import { CheckCircle2, AlertCircle, FileText, ChevronRight, Edit3, Briefcase, IndianRupee, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const CONFIDENCE_STYLES: Record<
  FieldConfidence,
  { label: string; bg: string; text: string; icon: React.ReactNode }
> = {
  high: {
    label: "High confidence",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    icon: <CheckCircle2 className="size-3 mr-1" />
  },
  review: {
    label: "Needs Review",
    bg: "bg-amber-50",
    text: "text-amber-700",
    icon: <AlertCircle className="size-3 mr-1" />
  },
  missing: {
    label: "Missing",
    bg: "bg-slate-100",
    text: "text-slate-600",
    icon: <AlertCircle className="size-3 mr-1" />
  },
};

function MetricCard({ 
  label, 
  value, 
  icon: Icon,
  confidence 
}: { 
  label: string; 
  value: string; 
  icon: any;
  confidence?: FieldConfidence;
}) {
  const confStyle = confidence ? CONFIDENCE_STYLES[confidence] : null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:border-blue-200 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-slate-50 rounded-lg">
            <Icon className="size-4 text-slate-500" />
          </div>
          <span className="text-sm font-semibold text-slate-600">{label}</span>
        </div>
        {confStyle && (
          <span className={cn("flex items-center text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider", confStyle.bg, confStyle.text)}>
            {confStyle.icon}
            {confStyle.label}
          </span>
        )}
      </div>
      <div className="text-2xl font-black text-slate-900 tracking-tight">
        {value}
      </div>
    </div>
  );
}

export default function ParsingPage() {
  const router = useRouter();
  const {
    income,
    deductions,
    lastParseResult,
    connectedConnectors,
    seedPrimaryEmployer,
    removeEmployerForm16,
  } = useDraftStore();
  
  const employers = income.employers ?? [];
  const hasMultipleEmployers = employers.length > 1;
  const latestEmployer = hasMultipleEmployers ? employers[employers.length - 1] : null;
  
  const latestForm16 = {
    name: latestEmployer?.name ?? income.employer,
    grossSalary: latestEmployer?.grossSalary ?? income.grossSalary,
    tds: latestEmployer?.tds ?? income.tds,
  };

  const handleAddAnotherForm16 = useCallback(() => {
    seedPrimaryEmployer();
    router.push("/file/import/documents?source=form16&addEmployer=1");
  }, [router, seedPrimaryEmployer]);

  const aisConnected = useMemo(
    () => connectedConnectors.includes("ais"),
    [connectedConnectors]
  );

  const fieldConfidence = useMemo(
    () => lastParseResult?.fieldConfidence ?? {},
    [lastParseResult?.fieldConfidence]
  );
  
  const isDemoFallback = !lastParseResult || lastParseResult.mode === "demo_fallback";

  return (
    <FilingLayout mirrorText="Confirm these numbers carefully. Incorrect salary or TDS values can lead to ITD mismatch notices.">
      <ScreenTitle 
        title="Form 16 Extracted Data" 
        subtitle="Review the figures we parsed from your upload. You can edit them now or confirm and proceed." 
      />

      {isDemoFallback && (
        <Banner variant="warning" className="mb-6">
          <strong>Demo Fallback</strong> — we could not fully read your PDF, so these are sample figures. Verify against your actual Form 16.
        </Banner>
      )}

      {/* Extracted Metrics Grid */}
      <div className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Extracted Totals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard 
            label="Employer Name" 
            value={latestForm16.name || "Not Found"} 
            icon={Briefcase}
            confidence={fieldConfidence.employer}
          />
          <MetricCard 
            label="Gross Salary" 
            value={formatINR(latestForm16.grossSalary)} 
            icon={IndianRupee}
            confidence={fieldConfidence.grossSalary}
          />
          <MetricCard 
            label="TDS Deducted" 
            value={formatINR(latestForm16.tds)} 
            icon={ShieldCheck}
            confidence={fieldConfidence.tds}
          />
        </div>
      </div>

      {/* Multiple Employers Section */}
      {hasMultipleEmployers && (
        <div className="mb-8 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="font-bold text-slate-900">Combined Totals ({employers.length} Employers)</h3>
              <p className="text-sm text-slate-600 mt-1">Cross-check the combined TDS against your Form 26AS.</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500 font-semibold">Total Salary</div>
              <div className="text-lg font-black text-slate-900">{formatINR(income.grossSalary)}</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-blue-100 overflow-hidden">
            {employers.map((emp, i) => (
              <div key={emp.id} className={cn("flex justify-between items-center p-3 text-sm", i !== 0 && "border-t border-slate-100")}>
                <div>
                  <span className="font-semibold text-slate-800">{emp.name}</span>
                  <span className="text-slate-500 ml-2">Salary: {formatINR(emp.grossSalary)} | TDS: {formatINR(emp.tds)}</span>
                </div>
                <button onClick={() => removeEmployerForm16(emp.id)} className="text-red-500 font-semibold text-xs hover:underline">Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action / Next Steps Checklist */}
      <div className="mb-8">
         <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Still needs your input</h3>
         <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
            <div className="p-4 flex gap-4 items-start">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 font-bold text-xs">1</div>
              <div>
                <h4 className="font-bold text-slate-800">AIS / 26AS Reconciliation</h4>
                <p className="text-sm text-slate-600 mt-1">Match TDS and reported income against the ITD statement.</p>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-start">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 font-bold text-xs">2</div>
              <div>
                <h4 className="font-bold text-slate-800">Capital Gains & Other Income</h4>
                <p className="text-sm text-slate-600 mt-1">Savings/FD interest, dividends, and any sale of shares or property.</p>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-start">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 font-bold text-xs">3</div>
              <div>
                <h4 className="font-bold text-slate-800">Additional Deductions</h4>
                <p className="text-sm text-slate-600 mt-1">80D (Health), 80TTA (Interest), home-loan interest, and donations.</p>
              </div>
            </div>
         </div>
      </div>

      {/* File & Warning info */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {lastParseResult?.filenames && lastParseResult.filenames.length > 0 && (
          <div className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
            <FileText className="size-5 text-slate-400" />
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-500 uppercase">Parsed File</div>
              <div className="text-sm font-semibold text-slate-800 truncate">{lastParseResult.filenames.join(", ")}</div>
            </div>
          </div>
        )}
        
        {lastParseResult?.warnings && lastParseResult.warnings.length > 0 && (
          <div className="flex-[2] p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
             <AlertCircle className="size-5 text-amber-500 shrink-0 mt-0.5" />
             <div>
               <div className="text-xs font-bold text-amber-700 uppercase mb-1">Parse Notes</div>
               <div className="text-sm text-amber-800">{lastParseResult.warnings.join(" ")}</div>
             </div>
          </div>
        )}
      </div>

      <FilingActions>
        <Button href="/file/import/bank" className="w-full sm:w-auto">Confirm & Proceed <ChevronRight className="size-4 ml-1" /></Button>
        <Button href="/file/income" variant="outline" className="w-full sm:w-auto"><Edit3 className="size-4 mr-2" /> Edit Figures Inline</Button>
        <Button onClick={handleAddAnotherForm16} variant="ghost" className="w-full sm:w-auto">Add Another Form 16</Button>
      </FilingActions>
    </FilingLayout>
  );
}
