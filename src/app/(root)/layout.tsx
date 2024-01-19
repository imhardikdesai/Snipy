import SideBar from "@/view/root-view/SideBar";
import "../globals.css";
import CollectionTab from "@/view/root-view/CollectionTab";
import TopNav from "@/view/root-view/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dark flex">
      <SideBar />
      <section className="ml-[4.7rem] h-screen flex w-full">
        <div>
          <CollectionTab />
        </div>
        <div className="w-full">
          <TopNav />
          <div className="p-2 bg-[#272a2b] text-gray-100">{children}</div>
        </div>
      </section>
    </main>
  );
}
