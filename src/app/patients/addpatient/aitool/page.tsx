import React from 'react';
import Link from 'next/link';

const GetStarted = () => {
  return (
    <>
      <span className="font-bold text-4xl">Get Started</span>

      <ol className="my-4 text-lg text-gray-500">
        <li>Would you like to use detection AI tool right now?</li>
      </ol>

        <Link 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href={"/detection"}
          style={{ width: '80px', textAlign:"center" }}>
            Yes
        </Link>
        <Link
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' 
          href={"/patients"}
          style={{ width: '80px', textAlign:"center"}}>
            No
        </Link>
    </>
  );
};

export default GetStarted;