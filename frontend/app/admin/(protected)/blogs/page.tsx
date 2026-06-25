import Link from "next/link";
import { Plus, MoreHorizontal } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAdminSession } from "@/lib/admin/rbac";
import { redirect } from "next/navigation";

export default async function AdminBlogsPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  // Allow only Admin, Content Writer, Intern
  const allowedRoles = ["ceo", "admin", "content_writer", "intern"];
  if (!allowedRoles.includes(session.role)) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Access Denied</h2>
        <p className="text-muted-foreground mt-2">You don't have permission to view or manage content.</p>
      </div>
    );
  }

  // Placeholder data for the UI
  const mockBlogs = [
    { id: "1", title: "How to save tax under New Regime?", status: "Published", author: "Admin", date: "2026-06-25" },
    { id: "2", title: "Understanding AIS Mismatches", status: "Draft", author: "Content Writer", date: "2026-06-24" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">Manage your blog posts and articles.</p>
        </div>
        <Link href="/admin/blogs/editor" className={buttonVariants({ variant: "default" })}>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Link>
      </div>

      <div className="rounded-md border bg-card">
        <div className="p-4 grid grid-cols-12 border-b bg-muted/50 text-sm font-medium text-muted-foreground">
          <div className="col-span-6">Title</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Author</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        {mockBlogs.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">No posts found. Create one!</div>
        ) : (
          <div className="divide-y">
            {mockBlogs.map(blog => (
              <div key={blog.id} className="p-4 grid grid-cols-12 items-center text-sm transition-colors hover:bg-muted/30">
                <div className="col-span-6 font-medium">{blog.title}</div>
                <div className="col-span-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${blog.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {blog.status}
                  </span>
                </div>
                <div className="col-span-2 text-muted-foreground">{blog.author}</div>
                <div className="col-span-2 text-right flex justify-end gap-2">
                   <Link href={`/admin/blogs/editor?id=${blog.id}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>Edit</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
