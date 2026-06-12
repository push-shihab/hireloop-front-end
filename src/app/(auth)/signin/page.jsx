"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Input, Link } from "@heroui/react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-full w-full bg-[#f1f1f1] flex items-center justify-center pt-40 pb-20">
      <Card className="w-full max-w-md p-8 bg-[#18181b] border border-zinc-800/80 rounded-3xl shadow-2xl">
        {/* 🎯 Card Header */}
        <div className="flex flex-col items-center justify-center pb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
            Welcome back, Sign in
          </h1>
          <p className="text-[14px] text-zinc-400 font-normal">
            Fill in the fields below to sign in
          </p>
        </div>

        {/* 📋 Form Node Block */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
          noValidate
        >
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

          {/* 🎛️ Action Button */}
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-[#00b4d8] text-white font-bold text-sm h-12 rounded-xl transition-all hover:bg-[#0096b4]"
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Sign In
            </Button>
          </div>

          {/* 🔗 Footer Link */}
          <div className="text-center pt-2 text-sm text-zinc-400">
            New to this app?{" "}
            <Link
              href="/signup"
              className="text-sm font-medium text-[#00b4d8] hover:underline inline"
            >
              Sign up instead
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
