'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithSkeletonProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageWithSkeleton({ src, alt, width, height, className }: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <Skeleton className="absolute inset-0 bg-gray-200" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${className && className} ${isLoading ? 'opacity-0' : 'opacity-100'} mx-auto`}
      />
    </div>
  )
}