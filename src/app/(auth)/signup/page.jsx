"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Input, Link } from "@heroui/react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { redirect, useSearchParams } from "next/navigation";

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const params = useSearchParams();
  const redirectPath = params.get("redirect");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      subscriptionPlan: "job_seeker",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const plan = data.role === "recruiter" ? "recruiter_free" : "seeker_free";
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.subscriptionPlan,
      plan,
      callbackURL: "/",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (res) {
      if (redirectPath) {
        redirect(`${redirectPath}`);
      } else {
        redirect("/");
      }
    }
  };

  return (
    <div className="min-h-full w-full bg-[#f1f1f1] flex items-center justify-center pt-40 pb-20">
      <Card className="w-full max-w-md p-8 bg-[#18181b] border border-zinc-800/80 rounded-3xl shadow-2xl">
        {/* 🎯 Card Header */}
        <div className="flex flex-col items-center justify-center pb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
            Create an account
          </h1>
          <p className="text-[14px] text-zinc-400 font-normal">
            Fill in the fields below to get started
          </p>
        </div>

        {/* 📋 Form Node Block */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
          noValidate
        >
          {/* 🧑 Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-200">
              Name<span className="text-amber-500 ml-0.5">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your full name"
              variant="bordered"
              radius="xl"
              size="lg"
              classNames={{
                inputWrapper:
                  "bg-[#27272a] border-zinc-700/60 data-[hover=true]:border-zinc-600 focus-within:!border-[#00b4d8] h-12",
                input: "text-white placeholder:text-zinc-500 text-sm",
              }}
              startContent={
                <FiUser className="text-zinc-400 text-base shrink-0 mr-1" />
              }
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              {...register("name", { required: "Full name is required." })}
            />
          </div>

          {/* ✉️ Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-200">
              Email Address<span className="text-amber-500 ml-0.5">*</span>
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              variant="bordered"
              radius="xl"
              size="lg"
              classNames={{
                inputWrapper:
                  "bg-[#27272a] border-zinc-700/60 data-[hover=true]:border-zinc-600 focus-within:!border-[#00b4d8] h-12",
                input: "text-white placeholder:text-zinc-500 text-sm",
              }}
              startContent={
                <FiMail className="text-zinc-400 text-base shrink-0 mr-1" />
              }
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              {...register("email", {
                required: "Email address is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address.",
                },
              })}
            />
          </div>

          {/* 🔒 Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-200">
              Password<span className="text-amber-500 ml-0.5">*</span>
            </label>
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="Choose a password"
              variant="bordered"
              radius="xl"
              size="lg"
              classNames={{
                inputWrapper:
                  "bg-[#27272a] border-zinc-700/60 data-[hover=true]:border-zinc-600 focus-within:!border-[#00b4d8] h-12",
                input: "text-white placeholder:text-zinc-500 text-sm",
              }}
              startContent={
                <FiLock className="text-zinc-400 text-base shrink-0 mr-1" />
              }
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              endContent={
                <button
                  className="focus:outline-none text-zinc-400 hover:text-zinc-200 transition p-1"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FiEyeOff className="text-base" />
                  ) : (
                    <FiEye className="text-base" />
                  )}
                </button>
              }
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
            />
          </div>

          {/* 📻 Radio Section */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-200">
              Subscription plan
            </label>
            <div className="flex flex-row items-center gap-6 pt-1 text-white">
              <label className="flex items-center gap-2 cursor-pointer select-none font-medium text-sm">
                <input
                  type="radio"
                  value="job_seeker"
                  className="w-4 h-4 accent-[#00b4d8] cursor-pointer bg-transparent border-zinc-600"
                  {...register("subscriptionPlan")}
                />
                <span>Job Seeker</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none font-medium text-sm">
                <input
                  type="radio"
                  value="recruiter"
                  className="w-4 h-4 accent-[#00b4d8] cursor-pointer bg-transparent border-zinc-600"
                  {...register("subscriptionPlan")}
                />
                <span>Recruiter</span>
              </label>
            </div>
          </div>

          {/* 🎛️ Action Button */}
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-[#00b4d8] text-white font-bold text-sm h-12 rounded-xl transition-all hover:bg-[#0096b4]"
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Sign Up
            </Button>
          </div>

          {/* 🔗 Footer Link */}
          <div className="text-center pt-2 text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href={
                redirectPath ? `/signin?redirect=${redirectPath}` : "/signin"
              }
              className="text-sm font-medium text-[#00b4d8] hover:underline inline"
            >
              Sign in instead
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
