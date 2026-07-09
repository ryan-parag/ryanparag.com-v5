import React from 'react';
import MuxVideo from '../MuxVideo';
import Image from 'next/image';

export default function MobileVideo({ muxId, poster }) {
  return (
    <div className="relative mb-4 mx-auto w-72" style={{ aspectRatio: "1350 / 2760" }}>
      <MuxVideo
        id={muxId}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="absolute top-[2.6%] bottom-[2.6%] left-[5.6%] right-[5.6%] w-[88.8%] h-[94.8%] rounded-[8%] object-cover"
      />
      <Image
        src="/iPhone17Pro.webp"
        alt=""
        fill
        className="pointer-events-none select-none"
        sizes="350px"
        priority={false}
      />
    </div>
  );
}