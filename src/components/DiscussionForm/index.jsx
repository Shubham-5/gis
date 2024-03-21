import React from "react";
import Article from "./Article";

export default function DiscussionForum() {
  return (
    <div className="space-y-4 flex-1 overflow-x-hidden">
      <div className="hidden lg:block h-10 my-auto text-xl font-medium py-2 uppercase">
        <h4>Discussion Forum</h4>
      </div>

      <div className="space-y-4 lg:h-[calc(100vh_-_60px)] lg:overflow-y-auto">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}
