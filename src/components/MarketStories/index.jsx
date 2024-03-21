import React from "react";
import Story from "./Story";

export default function MarketStories() {
  return (
    <div className="space-y-4 flex-4 overflow-x-hidden">
      <div className="hidden lg:block h-10 my-auto text-xl font-medium py-2 uppercase">
        <h4>Market Stories</h4>
      </div>

      <div className="space-y-4 lg:h-[calc(100vh_-_60px)] lg:overflow-y-auto">
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
}
