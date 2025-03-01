import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
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
        <div>
          You are amazing if you take time to comment on a tweet or YouTube
          video or a blogpost that has helped you! 🙌
        </div>
        <div className="flex justify-between">
          <div className="flex items-center mt-2">
            <FaRegComment className="mr-2 text-gray-600" />
            <span className="text-gray-600">20</span>
          </div>
          <div className="flex items-center mt-2">
            <FaRetweet className="mr-2 text-gray-600" />
            <span className="text-gray-600">17</span>
          </div>
          <div className="flex items-center mt-2">
            <CiHeart className="mr-2 text-gray-600" />
            <span className="text-gray-600">215</span>
          </div>
          <div className="flex items-center mt-2">
            <MdOutlineFileUpload className="mr-2 text-gray-600" />
          </div>
          <div className="flex items-center mt-2">
            <FiBarChart2 className="mr-2 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
