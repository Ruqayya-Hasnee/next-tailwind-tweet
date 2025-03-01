import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import Link from "next/link";

function Tweet() {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      <img
        src="https://placehold.co/120"
        alt="profile pic"
        className="rounded-full h-12 w-12 mr-3"
      />
      <div className="w-full">
        <div className="flex">
          <Link href="https://twitter-cl.vercel.app/login" target="_blank">
            <strong className="text-gray-800 mr-1">Name</strong>
            <span className="text-gray-800 mr-1">@heyname</span>
          </Link>
          <span className="text-gray-800 mr-1">&middot;</span>
          <span className="text-gray-800">Mar 1</span>
          <div className="ml-auto">
            <FiMoreHorizontal />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Tweet;
