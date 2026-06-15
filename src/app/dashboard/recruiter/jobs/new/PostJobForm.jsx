"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  Switch,
  Button,
} from "@heroui/react";
import { FiBriefcase, FiGlobe } from "react-icons/fi";
import { useSession } from "@/lib/auth-client";
import { createNewJob } from "@/utils/actions/jobs";
import { redirect } from "next/navigation";

export default function PostJobForm({ company }) {
  const { data: session } = useSession();
  const { register, control, watch, handleSubmit } = useForm({
    defaultValues: {
      jobTitle: "",
      jobCategory: "",
      jobType: "",
      minSalary: "",
      maxSalary: "",
      currency: "USD",
      isRemote: false,
      location: "",
      deadline: "",
      responsibilities: "",
      requirements: "",
      benefits: "",
    },
  });

  const isRemote = watch("isRemote");

  const submitPostJob = async (data) => {
    const newJob = {
      ...data,
      createdBy: session.user.name,
      recruiterId: session.user.id,
      createdAt: new Date(),
      jobStatus: "active",
      companyId: company._id,
      companyName: company.name,
      companyLogoUrl: company.logoUrl,
    };
    const res = await createNewJob(newJob);
    if (res.acknowledged) {
      alert("Job created successfully🤩");
      redirect("/dashboard/recruiter/jobs");
    }
  };

  const textInputClass =
    "w-full text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-500 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-400 outline-none transition-all shadow-sm";
  const textAreaClass =
    "w-full text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-500 rounded-lg p-3 text-sm placeholder:text-zinc-400 outline-none transition-all shadow-sm";

  const selectBoxClass = "w-full";
  const triggerClasses =
    "w-full flex items-center justify-between bg-white border border-zinc-200 hover:border-zinc-300 h-12 rounded-lg px-3 text-zinc-900 transition-all text-sm outline-none data-[focused=true]:border-zinc-500 shadow-sm";
  const popoverClasses =
    "bg-white border border-zinc-200 text-zinc-900 rounded-lg shadow-xl p-1";
  const listItemClasses =
    "flex items-center justify-between p-2 rounded-md hover:bg-zinc-100 cursor-pointer text-sm text-zinc-700 outline-none data-[focused=true]:bg-zinc-100";

  return (
    <div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-xl p-8 my-5 shadow-sm">
      {/* Header Block */}
      <div className="border-b border-zinc-100 pb-6 mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Post a New Job
        </h1>
        <p className="text-zinc-500 text-sm mt-1">
          Fill out the details below to publish your open position.
        </p>

        {/* Company Status Verification Panel */}
        <div className="mt-4 inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-1.5 text-xs text-zinc-600">
          <FiBriefcase size={14} className="text-zinc-400" />
          Posting as:{" "}
          <span className="font-semibold text-zinc-800">
            {company?.name || "Company"}
          </span>
          <span className="text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Approved
          </span>
        </div>
      </div>

      {/* Visual-Only Presentation Form */}
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-8"
        validationBehavior="aria"
      >
        {/* SECTION 1: Job Information */}
        <Fieldset className="space-y-6 w-full">
          <legend className="text-lg font-medium text-zinc-800 border-b border-zinc-100 w-full pb-2 mb-2">
            Job Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField className="flex flex-col gap-1 w-full">
              <Label className="text-zinc-600 font-medium text-sm">
                Job Title
              </Label>
              <Input
                placeholder="e.g. Senior Frontend Engineer"
                className={textInputClass}
                {...register("jobTitle")}
              />
            </TextField>

            <Controller
              name="jobCategory"
              control={control}
              render={({ field }) => (
                <Select
                  className={selectBoxClass}
                  selectedKeys={field.value ? [field.value] : []}
                  onSelectionChange={(keys) => field.onChange(keys)}
                >
                  <Label className="text-zinc-600 font-medium text-sm mb-1 block">
                    Job Category
                  </Label>
                  <Select.Trigger className={triggerClasses}>
                    <Select.Value className="text-zinc-900 placeholder:text-zinc-400" />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className={popoverClasses}>
                    <ListBox className="outline-none">
                      <ListBox.Item
                        id="technology"
                        className={listItemClasses}
                        textValue="Technology"
                      >
                        Technology
                      </ListBox.Item>
                      <ListBox.Item
                        id="design"
                        className={listItemClasses}
                        textValue="Design"
                      >
                        Design
                      </ListBox.Item>
                      <ListBox.Item
                        id="marketing"
                        className={listItemClasses}
                        textValue="Marketing"
                      >
                        Marketing
                      </ListBox.Item>
                      <ListBox.Item
                        id="sales"
                        className={listItemClasses}
                        textValue="Sales"
                      >
                        Sales
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="jobType"
              control={control}
              render={({ field }) => (
                <Select
                  className={selectBoxClass}
                  selectedKeys={field.value ? [field.value] : []}
                  onSelectionChange={(keys) => field.onChange(keys)}
                >
                  <Label className="text-zinc-600 font-medium text-sm mb-1 block">
                    Job Type
                  </Label>
                  <Select.Trigger className={triggerClasses}>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className={popoverClasses}>
                    <ListBox className="outline-none">
                      <ListBox.Item
                        id="full-time"
                        className={listItemClasses}
                        textValue="Full-time"
                      >
                        Full-time
                      </ListBox.Item>
                      <ListBox.Item
                        id="part-time"
                        className={listItemClasses}
                        textValue="Part-time"
                      >
                        Part-time
                      </ListBox.Item>
                      <ListBox.Item
                        id="contract"
                        className={listItemClasses}
                        textValue="Contract"
                      >
                        Contract
                      </ListBox.Item>
                      <ListBox.Item
                        id="internship"
                        className={listItemClasses}
                        textValue="Internship"
                      >
                        Internship
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              )}
            />

            {/* Salary and Currency Inline Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 space-y-1">
                <span className="text-zinc-600 font-medium text-sm block">
                  Salary Range
                </span>
                <div className="flex gap-2">
                  <TextField className="w-full">
                    <Input
                      placeholder="Min"
                      type="number"
                      className={textInputClass}
                      {...register("minSalary")}
                    />
                  </TextField>
                  <TextField className="w-full">
                    <Input
                      placeholder="Max"
                      type="number"
                      className={textInputClass}
                      {...register("maxSalary")}
                    />
                  </TextField>
                </div>
              </div>

              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <Select
                    className="w-full mt-6"
                    selectedKeys={[field.value]}
                    onSelectionChange={(keys) => field.onChange(keys)}
                  >
                    <Select.Trigger className={triggerClasses}>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover className={popoverClasses}>
                      <ListBox className="outline-none">
                        <ListBox.Item
                          id="USD"
                          className={listItemClasses}
                          textValue="USD"
                        >
                          USD ($)
                        </ListBox.Item>
                        <ListBox.Item
                          id="EUR"
                          className={listItemClasses}
                          textValue="EUR"
                        >
                          EUR (€)
                        </ListBox.Item>
                        <ListBox.Item
                          id="GBP"
                          className={listItemClasses}
                          textValue="GBP"
                        >
                          GBP (£)
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-zinc-600 font-medium text-sm">
                  Location
                </span>

                <Controller
                  name="isRemote"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      isSelected={field.value}
                      onChange={(val) => field.onChange(val)}
                      size="sm"
                    >
                      <Switch.Control
                        className={`${
                          field.value ? "bg-zinc-200" : "bg-zinc-200"
                        } transition-colors`}
                      >
                        <Switch.Thumb
                          className={`${
                            field.value ? "bg-white" : "bg-white"
                          } shadow transition-colors`}
                          style={{
                            backgroundColor: field.value
                              ? "#000f00"
                              : "#ffffff",
                          }}
                        />
                      </Switch.Control>
                      <Switch.Content>
                        <Label className="text-xs text-zinc-500 font-medium">
                          Remote
                        </Label>
                      </Switch.Content>
                    </Switch>
                  )}
                />
              </div>

              <TextField className="flex flex-col gap-1 w-full relative">
                <div className="relative flex items-center">
                  <FiGlobe
                    size={16}
                    className="absolute left-3 text-zinc-400 pointer-events-none z-10"
                  />
                  <Input
                    placeholder={
                      isRemote ? "Global / Remote" : "e.g. Austin, TX"
                    }
                    disabled={isRemote}
                    className={`${textInputClass} pl-10 disabled:bg-zinc-50 disabled:text-zinc-400`}
                    {...register("location")}
                  />
                </div>
              </TextField>
            </div>

            <TextField className="flex flex-col gap-1 w-full">
              <Label className="text-zinc-600 font-medium text-sm">
                Application Deadline
              </Label>
              <Input
                type="date"
                className={textInputClass}
                {...register("deadline")}
              />
            </TextField>
          </div>
        </Fieldset>

        {/* SECTION 2: Job Description */}
        <Fieldset className="space-y-6 w-full">
          <legend className="text-lg font-medium text-zinc-800 border-b border-zinc-100 w-full pb-2 mb-2">
            Job Details & Description
          </legend>

          <TextField className="flex flex-col gap-1 w-full">
            <Label className="text-zinc-600 font-medium text-sm">
              Responsibilities
            </Label>
            <TextArea
              placeholder="Outline the core everyday responsibilities for this role..."
              rows={4}
              className={textAreaClass}
              {...register("responsibilities")}
            />
          </TextField>

          <TextField className="flex flex-col gap-1 w-full">
            <Label className="text-zinc-600 font-medium text-sm">
              Requirements
            </Label>
            <TextArea
              placeholder="List required experience, skills, and certifications..."
              rows={4}
              className={textAreaClass}
              {...register("requirements")}
            />
          </TextField>

          <TextField className="flex flex-col gap-1 w-full">
            <Label className="text-zinc-600 font-medium text-sm">
              Benefits (Optional)
            </Label>
            <TextArea
              placeholder="Perks, healthcare, equity, remote setups..."
              rows={3}
              className={textAreaClass}
              {...register("benefits")}
            />
          </TextField>
        </Fieldset>

        {/* Visual Action Options */}
        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-100 w-full">
          <Button
            type="button"
            variant="bordered"
            className="border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-lg px-6 font-medium h-11"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(submitPostJob)}
            type="button"
            className="bg-zinc-900 text-white font-semibold hover:bg-zinc-800 rounded-lg px-6 transition-colors h-11"
          >
            Post Job
          </Button>
        </div>
      </Form>
    </div>
  );
}
