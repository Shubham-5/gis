import React from "react";

export default function Story() {
  return (
    <article className="overflow-hidden w-[18rem] rounded-lg border border-gray-100 bg-white shadow-sm">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900">
          Lorem ipsum dolor sit.
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
        </p>
      </div>
    </article>
  );
}
