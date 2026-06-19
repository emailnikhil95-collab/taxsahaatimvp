import type { Metadata } from "next";
import Link from "next/link";
import { PartnerApplyForm } from "@/components/marketing/PartnerApplyForm";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PageShell } from "@/components/layout/PageShell";
import { CompactGrid } from "@/components/layout/CompactGrid";
import { LandingCard } from "@/components/marketing/LandingCard";
import { B2B_PROFESSIONALS } from "@/lib/copy/marketing";
import { COMPACT_PAGE_SHELL, TYPOGRAPHY_SCALE } from "@/lib/design/layout";
import { pageMetadata } from "@/lib/seo";
import { Briefcase, CheckCircle2, Users } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "For Tax Professionals",
  description: B2B_PROFESSIONALS.subheadline,
  path: "/for-professionals",
});

export default function ForProfessionalsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageShell className={COMPACT_PAGE_SHELL} contentClassName="max-w-5xl">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              LastMinute Pro
            </p>
            <h1
              className={`mt-1.5 font-heading font-semibold text-foreground ${TYPOGRAPHY_SCALE.headline}`}
            >
              {B2B_PROFESSIONALS.headline}
            </h1>
            <p
              className={`mt-2 max-w-2xl text-muted-foreground ${TYPOGRAPHY_SCALE.caption}`}
            >
              {B2B_PROFESSIONALS.subheadline}
            </p>
          </ScrollReveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8">
            <ScrollReveal delay={1} className="space-y-4">
              <CompactGrid cols={2}>
                {B2B_PROFESSIONALS.benefits.map((benefit) => (
                  <LandingCard key={benefit} className="!p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-emerald-600"
                        aria-hidden
                      />
                      <span className="text-xs leading-relaxed text-foreground sm:text-sm">
                        {benefit}
                      </span>
                    </div>
                  </LandingCard>
                ))}
              </CompactGrid>

              <CompactGrid cols={2}>
                <LandingCard className="!p-4">
                  <Users className="size-4 text-primary" aria-hidden />
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    10 or 100 clients
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Same tools whether you run a solo desk or a busy season floor.
                  </p>
                </LandingCard>
                <LandingCard className="!p-4">
                  <Briefcase className="size-4 text-primary" aria-hidden />
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    You set client fees
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Pay wholesale per return. Bill your clients whatever you choose.
                  </p>
                </LandingCard>
              </CompactGrid>

              <p className="text-xs text-muted-foreground sm:text-sm">
                Filing for yourself?{" "}
                <Link href="/" className="font-medium text-primary hover:underline">
                  Go to the consumer filing flow
                </Link>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <PartnerApplyForm />
            </ScrollReveal>
          </div>
        </PageShell>
      </main>
      <SiteFooter />
    </>
  );
}
