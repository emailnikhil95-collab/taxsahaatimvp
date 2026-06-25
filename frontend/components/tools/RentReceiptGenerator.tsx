"use client";

import { useState } from "react";
import { FileText } from "lucide-react";

export function RentReceiptGenerator() {
  const [tenantName, setTenantName] = useState("");
  const [landlordName, setLandlordName] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [address, setAddress] = useState("");
  const [month, setMonth] = useState("");
  const [generated, setGenerated] = useState(false);

  const generateReceipt = () => {
    if (tenantName && landlordName && rentAmount && address && month) {
      setGenerated(true);
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
          <FileText className="size-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">Rent Receipt Generator</h2>
          <p className="text-sm text-slate-500">Generate valid rent receipts for HRA claims</p>
        </div>
      </div>

      {!generated ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Tenant Name</label>
              <input
                type="text"
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g. Rahul Kumar"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Landlord Name</label>
              <input
                type="text"
                value={landlordName}
                onChange={(e) => setLandlordName(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g. Amit Sharma"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">Monthly Rent Amount (₹)</label>
            <input
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="e.g. 15000"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">Property Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Full address of the rented property"
              rows={2}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">Receipt Month/Year</label>
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateReceipt}
            disabled={!tenantName || !landlordName || !rentAmount || !address || !month}
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            Generate Receipt
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-lg border-2 border-dashed border-slate-300 p-6">
            <h3 className="mb-4 text-center text-lg font-bold uppercase text-slate-800 underline">Rent Receipt</h3>
            <p className="mb-4 text-sm text-slate-700 leading-relaxed">
              Received sum of <strong>₹ {rentAmount}</strong> from <strong>{tenantName}</strong> towards the rent of property located at <strong>{address}</strong> for the period of <strong>{month}</strong>.
            </p>
            <div className="mt-8 flex justify-between text-sm">
              <div>
                <p className="mb-8 font-semibold">Date: _________________</p>
              </div>
              <div className="text-right">
                <p className="mb-8 font-semibold text-slate-400">(Signature)</p>
                <p className="font-bold">{landlordName}</p>
                <p>Landlord</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => window.print()}
            className="w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Print Receipt
          </button>
          <button
            onClick={() => setGenerated(false)}
            className="w-full rounded-lg bg-white border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Create Another
          </button>
        </div>
      )}
    </div>
  );
}
