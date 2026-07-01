"use client";

import { useState } from "react";
import { useDraftStore } from "@/lib/store/draft";
import { FilingLayout } from "@/components/filing/FilingLayout";
import { PlainEnglishField } from "@/components/filing/PlainEnglishField";
import { Button, FilingActions, ScreenTitle } from "@/components/filing/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CABrainAlert } from "@/components/filing/CABrainAlert";
import { Briefcase, Landmark, HeartHandshake, Laptop, TrendingUp, Building2, HelpCircle, UploadCloud, Check } from "lucide-react";
import { cn } from "@/lib/utils";

function BrokerChip({ name, selected, onClick }: { name: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center rounded-lg border px-3 py-1.5 transition-all text-xs font-semibold",
        selected
          ? "border-blue-600 bg-blue-50/80 text-blue-700 shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
      )}
    >
      {selected && <Check className="size-3 mr-1.5" strokeWidth={3} />}
      {name}
    </button>
  );
}

function CompactUploadOrInputRow({
  title,
  uploadLabel,
  inputValue,
  onInputChange,
  inputPlaceholder,
}: {
  title: string;
  uploadLabel: string;
  inputValue: string;
  onInputChange: (v: string) => void;
  inputPlaceholder: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 p-3 border border-slate-200 rounded-xl bg-white hover:border-blue-200 transition-colors">
      <div className="w-full md:w-44 font-semibold text-slate-800 text-sm shrink-0 leading-tight">
        {title}
      </div>
      
      <div className="flex-1 flex w-full items-center gap-3">
        {/* Upload Zone */}
        <div className="flex-1 border border-dashed border-slate-300 rounded-lg p-2 bg-slate-50 flex items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors">
          <UploadCloud className="size-4 text-blue-500 mr-2 shrink-0" />
          <span className="text-xs font-medium text-slate-600 truncate">{uploadLabel}</span>
          <input type="file" className="hidden" />
        </div>

        {/* Divider */}
        <span className="text-[10px] font-bold text-slate-400 uppercase">OR</span>

        {/* Manual Input */}
        <div className="flex-1 relative">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-sm">₹</span>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pl-6 pr-3 text-sm font-medium outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-400"
            placeholder={inputPlaceholder}
          />
        </div>
      </div>
    </div>
  );
}

export default function ComprehensiveFilingForm() {
  const { income, setIncome, houseProperty, setHouseProperty, deductions, setDeductions } = useDraftStore();

  // Capital Gains state
  const [brokers, setBrokers] = useState<string[]>([]);
  const [brokerInputs, setBrokerInputs] = useState<Record<string, string>>({});
  const [fnoProfit, setFnoProfit] = useState("");
  const [mfProfit, setMfProfit] = useState("");
  const [lossesCarryingForward, setLossesCarryingForward] = useState("");

  const toggleBroker = (b: string) => {
    setBrokers(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  };

  const handleBrokerInputChange = (broker: string, val: string) => {
    setBrokerInputs(prev => ({ ...prev, [broker]: val }));
  };

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
          <AccordionItem value="capital_gains" className="bg-white border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg"><TrendingUp className="size-5 text-orange-700" /></div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Capital Gains & F&O</h3>
                  <p className="text-xs text-slate-500 font-normal">Stocks, Mutual Funds, Crypto, Future & Options</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 space-y-4 border-t mt-2">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-800">Which platforms do you use?</h4>
                  <a href="#" className="hidden sm:block text-[11px] text-blue-600 hover:underline">Process Note: Download from top 5 platforms</a>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Zerodha", "Groww", "Angel One", "Upstox", "ICICI Direct", "Other MFs"].map(b => (
                    <BrokerChip key={b} name={b} selected={brokers.includes(b)} onClick={() => toggleBroker(b)} />
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {brokers.length === 0 && (
                    <div className="text-center py-4 text-slate-400 text-xs italic bg-white border border-dashed rounded-xl mb-2">
                      Select platforms above to add their P&L statements
                    </div>
                  )}
                  {brokers.map(b => (
                    <CompactUploadOrInputRow
                      key={b}
                      title={`${b} P&L`}
                      uploadLabel={`Upload ${b} Statement`}
                      inputValue={brokerInputs[b] || ""}
                      onInputChange={(val) => handleBrokerInputChange(b, val)}
                      inputPlaceholder="Estimated Profit"
                    />
                  ))}

                  <div className="h-px bg-slate-200 my-2"></div>

                  <CompactUploadOrInputRow
                    title="Futures & Options (F&O)"
                    uploadLabel="Upload P&L"
                    inputValue={fnoProfit}
                    onInputChange={setFnoProfit}
                    inputPlaceholder="F&O Profit"
                  />

                  <CompactUploadOrInputRow
                    title="Mutual Funds & Stocks"
                    uploadLabel="Upload CAM"
                    inputValue={mfProfit}
                    onInputChange={setMfProfit}
                    inputPlaceholder="Capital Gains"
                  />

                  <CompactUploadOrInputRow
                    title="Brought Forward Losses"
                    uploadLabel="Upload Last ITR-V"
                    inputValue={lossesCarryingForward}
                    onInputChange={setLossesCarryingForward}
                    inputPlaceholder="Loss Amount"
                  />
                </div>
                
                <div className="mt-4 sm:hidden">
                  <a href="#" className="text-[11px] text-blue-600 hover:underline">Process Note: How to download statements</a>
                </div>
              </div>
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
