"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export function ImageWithFallback({ 
  src, 
  alt, 
  fallbackSrc = '/fallback-image.jpg',
  className, 
  width,
  height,
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
      {...props}
    />
  );
}