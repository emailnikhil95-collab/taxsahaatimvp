"use client";

import Link from "next/link";
import { Calculator, FileText, TrendingUp, ArrowRight } from "lucide-react";

export function ToolsSection() {
  const tools = [
    {
      title: "HRA Exemption Calculator",
      description: "Calculate your exact House Rent Allowance exemption based on salary, rent paid, and city tier.",
      icon: <HomeIcon className="size-6 text-blue-600" />,
      link: "/tools#hra-calculator",
    },
    {
      title: "Old vs New Regime Calculator",
      description: "Compare your tax liability under both regimes to find out which one saves you more money.",
      icon: <Calculator className="size-6 text-emerald-600" />,
      link: "/tools#tax-calculator",
    },
    {
      title: "Rent Receipt Generator",
      description: "Instantly generate valid rent receipts to submit to your employer for HRA claims.",
      icon: <FileText className="size-6 text-purple-600" />,
      link: "/tools#rent-receipt",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Free Tax Tools
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Use our free calculators and generators to plan your taxes and claim maximum deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.link} className="block group">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center rounded-xl p-3 mb-6 ${
                  index === 0 ? 'bg-blue-50' : index === 1 ? 'bg-emerald-50' : 'bg-purple-50'
                }`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-slate-800"
          >
            Find all tools <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
