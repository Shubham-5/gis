"use client";

import { useState } from "react";

import DiscussionForum from "@/components/DiscussionForm";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [extendedSidebar, setExtendSidebar] = useState(true);
  const [tab, setTab] = useState(0);

  const sidebarClass = extendedSidebar
    ? "lg:grid-cols-sidebar "
    : "lg:grid-cols-sidebar-collapsed";

  return (
    <main
      className={`grid  transition-[grid-template-columns] duration-300 ease-in-out ${sidebarClass}`}
    >
      <Sidebar
        setExtendSidebar={setExtendSidebar}
        extendedSidebar={extendedSidebar}
      />

      <div className="lg:hidden py-2 text-lg flex items-center justify-between px-6 w-full">
        <h3
          onClick={() => setTab(0)}
          className={`cursor-pointer ${tab == 0 && "underline"}`}
        >
          Discussion Forum
        </h3>
        <h3
          onClick={() => setTab(1)}
          className={`cursor-pointer ${tab == 1 && "underline"}`}
        >
          Market Stories
        </h3>
      </div>

      <div className="flex lg:hidden px-6">
        {tab === 0 ? <DiscussionForum /> : <MarketStories />}
      </div>

      <div className="hidden lg:flex lg:space-x-8 px-6 w-full">
        <DiscussionForum />
        <MarketStories />
      </div>
    </main>
  );
}
