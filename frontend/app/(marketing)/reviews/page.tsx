"use client";

import { useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { CompactGrid } from "@/components/layout/CompactGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FeedbackScreen } from "@/components/marketing/FeedbackScreen";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPACT_PAGE_SHELL, TYPOGRAPHY_SCALE } from "@/lib/design/layout";
import { TESTIMONIALS, TESTIMONIAL_DISCLOSURE } from "@/lib/content/testimonials";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedbackSummary {
  averageRating: number;
  count: number;
  approvedCount: number;
  entries: Array<{
    id: string;
    rating: number;
    message: string;
    createdAt: string;
  }>;
}

export default function ReviewsPage() {
  const [summary, setSummary] = useState<FeedbackSummary | null>(null);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: FeedbackSummary | null) => {
        if (data) setSummary(data);
      })
      .catch(() => undefined);
  }, []);

  return (
    <>
      <SiteHeader />
      <PageShell className={COMPACT_PAGE_SHELL} contentClassName="max-w-4xl">
        <ScrollReveal delay={0}>
          <h1 className={`font-semibold text-foreground ${TYPOGRAPHY_SCALE.headline}`}>Reviews</h1>
          <p className={`mt-1.5 text-muted-foreground ${TYPOGRAPHY_SCALE.caption}`}>
            What filers say about LastMinute ITR - illustrative examples plus real user feedback.
          </p>
        </ScrollReveal>

        {summary && summary.count > 0 && (
          <ScrollReveal
            delay={1}
            className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-muted/20 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:px-5"
          >
            <div>
              <p className="text-3xl font-bold tabular-nums">
                {summary.averageRating.toFixed(1)}
              </p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-4",
                      i < Math.round(summary.averageRating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted"
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">{summary.count}</strong> total ratings
              </p>
              <p>
                <strong className="text-foreground">{summary.approvedCount}</strong> shared
                publicly (3+ stars)
              </p>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={1} className="mt-6">
          <h2 className="text-base font-semibold">Illustrative examples</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">{TESTIMONIAL_DISCLOSURE}</p>
          <CompactGrid cols={2} className="mt-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="h-full min-w-0">
                <CardHeader className="pb-2 pt-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-4",
                          i < t.rating ? "fill-amber-400 text-amber-400" : "text-muted"
                        )}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-base font-normal leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {t.name} · {t.role}, {t.city}
                  {t.plan && ` · ${t.plan}`}
                </CardContent>
              </Card>
            ))}
          </CompactGrid>
        </ScrollReveal>

        {summary && summary.entries.length > 0 && (
          <ScrollReveal delay={2} className="mt-8">
            <h2 className="text-base font-semibold">From filers like you</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Real feedback with ratings of 3 or above.
            </p>
            <CompactGrid cols={2} className="mt-3">
              {summary.entries.map((entry) => (
                <Card key={entry.id} className="h-full min-w-0">
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "size-4",
                            i < entry.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                    <CardTitle className="text-base font-normal leading-relaxed">
                      &ldquo;{entry.message}&rdquo;
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground">
                    {new Date(entry.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </CardContent>
                </Card>
              ))}
            </CompactGrid>
          </ScrollReveal>
        )}

        <ScrollReveal delay={2} className="mt-8">
          <h2 className="text-base font-semibold">Share your experience</h2>
          <FeedbackScreen screen="reviews" compact className="mt-3" />
        </ScrollReveal>
      </PageShell>
      <SiteFooter />
    </>
  );
}
