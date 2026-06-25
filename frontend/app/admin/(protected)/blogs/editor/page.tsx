import { getAdminSession } from "@/lib/admin/rbac";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TiptapEditor from "@/components/admin/TiptapEditor";

export default async function BlogEditorPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const allowedRoles = ["ceo", "admin", "content_writer", "intern", "content"];
  if (!allowedRoles.includes(session.role)) {
    return <div className="p-8">Access Denied</div>;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className={buttonVariants({ variant: "ghost", size: "sm" }) + " -ml-2"}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Write Blog Post</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Save Draft</Button>
          <Button>Publish</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Left Column: Editor */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-muted-foreground ml-1">Title</label>
            <Input 
              placeholder="e.g. How to claim HRA in New Tax Regime" 
              className="text-lg font-bold py-6 px-4"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-semibold text-muted-foreground ml-1">Excerpt / Meta Description</label>
            <Input 
              placeholder="Brief summary for SEO..." 
            />
          </div>

          <div className="flex-1 min-h-[500px]">
            <TiptapEditor />
          </div>
        </div>

        {/* Right Column: SEO & ZeroGPT */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* SEO Score Gauge */}
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">SEO Overview</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-4 border-green-500/20">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-green-500" strokeDasharray="226" strokeDashoffset="45" />
                </svg>
                <span className="text-2xl font-bold text-green-600">82</span>
              </div>
              <div>
                <p className="font-medium">Good SEO Score</p>
                <p className="text-xs text-muted-foreground mt-1">Keep optimizing to reach 90+</p>
              </div>
            </div>
          </div>

          {/* SERP Guidelines Checklist */}
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Google SERP Guidelines</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Title contains target keyword</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Meta description is 120-156 chars</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                <span>Missing H2 subheadings</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                <span>Word count is below 800 words</span>
              </li>
            </ul>
          </div>

          {/* ZeroGPT API Placeholder */}
          <div className="rounded-xl border bg-card p-5 shadow-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                ZeroGPT Scanner
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Verify content originality and AI footprint before publishing.
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Scan Content
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
