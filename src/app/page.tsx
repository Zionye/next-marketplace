"use client";
import { Ad } from "@/models/Ad";
import { useEffect, useState } from "react";
import AdItem from "@/components/AdItem";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  const [ads, setAds] = useState<Ad[] | null>(null);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = (params?: URLSearchParams) => {
    if (!params) {
      params = new URLSearchParams();
    }
    const url = `/api/ads?${params?.toString() || ''}`;
    fetch(url).then(response => {
      response.json().then(adsDoc => {
        setAds(adsDoc);
      });
    })
  };

  const handleSearch = (formData: FormData) => {
    console.log('formData: ', Object.fromEntries(formData));

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if(typeof value === 'string'){
        params.set(key, value);
      }
    });
    fetchAds(params);
  };

  return (
    <div className="flex w-full">
      <SearchForm action={handleSearch} />

      <div className="bg-gray-100 p-4 grow w-3/4">
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
