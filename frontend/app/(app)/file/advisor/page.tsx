"use client";

import { FilingLayout } from "@/components/filing/FilingLayout";
import { ScreenTitle, Banner } from "@/components/filing/ui";
import { AIChatInterview } from "@/components/filing/AIChatInterview";

export default function AdvisorPage() {
  return (
    <FilingLayout
      mirrorText="The Smart CA is an AI assistant designed to help you uncover missed deductions and explain tax logic. It does not replace a registered tax professional."
    >
      <ScreenTitle
        title="Ask Smart CA"
        subtitle="Chat with our AI accountant to discover missed deductions, optimize your taxes, and understand your financial health."
      />

      <Banner variant="info" className="mb-6">
        <strong>Beta Feature:</strong> This AI acts as your personal CA to cross-examine your details and maximize your refund. Please verify its suggestions manually.
      </Banner>

      <div className="w-full max-w-2xl mx-auto">
        <AIChatInterview />
      </div>

    </FilingLayout>
  );
}
