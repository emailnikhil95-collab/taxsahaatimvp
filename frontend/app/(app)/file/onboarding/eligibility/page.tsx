"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDraftStore } from "@/lib/store/draft";
import { useProfileStore } from "@/lib/store/profile";
import { FilingLayout } from "@/components/filing/FilingLayout";
import {
  getItrPathReasons,
  getWhyNotItr3,
  resolveRecommendedForm,
} from "@/lib/filing/case-matrix";
import { INCOME_CHIPS } from "@/lib/filing/constants";
import type { AgeBand, BusinessType, IncomeBand } from "@/lib/filing/case-matrix";
import {
  buildParsingForm16Url,
  isForm16FastPath,
} from "@/lib/filing/routes";
import { WhyWeNeedThis } from "@/components/filing/OnboardingForm";
import {
  Banner,
  Card,
  ScreenTitle,
  SelectInput,
} from "@/components/filing/ui";
import { PlainEnglishField } from "@/components/filing/PlainEnglishField";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  User,
  Building2,
  Briefcase,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  COMPLEX_CASE_ESCALATION_BODY,
  COMPLEX_CASE_ESCALATION_TITLE,
  COMPLEX_CASE_FLAG,
  SELF_FILE_ELIGIBLE,
} from "@/lib/copy/trust";

const FORM_PLAIN_LABELS: Record<string, string> = {
  "ITR-1": "Simple return for salaried employees",
  "ITR-2": "For capital gains, foreign income, or income above ₹50L",
  "ITR-3": "Business income with books of accounts",
  "ITR-4": "Presumptive business or profession",
  BLOCK: "Parent must file for minor",
};

const EXTRA_CHIP_IDS = new Set([
  "pension",
  "esop_rsu",
  "foreign",
  "director",
  "home_loan",
]);

function profileAgeToMatrixAge(ageBand: "under_60" | "senior" | "super_senior"): AgeBand {
  if (ageBand === "senior") return "b";
  if (ageBand === "super_senior") return "d";
  return "a";
}

function matrixAgeToProfileAge(age: AgeBand): "under_60" | "senior" | "super_senior" {
  if (age === "b" || age === "c") return "senior";
  if (age === "d") return "super_senior";
  return "under_60";
}

function applySeniorModeFromProfile(
  ageBand: "under_60" | "senior" | "super_senior",
  setSeniorMode: (enabled: boolean) => void
) {
  setSeniorMode(ageBand === "senior" || ageBand === "super_senior");
}

function EligibilityContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form16FastPath = isForm16FastPath(searchParams);
  const aboutYouStep = searchParams.get("step") === "about-you";
  const showIdentity = aboutYouStep || !form16FastPath;
  const { name: storeName } = useProfileStore();
  const {
    matrix,
    incomeChips,
    profile,
    itrConfirmed,
    filingPath,
    connectedConnectors,
    name,
    consentGiven,
    setName,
    setConsentGiven,
    setMatrix,
    setProfile,
    toggleIncomeChip,
    ensureIncomeChip,
    setRecommendedForm,
    setItrConfirmed,
    setSeniorMode,
    resetEligibilityStep,
  } = useDraftStore();

  const userName = storeName || name || "";
  const firstName = userName ? userName.split(" ")[0] : "";

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const landingName = searchParams.get("name");
    if (landingName) setName(landingName);
  }, [searchParams, setName]);

  useEffect(() => {
    if (!form16FastPath) return;
    ensureIncomeChip("salary");
  }, [form16FastPath, ensureIncomeChip]);

  useEffect(() => {
    setMatrix({ age: profileAgeToMatrixAge(profile.ageBand) });
    applySeniorModeFromProfile(profile.ageBand, setSeniorMode);
  }, [profile.ageBand, setMatrix, setSeniorMode]);

  const chips = useMemo(() => new Set(incomeChips), [incomeChips]);

  const mostlySalary = chips.has("salary");
  const hasRent = chips.has("rent_received");
  const soldAssets = chips.has("capital_gains");
  const hasBusiness = chips.has("freelance") || chips.has("business_presumptive");

  const rec = useMemo(() => resolveRecommendedForm(matrix, chips), [matrix, chips]);

  const showE1 = incomeChips.includes("capital_gains") || rec.form === "ITR-2";
  const showExpert = rec.expert || rec.form === "BLOCK";
  const reasons = getItrPathReasons(rec, matrix);
  const form = rec.form;
  const plainFormLabel = FORM_PLAIN_LABELS[form] ?? form;

  const handleNext = () => setActiveSlide((s) => Math.min(s + 1, slides.length - 1));
  const handlePrev = () => setActiveSlide((s) => Math.max(s - 1, 0));

  const handleAgeChange = (age: AgeBand) => {
    setMatrix({ age });
    const ageBand = matrixAgeToProfileAge(age);
    setProfile({ ageBand });
    applySeniorModeFromProfile(ageBand, setSeniorMode);
  };

  const toggleSource = (sourceId: string, isBusiness: boolean = false, isCapitalGains: boolean = false) => {
    toggleIncomeChip(sourceId);
    
    if (isBusiness) {
      if (!chips.has(sourceId)) {
        setMatrix({ business: "w" });
      } else if (!chips.has("freelance") && !chips.has("business_presumptive")) {
        setMatrix({ business: "x" });
      }
    }
    
    if (isCapitalGains) {
      if (!chips.has(sourceId)) {
        setMatrix({ business: "z" });
      } else {
        setMatrix({ business: "x" });
      }
    }
  };

  const handleContinue = () => {
    applySeniorModeFromProfile(profile.ageBand, setSeniorMode);
    setRecommendedForm(rec.form, rec.caseId);
    if (form16FastPath) {
      router.push(buildParsingForm16Url());
      return;
    }
    router.push("/file/import/documents");
  };

  // The 3 Consolidated Slides
  const slides = [];

  // SLIDE 1: IDENTITY & BASICS
  if (showIdentity) {
    slides.push({
      id: "identity",
      title: firstName ? `Hi ${firstName}, let's set up your profile` : "Let's set up your profile",
      subtitle: "Basic details to get started with your tax filing.",
      icon: User,
      render: () => (
        <div className="space-y-6">
          <WhyWeNeedThis>
            <p>Your PAN links your return to the Income Tax Department.</p>
            <p>We store documents only with your consent.</p>
          </WhyWeNeedThis>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PlainEnglishField
              govLabel="Permanent account number"
              simpleLabel="PAN number"
              helper="10 characters"
              placeholder="ABCDE1234F"
              maxLength={10}
            />
            <PlainEnglishField
              govLabel="Mobile number registered with ITD"
              simpleLabel="Mobile number"
              helper="Optional now"
              placeholder="9876543210"
              type="tel"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectInput
              label="Age band"
              value={matrix.age}
              onChange={(v) => handleAgeChange(v as AgeBand)}
              options={[
                { value: "a", label: "Under 60" },
                { value: "b", label: "60–64 (senior)" },
                { value: "c", label: "65–79" },
                { value: "d", label: "80+ (super senior)" },
                { value: "e", label: "Under 18 (clubbed)" },
              ]}
            />
            <SelectInput
              label="Filing on time?"
              value={profile.lateFiling ? "late" : "ontime"}
              onChange={(v) => setProfile({ lateFiling: v === "late" })}
              options={[
                { value: "ontime", label: "Yes, before July 31" },
                { value: "late", label: "No, late filing (after July 31)" },
              ]}
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 transition-colors">
            <input
              type="checkbox"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-700">
              I consent to secure storage of my tax documents for ITR preparation.
            </span>
          </label>
          <div className="flex justify-end pt-4">
            <button
              onClick={handleNext}
              disabled={!consentGiven}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
            >
              Next Step <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )
    });
  }

  // SLIDE 2: INCOME SOURCES (The big condensed grid)
  slides.push({
    id: "income_sources",
    title: "What did you earn money from this year?",
    subtitle: "Select all that apply to you. This determines your ITR form.",
    icon: Wallet,
    render: () => (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Salary */}
          <button
            onClick={() => toggleSource("salary")}
            className={cn(
              "flex items-center gap-4 rounded-2xl border-2 p-5 transition-all text-left",
              mostlySalary ? "border-blue-600 bg-blue-50/80" : "border-slate-100 bg-white hover:border-blue-200"
            )}
          >
            <div className={cn("rounded-full p-3 text-white shrink-0", mostlySalary ? "bg-blue-600" : "bg-slate-300")}>
              <Briefcase className="size-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-[15px]">Salary / Pension</h4>
              <p className="text-xs text-slate-500 mt-0.5">Form 16 from employer</p>
            </div>
          </button>

          {/* House Property */}
          <button
            onClick={() => toggleSource("rent_received")}
            className={cn(
              "flex items-center gap-4 rounded-2xl border-2 p-5 transition-all text-left",
              hasRent ? "border-blue-600 bg-blue-50/80" : "border-slate-100 bg-white hover:border-blue-200"
            )}
          >
            <div className={cn("rounded-full p-3 text-white shrink-0", hasRent ? "bg-blue-600" : "bg-slate-300")}>
              <Building2 className="size-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-[15px]">House Property</h4>
              <p className="text-xs text-slate-500 mt-0.5">Received rent or home loan</p>
            </div>
          </button>

          {/* Business / Freelance */}
          <button
            onClick={() => toggleSource("freelance", true)}
            className={cn(
              "flex items-center gap-4 rounded-2xl border-2 p-5 transition-all text-left",
              hasBusiness ? "border-blue-600 bg-blue-50/80" : "border-slate-100 bg-white hover:border-blue-200"
            )}
          >
            <div className={cn("rounded-full p-3 text-white shrink-0", hasBusiness ? "bg-blue-600" : "bg-slate-300")}>
              <TrendingUp className="size-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-[15px]">Business & Freelance</h4>
              <p className="text-xs text-slate-500 mt-0.5">Consulting, Agency, 44AD/44ADA</p>
            </div>
          </button>

          {/* Capital Gains */}
          <button
            onClick={() => toggleSource("capital_gains", false, true)}
            className={cn(
              "flex items-center gap-4 rounded-2xl border-2 p-5 transition-all text-left",
              soldAssets ? "border-blue-600 bg-blue-50/80" : "border-slate-100 bg-white hover:border-blue-200"
            )}
          >
            <div className={cn("rounded-full p-3 text-white shrink-0", soldAssets ? "bg-blue-600" : "bg-slate-300")}>
              <TrendingUp className="size-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-[15px]">Capital Gains</h4>
              <p className="text-xs text-slate-500 mt-0.5">Sold shares, MF, crypto</p>
            </div>
          </button>
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
          >
            See Recommendation <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    )
  });

  // SLIDE 3: RANGE & REVIEW (Final)
  slides.push({
    id: "review",
    title: "Income Range & Recommendation",
    subtitle: "We've matched you to the simplest tax form the law allows.",
    icon: FileCheck2,
    render: () => (
      <div className="space-y-6">
        <SelectInput
          label="Approximate total income"
          value={matrix.income}
          onChange={(v) => {
            setMatrix({ income: v as IncomeBand });
          }}
          options={[
            { value: "1", label: "Up to ₹5 lakh" },
            { value: "2", label: "₹5L – ₹10L" },
            { value: "3", label: "₹10L – ₹25L" },
            { value: "4", label: "₹25L – ₹50L" },
            { value: "5", label: "Above ₹50L" },
          ]}
        />

        <div className="mt-8 pt-6 border-t border-slate-100">
          <Card className="flex items-center gap-3 bg-blue-50/50 border-blue-200 mb-6">
            <FileCheck2 className="size-6 shrink-0 text-blue-600" />
            <div>
              <p className="text-base font-bold text-slate-900">
                Recommended: {form}
              </p>
              <p className="text-sm text-slate-600">
                {plainFormLabel}
                {rec.expert ? ` · ${COMPLEX_CASE_FLAG}` : ` · ${SELF_FILE_ELIGIBLE}`}
              </p>
            </div>
          </Card>

          {!showE1 && !showExpert && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Card recommended>
                <h3 className="mb-3 font-semibold text-slate-900">
                  {form} recommended
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {reasons.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> {r}
                    </li>
                  ))}
                </ul>
              </Card>

              <label className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/30 p-4 hover:bg-blue-50 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={itrConfirmed}
                  onChange={(e) => setItrConfirmed(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-semibold text-blue-900">
                  I confirm to use {form} for this filing.
                </span>
              </label>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <button
                  onClick={handleContinue}
                  disabled={!itrConfirmed || (showIdentity && !consentGiven)}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50"
                >
                  Start Filing <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          )}

          {showE1 && !showExpert && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Banner variant="critical">
                ITR-1 is not allowed when you have short-term capital gains or certain
                other income types.
              </Banner>
              <Card recommended>
                <h3 className="font-semibold text-slate-900">Use ITR-2 instead</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Upload your broker capital gains statement on the next screen.
                </p>
              </Card>
              <button
                onClick={handleContinue}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800"
              >
                Continue with ITR-2 <ChevronRight className="size-4" />
              </button>
            </div>
          )}

          {showExpert && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Banner variant="warning">
                <strong>{COMPLEX_CASE_ESCALATION_TITLE}.</strong> {COMPLEX_CASE_ESCALATION_BODY}
              </Banner>
              <Card recommended>
                <h3 className="font-semibold text-slate-900">
                  {rec.form === "BLOCK"
                    ? "Parent must file for minor"
                    : `${rec.form} · Professional review recommended`}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{rec.reason}</p>
              </Card>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push(filingPath === "cabrain" ? "/file/cabrain" : "/file/checkout/plans")}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
                >
                  Consult CA
                </button>
                <button
                  onClick={handleContinue}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
                >
                  Self file anyway
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  });

  const CurrentSlide = slides[activeSlide];
  const Icon = CurrentSlide.icon;

  return (
    <FilingLayout
      mirrorText="Residency and income type decide which ITR form you must use. We match you to the simplest form the law allows — wrong form means notices later."
    >
      {/* Horizontal Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Step {activeSlide + 1} of {slides.length}
          </span>
          <span className="text-xs font-semibold text-blue-600">
            {Math.round(((activeSlide + 1) / slides.length) * 100)}%
          </span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
          {slides.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-full transition-all duration-300 flex-1",
                i <= activeSlide ? "bg-blue-600" : "bg-transparent"
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon className="size-5" />
            </span>
            {CurrentSlide.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-xl">
            {CurrentSlide.subtitle}
          </p>
        </div>
        {/* Navigation Buttons for the wizard */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={activeSlide === 0}
            className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeSlide === slides.length - 1}
            className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Slide Content Container with Animation Wrapper */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm min-h-[400px]">
        <div key={activeSlide} className="animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-forwards">
          {CurrentSlide.render()}
        </div>
      </div>

    </FilingLayout>
  );
}

export default function EligibilityPage() {
  return (
    <Suspense fallback={<div className="p-12 text-slate-600">Loading…</div>}>
      <EligibilityContent />
    </Suspense>
  );
}
