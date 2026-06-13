"use client";
import RecruiterStats from "@/components/dashboard/RecruiterStats";
import { authClient } from "@/lib/auth-client";
import React from "react";

const page = () => {
  const { data, isPending } = authClient.useSession();
  if (isPending) {
    return <h1 className="p-5">Loading...</h1>;
  }
  return (
    <div className="p-5 bg-[#f8f9fa] min-h-screen">
      <h1 className="text-3xl font-medium">Welcome back, {data?.user.name}</h1>
      <RecruiterStats></RecruiterStats>
    </div>
  );
};

export default page;
