import React from 'react';
import MuxVideo from '../MuxVideo';
import Image from 'next/image';

export default function BrowserVideo({ muxId, poster, thumbnail, url = "https://ryanparag.com/" }) {
  return (
    <div className="w-full mb-4 mx-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden bg-white dark:bg-zinc-900">
      {/* Browser Header */}
      <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 select-none">
        {/* Window Controls (Red, Yellow, Green dots) */}
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex space-x-3 text-zinc-400 mr-4 text-sm">
          <span>&larr;</span>
          <span>&rarr;</span>
          <span>&#x21BB;</span>
        </div>

        {/* Address Bar */}
        <div className="flex-1 bg-white dark:bg-zinc-950 rounded md:py-1.5 px-3 text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800 truncate shadow-inner">
          {url}
        </div>
      </div>

      {/* Browser Body (Your Recorded Video, with an optional Thumbnail shown until hover) */}
      <div className="relative bg-black aspect-video w-full">
        <MuxVideo
          id={muxId}
          poster={poster}
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover${thumbnail ? ' absolute inset-0' : ''}`}
        />
        {
          thumbnail && (
            <Image
              src={thumbnail}
              alt=""
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
          )
        }
      </div>
    </div>
  );
}