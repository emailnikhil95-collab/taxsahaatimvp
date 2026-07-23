"use client";

import { FilingLayout } from "@/components/filing/FilingLayout";
import { ScreenTitle, Banner } from "@/components/filing/ui";
import { AIChatInterview } from "@/components/filing/AIChatInterview";

export default function AdvisorPage() {
  return (
    <FilingLayout
      noPadding
      mirrorText="The Smart CA is an AI assistant designed to help you uncover missed deductions and explain tax logic. It does not replace a registered tax professional."
    >
      <div className="w-full h-[calc(100vh-64px)]">
        <AIChatInterview />
      </div>

    </FilingLayout>
  );
}
