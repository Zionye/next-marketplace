"use client";
import { Ad } from "@/models/Ad";
import { useEffect, useRef, useState } from "react";
import AdItem from "@/components/AdItem";
import { categories } from "@/libs/helpers";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import LabelRadioButton from "@/components/LabelRadioButton";
import SubmitButton from "@/components/SubmitButton";

export default function Home() {
  const [ads, setAds] = useState<Ad[] | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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
      <form 
        ref={formRef}
        action={handleSearch} 
        className="bg-white grow w-1/4 p-4 border-r flex flex-col gap-4">
          <input name="phrase" type="text" placeholder="Search Marketplace" />

          <div className="flex flex-col gap-0">
            <LabelRadioButton
                name="category" 
                value={''}
                icon={faStore} 
                onClick={()=>formRef.current?.requestSubmit()}
                label={'All categories'}
                defaultChecked={true}/>

            {categories.map(({key:categoryKey,label:categoryLabel, icon:categoryIcon}) => (
              <LabelRadioButton 
                key={'categoryKey'}
                name="category" 
                value={categoryKey} 
                icon={categoryIcon} 
                onClick={()=>formRef.current?.requestSubmit()}
                label={categoryLabel}/>
            ))}
          </div>

          <div>
            <label>filter by price</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input name="min" type="number" placeholder="min"/>
              </div>
              <div>
                <input name="max" type="number" placeholder="max"/>
              </div>
            </div>
          </div>

          <SubmitButton>Search</SubmitButton>
      </form>

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
