"use client";

import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  Button,
  Chip,
  toast,
} from "@heroui/react";
import {
  FiBriefcase,
  FiGlobe,
  FiMapPin,
  FiUsers,
  FiUploadCloud,
  FiPlus,
  FiLoader,
} from "react-icons/fi";
import { createNewCompany } from "@/utils/actions/companies";

export default function CompanyDashboardClient({ session, recruiterCompany }) {
  // Main data layer holding the registered company entity
  const [company, setCompany] = useState(recruiterCompany);

  // UI toggle managing form visibility state
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Asset Upload States
  const [isUploading, setIsUploading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [logoPreview, setLogoPreview] = useState("");
  const fileInputRef = useRef(null);

  // Replace with your real ImgBB API key down the line
  const IMGBB_API_KEY = "YOUR_FAKE_IMGBB_API_KEY_HERE";

  // Initialize React Hook Form cleanly
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      companyName: "",
      industry: "",
      website: "",
      location: "",
      employeeCount: "",
      description: "",
    },
  });

  // Client-side image upload processing handler
  const handleLogoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Instantly create a local blob string for an immediate UI preview
    setLogoPreview(URL.createObjectURL(file));
    setIsUploading(true);

    // 2. Append binary chunk data to submit securely via multipart form rules
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.success) {
        // This structural URL payload can now safely be committed to your database
        setLogoUrl(result.data.url);
      } else {
        toast("ImgBB upload failed payload structure:", result.error);
      }
    } catch (error) {
      toast("Network error during ImgBB upload execution:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmitForm = async (data) => {
    // Simulating database storage payload update
    const newCompanyData = {
      name: data.companyName,
      industry: data.industry,
      industryLabel:
        data.industry.charAt(0).toUpperCase() + data.industry.slice(1),
      website: data.website,
      location: data.location,
      employeeCount: data.employeeCount,
      employeeLabel: `${data.employeeCount} employees`,
      description: data.description,
      logoUrl: logoUrl, // Hosting reference pointing to ImgBB CDN
      status: "Pending",
      createdAt: new Date(),
      createdBy: session.user.name,
      recruiterId: session.user.id,
    };
    setCompany(newCompanyData);

    const createCompany = await createNewCompany(newCompanyData);

    if (createCompany.acknowledged) {
      alert(`${newCompanyData.name} registered successfully`);
    }

    // Reset clean dashboard view states
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setLogoUrl("");
    setLogoPreview("");
    reset(); // Clear form fields cleanly on cancel
  };

  // Shared design configurations
  const textInputClass =
    "w-full text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-500 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-400 outline-none transition-all shadow-sm";
  const textAreaClass =
    "w-full text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-500 rounded-lg p-3 text-sm placeholder:text-zinc-400 outline-none transition-all shadow-sm";
  const triggerClasses =
    "w-full flex items-center justify-between bg-white border border-zinc-200 hover:border-zinc-300 h-12 rounded-lg px-3 text-zinc-900 transition-all text-sm outline-none data-[focused=true]:border-zinc-500 shadow-sm";
  const popoverClasses =
    "bg-white border border-zinc-200 text-zinc-900 rounded-lg shadow-xl p-1";
  const listItemClasses =
    "flex items-center justify-between p-2 rounded-md hover:bg-zinc-100 cursor-pointer text-sm text-zinc-700 outline-none data-[focused=true]:bg-zinc-100";

  const getStatusChipProps = (status) => {
    switch (status) {
      case "Approved":
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
      case "Rejected":
        return "text-rose-700 bg-rose-50 border-rose-200";
      default:
        return "text-amber-700 bg-amber-50 border-amber-200";
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      {/* STATE 1: FORM MODAL VIEW OVERRIDE */}
      {isFormOpen ? (
        <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden text-zinc-900">
          <div className="border-b border-zinc-100 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 text-zinc-500">
                <FiBriefcase size={20} />
              </div>
              <h2 className="text-xl font-semibold text-zinc-900">
                Register New Company
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-normal ml-11">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>

          <Form
            onSubmit={handleSubmit(onSubmitForm)}
            className="m-0 p-6 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField className="flex flex-col gap-1 w-full">
                <Label className="text-zinc-600 font-medium text-xs">
                  Company Name
                </Label>
                <Input
                  placeholder="e.g. Acme Corp"
                  className={textInputClass}
                  {...register("companyName", { required: true })}
                />
              </TextField>

              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    selectedKeys={field.value ? [field.value] : []}
                    onSelectionChange={(keys) => field.onChange(keys)}
                  >
                    <Label className="text-zinc-600 font-medium text-xs mb-1 block">
                      Industry / Category
                    </Label>
                    <Select.Trigger className={triggerClasses}>
                      <Select.Value className="text-zinc-900" />
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
                          id="finance"
                          className={listItemClasses}
                          textValue="Finance"
                        >
                          Finance
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField className="flex flex-col gap-1 w-full">
                <Label className="text-zinc-600 font-medium text-xs">
                  Website URL
                </Label>
                <div className="relative flex items-center w-full">
                  <span className="absolute left-3 text-sm text-zinc-400 font-medium pointer-events-none select-none">
                    https://
                  </span>
                  <Input
                    placeholder="www.company.com"
                    className={`${textInputClass} pl-[64px]`}
                    {...register("website")}
                  />
                </div>
              </TextField>

              <TextField className="flex flex-col gap-1 w-full">
                <Label className="text-zinc-600 font-medium text-xs">
                  Location
                </Label>
                <div className="relative flex items-center w-full">
                  <FiMapPin
                    size={16}
                    className="absolute left-3 text-zinc-400 pointer-events-none"
                  />
                  <Input
                    placeholder="City, Country"
                    className={`${textInputClass} pl-9`}
                    {...register("location")}
                  />
                </div>
              </TextField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <Controller
                name="employeeCount"
                control={control}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    selectedKeys={field.value ? [field.value] : []}
                    onSelectionChange={(keys) => field.onChange(keys)}
                  >
                    <Label className="text-zinc-600 font-medium text-xs mb-1 block">
                      Employee Count Range
                    </Label>
                    <Select.Trigger className={triggerClasses}>
                      <Select.Value className="text-zinc-900" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover className={popoverClasses}>
                      <ListBox className="outline-none">
                        <ListBox.Item
                          id="1-10"
                          className={listItemClasses}
                          textValue="1-10 employees"
                        >
                          1-10 employees
                        </ListBox.Item>
                        <ListBox.Item
                          id="11-50"
                          className={listItemClasses}
                          textValue="11-50 employees"
                        >
                          11-50 employees
                        </ListBox.Item>
                        <ListBox.Item
                          id="51-200"
                          className={listItemClasses}
                          textValue="51-200 employees"
                        >
                          51-200 employees
                        </ListBox.Item>
                        <ListBox.Item
                          id="201+"
                          className={listItemClasses}
                          textValue="201+ employees"
                        >
                          201+ employees
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />

              <div className="space-y-1 w-full">
                <span className="text-zinc-600 font-medium text-xs block">
                  Company Logo
                </span>

                {/* Clickable Hidden Input Activation Wrapper Trigger */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border border-dashed border-zinc-200 hover:border-zinc-300 rounded-lg h-12 flex items-center justify-center gap-2 bg-zinc-50/50 cursor-pointer text-zinc-500 transition-colors shadow-sm px-3 relative overflow-hidden"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleLogoChange}
                    accept="image/png, image/jpeg"
                    className="hidden"
                  />

                  {isUploading ? (
                    <div className="flex items-center gap-2 text-zinc-500">
                      <FiLoader
                        className="animate-spin text-zinc-400"
                        size={16}
                      />
                      <span className="text-xs font-medium">
                        Uploading to ImgBB...
                      </span>
                    </div>
                  ) : logoPreview ? (
                    <div className="flex items-center gap-3 w-full h-full">
                      <img
                        src={logoPreview}
                        alt="Local preview"
                        className="w-8 h-8 rounded object-cover border border-zinc-200"
                      />
                      <span className="text-xs font-medium text-zinc-700 truncate max-w-[180px]">
                        Image uploaded ready
                      </span>
                    </div>
                  ) : (
                    <>
                      <FiUploadCloud size={16} className="text-zinc-400" />
                      <div className="text-left leading-tight">
                        <span className="text-xs font-medium text-zinc-700 block">
                          Upload image
                        </span>
                        <span className="text-[10px] text-zinc-400 block">
                          PNG, JPG up to 5MB
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <TextField className="flex flex-col gap-1 w-full">
              <Label className="text-zinc-600 font-medium text-xs">
                Brief Description
              </Label>
              <TextArea
                placeholder="Tell us about your company's mission and culture..."
                rows={4}
                className={textAreaClass}
                {...register("description")}
              />
            </TextField>

            {/* Cancel Actions Context Row */}
            <div className="pt-4 border-t border-zinc-100 flex justify-end gap-3">
              <Button
                type="button"
                onPress={handleCancel}
                className="bg-zinc-100 text-zinc-700 font-semibold hover:bg-zinc-200 rounded-lg px-5 h-11 text-sm transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isDisabled={isUploading}
                className="bg-zinc-900 text-white font-semibold hover:bg-zinc-800 rounded-lg px-6 h-11 text-sm transition-colors shadow-sm disabled:opacity-50"
              >
                Register Company
              </Button>
            </div>
          </Form>
        </div>
      ) : !company ? (
        /* STATE 2: EMPTY BLANK STATE */
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-zinc-200 rounded-xl bg-zinc-50/30">
          <div className="p-4 bg-zinc-100 rounded-full border border-zinc-200 text-zinc-400 mb-4">
            <FiBriefcase size={32} />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-1">
            No company registered yet
          </h3>
          <p className="text-sm text-zinc-500 max-w-sm mb-6">
            Get started by creating a corporate entity workspace to manage open
            job vacancies.
          </p>
          <Button
            onPress={() => setIsFormOpen(true)}
            className="bg-zinc-900 text-white font-semibold hover:bg-zinc-800 rounded-lg px-5 h-11 text-sm transition-colors shadow-sm flex items-center gap-2"
          >
            <FiPlus size={16} /> Register Company
          </Button>
        </div>
      ) : (
        /* STATE 3: FULL DETAIL PRESENTATION DASHBOARD */
        <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-zinc-100 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-xl overflow-hidden shrink-0">
                {company.logoUrl ? (
                  <img
                    src={company.logoUrl}
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  company.name.charAt(0)
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {company.name}
                  </h1>
                  <Chip
                    size="sm"
                    variant="flat"
                    className={`font-medium border rounded px-1.5 py-0.5 text-xs ${getStatusChipProps(company.status)}`}
                  >
                    {company.status}
                  </Chip>
                </div>
                <p className="text-zinc-500 text-sm flex items-center gap-1 mt-0.5">
                  <span className="font-medium text-zinc-700">
                    {company.industryLabel}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <FiMapPin size={13} /> {company.location}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border border-zinc-100 rounded-lg bg-zinc-50/50">
              <span className="text-xs text-zinc-400 font-medium block mb-1">
                WEBSITE WORKSPACE
              </span>
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-800 hover:text-zinc-950 underline flex items-center gap-1.5"
              >
                <FiGlobe size={14} className="text-zinc-400" />
                {company.website}
              </a>
            </div>

            <div className="p-4 border border-zinc-100 rounded-lg bg-zinc-50/50">
              <span className="text-xs text-zinc-400 font-medium block mb-1">
                TOTAL STAFF CAPACITY
              </span>
              <div className="text-sm font-medium text-zinc-800 flex items-center gap-1.5">
                <FiUsers size={14} className="text-zinc-400" />
                {company.employeeLabel}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-800 uppercase tracking-wider">
              Company Description
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed bg-zinc-50/30 p-4 border border-zinc-100 rounded-lg whitespace-pre-wrap">
              {company.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
