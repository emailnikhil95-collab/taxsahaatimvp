import Link from "next/link";
import { MarkdownArticleBody } from "@/components/marketing/MarkdownArticleBody";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPACT_PAGE_SHELL } from "@/lib/design/layout";
import type { LearnArticle } from "@/lib/content/learn-articles";
import type { SeoLandingPage as SeoLandingConfig } from "@/lib/seo/landing-pages";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface SeoLandingPageProps {
  config: SeoLandingConfig;
  article: LearnArticle;
}

export function buildLandingMetadata(
  config: SeoLandingConfig,
  article: LearnArticle
): Metadata {
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: config.path,
  });
}

export function SeoLandingPageView({ config, article }: SeoLandingPageProps) {
  const previewBody = article.body.split("\n\n").slice(0, 6).join("\n\n");

  return (
    <>
      <SiteHeader />
      <main
        className={cn(
          "mx-auto max-w-3xl min-w-0 px-4 sm:px-6 lg:px-8",
          COMPACT_PAGE_SHELL
        )}
      >
        <p className="text-xs text-muted-foreground sm:text-sm">
          <Link href="/learn" className="text-primary hover:underline">
            Learn
          </Link>
          {" · "}
          <Link href={`/learn/${article.slug}`} className="text-primary hover:underline">
            Full article
          </Link>
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{article.description}</p>

        <Link
          href={config.ctaHref}
          className={cn(buttonVariants({ size: "default" }), "mt-5 inline-flex gap-2")}
        >
          {config.ctaLabel}
          <ArrowRight className="size-4" />
        </Link>

        <article className="prose-article section-compact-tight mt-6">
          <MarkdownArticleBody body={previewBody} />
        </article>

        <div className="landing-card mt-6 !p-4">
          <p className="text-xs text-muted-foreground sm:text-sm">
            Continue reading the full guide for examples, tables, and step-by-step checklists.
          </p>
          <Link
            href={`/learn/${article.slug}`}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-3")}
          >
            Read full guide
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
