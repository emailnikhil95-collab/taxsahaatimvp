"use client";

import { useDraftStore } from "@/lib/store/draft";
import { FilingLayout } from "@/components/filing/FilingLayout";
import { PlainEnglishField } from "@/components/filing/PlainEnglishField";
import { Button, FilingActions, ScreenTitle } from "@/components/filing/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CABrainAlert } from "@/components/filing/CABrainAlert";
import { Briefcase, Landmark, HeartHandshake, Laptop, TrendingUp, Building2, HelpCircle } from "lucide-react";

export default function ComprehensiveFilingForm() {
  const { income, setIncome, houseProperty, setHouseProperty, deductions, setDeductions } = useDraftStore();

  return (
    <FilingLayout
      showNavRail={false}
      activeNavSection="salary"
      mirrorText="Welcome to the Mega-Form. All your tax data in one single place. Toggle sections that apply to you."
    >
      <div className="space-y-6">
        <ScreenTitle
          title="Comprehensive Tax Profile"
          subtitle="Expand the sections relevant to your income. Our deterministic engine optimizes your regime in real-time."
        />

        <Accordion className="w-full space-y-4">
          {/* SALARY ACCORDION */}
          <AccordionItem value="salary" className="bg-white border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg"><Briefcase className="size-5 text-blue-700" /></div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Salary & Allowances</h3>
                  <p className="text-xs text-slate-500 font-normal">Form 16 data, Basic pay, HRA</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 space-y-4 border-t mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlainEnglishField
                  govLabel="Salary as per provisions contained in section 17(1)"
                  simpleLabel="Gross Salary"
                  placeholder="0"
                  type="number"
                  fieldId="gross_salary"
                  value={income.grossSalary ? String(income.grossSalary) : ""}
                  onChange={(v) => setIncome({ grossSalary: Number(v) || 0 })}
                  helper="Basic pay, dearness allowance, and taxable perks."
                />
                <PlainEnglishField
                  govLabel="Total Tax Deducted at Source (TDS)"
                  simpleLabel="Tax Deducted (TDS)"
                  placeholder="0"
                  type="number"
                  fieldId="tds"
                  value={income.tds ? String(income.tds) : ""}
                  onChange={(v) => setIncome({ tds: Number(v) || 0 })}
                  helper="The tax already cut by your employer."
                />
                <PlainEnglishField
                  govLabel="Allowance under section 10(13A)"
                  simpleLabel="HRA Received"
                  placeholder="0"
                  type="number"
                  fieldId="hra_received"
                  value={income.hraReceived ? String(income.hraReceived) : ""}
                  onChange={(v) => setIncome({ hraReceived: Number(v) || 0 })}
                />
                <PlainEnglishField
                  govLabel="Actual Rent Paid for Accommodation"
                  simpleLabel="Actual Rent Paid"
                  placeholder="0"
                  type="number"
                  fieldId="actual_rent_paid"
                  value={income.actualRentPaid ? String(income.actualRentPaid) : ""}
                  onChange={(v) => setIncome({ actualRentPaid: Number(v) || 0 })}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* BUSINESS / FREELANCE ACCORDION */}
          <AccordionItem value="business" className="bg-white border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg"><Laptop className="size-5 text-indigo-700" /></div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Business & Freelance (44AD / 44ADA)</h3>
                  <p className="text-xs text-slate-500 font-normal">Consulting, Agency, Sole Proprietorship</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 space-y-4 border-t mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlainEnglishField
                  govLabel="Gross Receipts / Turnover"
                  simpleLabel="Freelance / Business Revenue"
                  placeholder="0"
                  type="number"
                  fieldId="freelance_revenue"
                  value={income.freelanceRevenue ? String(income.freelanceRevenue) : ""}
                  onChange={(v) => setIncome({ freelanceRevenue: Number(v) || 0 })}
                />
                <PlainEnglishField
                  govLabel="Actual Expenses (or apply presumptive 50%)"
                  simpleLabel="Business Expenses"
                  placeholder="0"
                  type="number"
                  fieldId="freelance_expenses"
                  value={income.freelanceExpenses ? String(income.freelanceExpenses) : ""}
                  onChange={(v) => setIncome({ freelanceExpenses: Number(v) || 0 })}
                />
              </div>

              {Number(income.freelanceRevenue) > 0 && (
                <CABrainAlert 
                  title="The 'Decor & Tech' Depreciation Tactic"
                  description="Did you know? Under Section 32, purchasing paintings for office decor, ergonomic furniture, laptops, and internet bills can be legally claimed as business expenses. This reduces your net taxable profit. Just ensure you keep the GST invoices in your business name!"
                  type="success"
                />
              )}
            </AccordionContent>
          </AccordionItem>

          {/* HOUSE PROPERTY ACCORDION */}
          <AccordionItem value="property" className="bg-white border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg"><Building2 className="size-5 text-emerald-700" /></div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">House Property</h3>
                  <p className="text-xs text-slate-500 font-normal">Home Loan Interest, Rental Income</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 space-y-4 border-t mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlainEnglishField
                  govLabel="Interest payable on borrowed capital (Sec 24b)"
                  simpleLabel="Home Loan Interest Paid"
                  placeholder="0"
                  type="number"
                  fieldId="home_loan"
                  value={houseProperty.homeLoanInterest ? String(houseProperty.homeLoanInterest) : ""}
                  onChange={(v) => setHouseProperty({ homeLoanInterest: Number(v) || 0 })}
                />
                <PlainEnglishField
                  govLabel="Gross rent received/receivable"
                  simpleLabel="Annual Rental Income"
                  placeholder="0"
                  type="number"
                  fieldId="rental_income"
                  value={houseProperty.annualRent ? String(houseProperty.annualRent) : ""}
                  onChange={(v) => setHouseProperty({ annualRent: Number(v) || 0 })}
                />
              </div>

              {Number(houseProperty.homeLoanInterest) > 0 && Number(income.hraReceived) > 0 && (
                <CABrainAlert 
                  title="HRA + Home Loan Double Dip"
                  description="CA Secret: You can legally claim BOTH HRA exemption and Home Loan Interest deduction if your owned property is in a different city, or if you can prove you rent closer to your workplace. This can save up to ₹60,000 extra in taxes!"
                  type="success"
                />
              )}
            </AccordionContent>
          </AccordionItem>

          {/* DEDUCTIONS ACCORDION */}
          <AccordionItem value="deductions" className="bg-white border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg"><HeartHandshake className="size-5 text-purple-700" /></div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Tax Deductions (Chapter VI-A)</h3>
                  <p className="text-xs text-slate-500 font-normal">80C, 80D, 80G, NPS</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 space-y-4 border-t mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlainEnglishField
                  govLabel="Section 80C (LIC, ELSS, PPF)"
                  simpleLabel="80C Investments"
                  placeholder="0"
                  type="number"
                  fieldId="80c"
                  value={deductions.section80C ? String(deductions.section80C) : ""}
                  onChange={(v) => setDeductions({ section80C: Number(v) || 0 })}
                  helper="Max limit ₹1,50,000"
                />
                <PlainEnglishField
                  govLabel="Section 80D (Health Insurance)"
                  simpleLabel="80D Medical Premium"
                  placeholder="0"
                  type="number"
                  fieldId="80d"
                  value={deductions.section80D ? String(deductions.section80D) : ""}
                  onChange={(v) => setDeductions({ section80D: Number(v) || 0 })}
                  helper="Max limit ₹25,000 (Self) / ₹50,000 (Parents)"
                />
                <PlainEnglishField
                  govLabel="Section 80CCD(1B) (NPS)"
                  simpleLabel="Extra NPS Contribution"
                  placeholder="0"
                  type="number"
                  fieldId="nps"
                  value={deductions.npsExtra ? String(deductions.npsExtra) : ""}
                  onChange={(v) => setDeductions({ npsExtra: Number(v) || 0 })}
                  helper="Max limit ₹50,000"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* CAPITAL GAINS ACCORDION */}
          <AccordionItem value="capital_gains" className="bg-white border rounded-xl px-5 shadow-sm opacity-60">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg"><TrendingUp className="size-5 text-orange-700" /></div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Capital Gains <span className="ml-2 text-[10px] bg-slate-200 px-2 py-0.5 rounded uppercase font-bold text-slate-600">Coming Soon</span></h3>
                  <p className="text-xs text-slate-500 font-normal">Stocks, Mutual Funds, Crypto, Property Sales</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 space-y-4 border-t mt-2">
              <p className="text-sm text-slate-500">Automated broker statement parsing (Zerodha, Groww) is rolling out next month. Hang tight!</p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* Navigation Actions */}
        <FilingActions className="mt-8">
          <Button href="/file/review" className="w-full sm:w-auto">
            Calculate Final Tax
          </Button>
          <Button href="/file/import/documents" variant="secondary" className="w-full sm:w-auto">
            Upload Documents
          </Button>
        </FilingActions>
      </div>
    </FilingLayout>
  );
}
