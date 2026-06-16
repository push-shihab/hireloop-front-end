"use client";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiGrid,
  FiBriefcase,
  FiFileText,
  FiSettings,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { SiSparkpost } from "react-icons/si";

export default function DashboardLeftSideBar() {
  const path = usePathname();
  const navigationItems = [
    {
      name: "Dashboard",
      icon: <FiGrid className="text-lg" />,
      href: "/dashboard/recruiter",
    },
    {
      name: "My Company",
      icon: <HiOutlineOfficeBuilding className="text-xl" />,
      href: "/dashboard/recruiter/company",
    },
    {
      name: "Manage Jobs",
      icon: <FiBriefcase className="text-lg" />,
      href: "/dashboard/recruiter/jobs",
    },
    {
      name: "Post Jobs",
      icon: <SiSparkpost className="text-lg" />,
      href: "/dashboard/recruiter/jobs/new",
    },
    {
      name: "Applications",
      icon: <FiFileText className="text-lg" />,
      href: "/applications",
    },
    {
      name: "Settings",
      icon: <FiSettings className="text-lg" />,
      href: "/settings",
    },
  ];
  const [activeTab, setActiveTab] = useState(path);

  const navLinks = (
    <nav className="flex flex-col gap-1.5 w-full">
      {navigationItems.map((item) => {
        const isActive = activeTab === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              setActiveTab(item.href);
            }}
            className={`
                    w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-zinc-800/90 text-white border-l-4 border-[#00b4d8] pl-3.25"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                    }
                  `}
          >
            <span
              className={`${isActive ? "text-[#00b4d8]" : "text-zinc-400 group-hover:text-zinc-200"}`}
            >
              {item.icon}
            </span>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 border-r p-4">{navLinks}</aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navLinks}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
