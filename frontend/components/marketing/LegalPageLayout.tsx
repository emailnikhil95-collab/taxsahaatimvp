import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ProseBlock } from "@/components/layout/ProseBlock";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { COMPACT_PAGE_SHELL, TYPOGRAPHY_SCALE } from "@/lib/design/layout";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <PageShell className={COMPACT_PAGE_SHELL} contentClassName="max-w-4xl">
        <Link
          href="/"
          className="inline-flex min-h-9 items-center text-[length:var(--text-caption)] text-primary hover:underline"
        >
          ← Home
        </Link>
        <h1 className={`mt-3 font-semibold text-foreground ${TYPOGRAPHY_SCALE.headline}`}>{title}</h1>
        <p className={`mt-2 text-muted-foreground ${TYPOGRAPHY_SCALE.caption}`}>
          Last updated: {lastUpdated}
        </p>
        <ProseBlock className="mt-6">
          {children}
        </ProseBlock>
      </PageShell>
      <SiteFooter />
    </>
  );
}
