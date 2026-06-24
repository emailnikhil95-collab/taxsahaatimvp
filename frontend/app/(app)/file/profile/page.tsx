import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { B2C_SESSION_COOKIE, readB2CSession } from "@/lib/auth/b2c";
import { DeleteAccountClient } from "./DeleteAccountClient";
import { FilingLayout } from "@/components/filing/FilingLayout";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(B2C_SESSION_COOKIE)?.value;
  const session = readB2CSession(token);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <FilingLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Profile Management
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage your personal information and data privacy settings.
          </p>
        </div>

        <div className="space-y-6">
          {/* Personal Info Section */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <h2 className="text-lg font-medium text-slate-900">
                Personal Information
              </h2>
            </div>
            <div className="p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-slate-500">Full name</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">{session.name}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-slate-500">Email address</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">{session.email}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Data Privacy Section (DPDP) */}
          <div className="overflow-hidden rounded-xl border border-red-100 bg-white shadow-sm">
            <div className="border-b border-red-100 bg-red-50/50 px-6 py-4">
              <h2 className="text-lg font-medium text-red-800">
                Data Privacy & Security
              </h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">
                Under the Indian Digital Personal Data Protection (DPDP) Act 2023, you have
                the right to erase your personal data. This will instantly purge
                your tax documents, calculations, and profile from our active systems.
              </p>
              <DeleteAccountClient verifiedEmail={session.email} />
            </div>
          </div>
        </div>
      </div>
    </FilingLayout>
  );
}
