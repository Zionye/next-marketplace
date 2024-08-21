'use client';

import AdTextInputs, { AdTexts } from '@/components/AdTextInputs';
import UploadArea from '@/components/UploadArea';
import SubmitButton from '@/components/SubmitButton';
import { UploadResponse } from 'imagekit/dist/libs/interfaces/UploadResponse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons/faLocationCrosshairs';
import { useState } from 'react';
import { createAd, updateAd } from '@/app/actions/adActions';
import { redirect } from 'next/navigation';

export type Location = {
  lat: number;
  lng: number;
};

type Props = {
  id?: string | null;
  defaultFiles?: UploadResponse[];
  defaultLocation?: Location;
  defaultTexts?: AdTexts;
};

const AdForm = ({
  id = null, 
  defaultFiles=[], 
  defaultLocation,
  defaultTexts={}
}: Props) => {
  const [files, setFiles] = useState<UploadResponse[]>(defaultFiles);
  const [location, setLocation] = useState<Location>(defaultLocation);

  const handleSubmit = async (formData: FormData) => {
    formData.set('files', JSON.stringify(files));
    formData.set('location', JSON.stringify(location));

    if (id) {
      formData.set('_id', id);
    }
    const result = id ? await updateAd(formData) : await createAd(formData);
    console.log('result: ', { result} );

    redirect(`/ad/${result._id}`);
  };

  return (
    <form 
      action={handleSubmit} 
      className='max-w-xl mx-auto grid grid-cols-2 gap-8'>
      <div className='grow pt-8'>

        <UploadArea files={files} setFiles={setFiles}/>

        {/* <div className='mt-8'>
          <label htmlFor="">Where is it located?</label>
          <button className='w-full flex items-center justify-center gap-1 py-1 border border-gray-400 text-gray-600 rounded'>
            <FontAwesomeIcon icon={faLocationCrosshairs} />
            <span>Share current Location</span>
          </button>
          <div className='mt-2 bg-gray-100 p-4 min-h-12 rounded text-gray-400 text-center'>
            google maps here
          </div>
        </div> */}
      </div>


      <div className='grow pt-2'>
        <AdTextInputs defaultValues={defaultTexts}/>

        <SubmitButton>{id ? 'Save' : 'Publish'}</SubmitButton>
      </div>

    </form>
  )
}

export default AdForm