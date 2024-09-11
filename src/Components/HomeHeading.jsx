import React from 'react'

export default function HomeHeading({heading}) {
  return (
    <div>
      <h2 class="flex items-center mt-24">
        <span class="flex-grow border-t border-black"></span>
        <span class="mx-4 px-4 py-2.5 text-xl rounded font-medium bg-black text-white">
          {heading}
        </span>
        <span class="flex-grow border-t border-black"></span>
      </h2>
    </div>
  );
}
