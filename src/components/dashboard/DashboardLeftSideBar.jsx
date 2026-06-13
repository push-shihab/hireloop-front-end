// "use client";
// import React, { useState } from "react";
// import { Link, Button, Avatar, Tooltip } from "@heroui/react";
// import {
//   FiGrid,
//   FiBriefcase,
//   FiFileText,
//   FiSettings,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";
// import { HiOutlineOfficeBuilding } from "react-icons/hi";

// export default function DashboardLeftSideBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   // Central Navigation configuration array

//   return (
//     <>
//       {/* 📱 Mobile Menu Trigger Button (Visible only on mobile/tablets) */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <Button
//           isIconOnly
//           variant="flat"
//           radius="lg"
//           onClick={toggleSidebar}
//           className="bg-[#18181b] border border-zinc-800 text-white shadow-xl hover:bg-zinc-800"
//         >
//           {isOpen ? (
//             <FiX className="text-xl" />
//           ) : (
//             <FiMenu className="text-xl" />
//           )}
//         </Button>
//       </div>

//       {/* 🪟 Mobile Overlay background veil */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* 📐 Main Core Sidebar Element Container */}
//       <aside
//         className={`
//           fixed top-0 left-0 h-screen bg-[#0d0d0e] border-r border-zinc-900 flex flex-col justify-between p-6 z-40
//           transition-transform duration-300 ease-in-out w-[260px]
//           lg:translate-x-0
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* 🗂️ TOP HALF SECTION: Brand and Links */}
//         <div className="flex flex-col gap-8 w-full">
//           {/* 🏢 Brand Logo Area */}
//           <div className="flex items-center gap-2 pl-2 pt-2 max-lg:pt-12">
//             <span className="text-2xl font-black text-white tracking-tight flex items-center gap-1 select-none">
//               Hire<span className="text-[#00b4d8]">Loop</span>
//             </span>
//           </div>

//           {/* 👤 Recruiter Profile Identity Card Block */}
//           <div className="flex flex-col items-center text-center bg-[#18181b]/50 border border-zinc-900/80 p-4 rounded-2xl w-full">
//             <Avatar
//               src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
//               className="w-14 h-14 border-2 border-zinc-800 mb-2.5"
//               isBordered
//               color="default"
//             />
//             <h3 className="text-sm font-semibold text-white tracking-tight">
//               Alex Sterling
//             </h3>
//             <p className="text-[11px] text-zinc-500 font-medium mb-3">
//               Recruiter
//             </p>

//             {/* Premium Badge Identifier */}
//             <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 rounded-md shadow-sm">
//               Premium Account
//             </span>
//           </div>

//           {/* 🔗 Dynamic Navigation Link Navigation Nodes */}

//         </div>

//         {/* 📋 BOTTOM SECTION: Decorative Copyright Footer Note */}
//         <div className="w-full text-center border-t border-zinc-900/60 pt-4">
//           <p className="text-[11px] text-zinc-600 font-normal">
//             &copy; 2026 HireLoop Platform
//           </p>
//         </div>
//       </aside>
//     </>
//   );
// }
"use client";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
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

export default function DashboardLeftSideBar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigationItems = [
    {
      name: "Dashboard",
      icon: <FiGrid className="text-lg" />,
      href: "/dashboard",
    },
    {
      name: "My Company",
      icon: <HiOutlineOfficeBuilding className="text-xl" />,
      href: "/company",
    },
    {
      name: "Manage Jobs",
      icon: <FiBriefcase className="text-lg" />,
      href: "/jobs",
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

  const navLinks = (
    <nav className="flex flex-col gap-1.5 w-full">
      {navigationItems.map((item) => {
        const isActive = activeTab === item.name;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault(); // Keeping layout safe as requested
              setActiveTab(item.name);
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
