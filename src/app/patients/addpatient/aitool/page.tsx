import React from 'react';
import Link from 'next/link';

const GetStarted = () => {
  return (
    <>
      <span className="font-bold text-4xl">Get Started</span>

      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg">Would you like to use detection AI tool right now?</div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <Link href={"/detection"}>Yes</Link>
        <Link href={"/patients"}>No</Link>
      </div>
    </>
  );
};

export default GetStarted;