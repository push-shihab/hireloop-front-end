import DashboardLeftSideBar from "@/components/dashboard/DashboardLeftSideBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex min-h-screen">
      <DashboardLeftSideBar></DashboardLeftSideBar>
      <div className="flex-1">{children}</div>
    </main>
  );
}
