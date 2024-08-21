'use client';

import { Ad } from "@/models/Ad";
import UploadThumbnail from "@/components/UploadThumbnail";
import Link from 'next/link';


const AdItem = ({ad}: {ad: Ad}) => {
  return (
    <div className="min-h-24 flex flex-col justify-start">
      {ad.files?.length > 0 && (
        <div className="rounded-md overflow-hidden relative">
          <UploadThumbnail onClick={() => {}} file={ad.files[0] } />
          <Link href={`/ad/${ad._id}`} className="absolute inset-0" />
        </div>
      )}
      <div>
        <p className="mt-1 font-bold">${ad.price}</p>
        <Link href={`/ad/${ad._id}`}>{ad.title}</Link>
      </div>
    </div>
  )
}

export default AdItem