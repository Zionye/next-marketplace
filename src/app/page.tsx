"use client";
import { Ad } from "@/models/Ad";
import { useEffect, useState } from "react";
import AdItem from "@/components/AdItem";

export default function Home() {
  const [ads, setAds] = useState<Ad[] | null>(null);

  useEffect(() => {
    fetch("/api/ads").then(response => {
      response.json().then(adsDoc => {
        setAds(adsDoc);
      });
    })
  }, []);
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 grow w-1/4">left</div>
      <div className="p-4 grow w-3/4">
        <h2 className="font-bold mt-2 mb-4">Latest products</h2>
        <div className="grid md:grid-cols-4 gap-x-4 gap-y-6">
          {ads && ads.map(ad => (
            <AdItem ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
