"use client";

import { FilingLayout } from "@/components/filing/FilingLayout";
import { ScreenTitle, Banner } from "@/components/filing/ui";
import { AIChatInterview } from "@/components/filing/AIChatInterview";

export default function AdvisorPage() {
  return (
    <FilingLayout
      mirrorText="The Smart CA is an AI assistant designed to help you uncover missed deductions and explain tax logic. It does not replace a registered tax professional."
    >
      <div className="w-full max-w-4xl mx-auto h-[calc(100vh-140px)]">
        <AIChatInterview />
      </div>

    </FilingLayout>
  );
}
