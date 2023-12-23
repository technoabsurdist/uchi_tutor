"use client"; 

import { useState } from 'react';
import Navigation from './Navigation';
import { View } from './types';
import Feed from './Feed';
import Post from './Post';
import Requests from './Requests';

export default function Home() {

  const [view, setView] = useState(View.Feed);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Navigation view={view} changeView={(v: any) => setView(v)} /> 
      <div className="relative flex place-items-center">
        {view === View.Feed && <Feed />}
        {view === View.Post && <Post />}
        {/* {view === View.Requests && <Requests />} */}
      </div>
        <footer className="flex flex-col items-center justify-center w-full h-full p-8 space-y-4 text-gray-600 dark:text-gray-400 lg:col-span-3">
          <p className="text-sm">
            © 2021 UChicago Tutoring. All rights reserved.
          </p>
          <p className="text-sm">
            Made by <a href="https://github.com/technoabsurdist" target="_blank" className="text-blue-600 hover:underline">Emi</a>
          </p>
        </footer>
    </main>
  )
}
