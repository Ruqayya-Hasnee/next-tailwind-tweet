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
    // This is the main container you can see with the border
    // It contains 2 child elements, the profile image and another div that will contain everything else
    // This is a flexbox so the image and content are kept inline

    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      {/* This is the profile image */}
      <img
        src="https://placehold.co/120"
        alt="profile pic"
        className="rounded-full h-12 w-12 mr-3"
      />
      {/* This is the div that will contain all the remaining content 
          1. 1 flexbox that will contain the first line of the tweet that shows the Name, handle, date, and options menu  
          2. 1 div that contains the tweet text  
          3. 1 flexbox that contains all the action buttons  
      */}
      <div className="w-full">
        {/* This is the flex box with the name, handle, date, and kabab menu */}
        <div className="flex">
          {/* This is the flex box with the name, handle, date */}
          <Link href="https://twitter-cl.vercel.app/login" target="_blank">
            <strong className="text-gray-800 mr-1">Name</strong>
            <span className="text-gray-800 mr-1">@heyname</span>
          </Link>
          <span className="text-gray-800 mr-1">&middot;</span>
          <span className="text-gray-800">Mar 1</span>
          {/* This is the kabab menu */}
          <div className="ml-auto">
            <FiMoreHorizontal />
          </div>
        </div>
        {/* This is the div that contains tweet text */}
        <div>
          You are amazing if you take time to comment on a tweet or YouTube
          video or a blogpost that has helped you! 🙌
        </div>
        {/* This is the flexbox that contains all the action buttons it will contain:  
            1. div for replies  
            2. div for retweets  
            3. div for likes  
            4. div for share   
            5. div for stats  */}

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
