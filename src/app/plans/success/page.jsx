import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { Card, Button } from "@heroui/react";
import {
  FiCheckCircle,
  FiMail,
  FiArrowRight,
  FiShield,
  FiCheck,
} from "react-icons/fi";
import Link from "next/link";
import { createNewSubscription } from "@/utils/actions/subscription";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const subInfo = {
      createdAt: new Date(),
      customerEmail,
      planId: metadata.planId,
    };
    const res = await createNewSubscription(subInfo);
    return (
      <main className="relative w-full bg-gradient-to-b from-[#f8f9ff] to-[#fafafa] min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* ✨ Ambient Accent Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-200/15 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-md">
          <Card className="w-full p-8 text-center border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-[32px] flex flex-col items-center space-y-6">
            {/* Success Ring Icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 bg-emerald-50 rounded-2xl animate-ping opacity-40 duration-1000" />
              <div className="relative w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm">
                <FiCheckCircle className="text-3xl stroke-[2.3]" />
              </div>
            </div>

            {/* Core Header Copy */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 Baby-border px-3 py-1 rounded-full">
                Payment Authorized
              </span>
              <h1 className="text-2xl font-black tracking-tight text-gray-900">
                Account Upgraded!
              </h1>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm px-2">
                We appreciate your business! Your pipeline leverage access
                metrics have been permanently provisioned onto your profile
                node.
              </p>
            </div>

            {/* Email Trace Context Container Card */}
            <div className="w-full bg-[#fafafa] border border-gray-100 rounded-2xl p-4 flex items-center gap-3.5 text-left">
              <div className="p-2.5 bg-white border border-gray-100 text-gray-400 rounded-xl shrink-0">
                <FiMail className="text-base" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Confirmation Sent To
                </p>
                <p className="text-xs font-semibold text-gray-800 truncate">
                  {customerEmail}
                </p>
              </div>
            </div>

            {/* Support Trace Notice */}
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Have questions regarding onboarding? Ping us at{" "}
              <a
                href="mailto:orders@example.com"
                className="font-bold text-gray-700 hover:text-[#5b4eff] transition-colors underline decoration-gray-200 underline-offset-4"
              >
                orders@example.com
              </a>
            </p>

            {/* Navigation Routing Action Elements */}
            <div className="w-full pt-2">
              <Link href="/jobs" passHref className="w-full block">
                <Button
                  className="w-full h-12 bg-gray-900 text-white font-bold text-xs rounded-xl shadow-md transition-transform active:scale-[0.98] hover:bg-black"
                  endContent={<FiArrowRight className="text-sm stroke-[2.5]" />}
                >
                  Go to Dashboard Board
                </Button>
              </Link>
            </div>
          </Card>

          {/* Fixed Footer: Using a beautiful combo of FiShield + FiCheck for a secure badge look */}
          <div className="mt-8 text-center text-[10px] text-gray-400 flex items-center justify-center gap-2 tracking-wide select-none">
            <div className="flex items-center gap-0.5 text-gray-400/80">
              <FiShield className="text-xs" />
              <FiCheck className="text-[9px] -ml-2.5 mt-0.5 stroke-[3.5] text-emerald-500" />
            </div>
            <span>
              Encrypted Ledger Record Trace • Powered securely by Stripe
            </span>
          </div>
        </div>
      </main>
    );
  }
}
