import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import db from "@/lib/db";

type CustomerToken = {
  userId: number;
  email: string;
  role: string;
};

export default async function CustomerDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("customer_token")?.value;

  if (!token) {
    redirect("/customer/login");
  }

  let user: CustomerToken;

  try {
    user = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as CustomerToken;
  } catch {
    redirect("/customer/login");
  }

  if (user.role !== "customer") {
    redirect("/customer/login");
  }

  const [rows] = await db.query(
    `SELECT id, name, email, phone, created_at
     FROM users
     WHERE id = ?
     LIMIT 1`,
    [user.userId]
  );

  const users = rows as any[];

  if (users.length === 0) {
    redirect("/customer/login");
  }

  const customer = users[0];

  const [enquiryRows] = await db.query(
    `SELECT id, subject, message, status, created_at
     FROM contact_messages
     WHERE email = ?
     ORDER BY created_at DESC`,
    [customer.email]
  );

  const enquiries = enquiryRows as any[];

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              ALEEMAK CUSTOMER
            </p>

            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
              Welcome, {customer.name}
            </h1>

            <p className="mt-2 text-muted-foreground">
              Manage your account and enquiries.
            </p>
          </div>

          <form action="/api/customer/logout" method="POST">
            <button
              type="submit"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <section className="rounded-3xl border border-border bg-card p-7 shadow-sm">
            <p className="text-sm font-semibold text-muted-foreground">
              My Profile
            </p>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-xs text-muted-foreground">
                  Name
                </p>
                <p className="mt-1 font-medium">
                  {customer.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Email
                </p>
                <p className="mt-1 font-medium break-all">
                  {customer.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Phone
                </p>
                <p className="mt-1 font-medium">
                  {customer.phone || "-"}
                </p>
              </div>

            </div>
          </section>

          <section className="lg:col-span-2 rounded-3xl border border-border bg-card p-7 shadow-sm">

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  My Enquiries
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {enquiries.length}
                </h2>
              </div>
            </div>

            {enquiries.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                You don't have any enquiries yet.
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {enquiries.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    className="rounded-2xl border border-border p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">
                          {enquiry.subject || "Business Enquiry"}
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {enquiry.message}
                        </p>
                      </div>

                      <span className="rounded-full border border-border px-3 py-1 text-xs font-medium capitalize">
                        {enquiry.status}
                      </span>
                    </div>

                    <p className="mt-4 text-xs text-muted-foreground">
                      {new Date(enquiry.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </section>

        </div>

      </div>
    </main>
  );
}