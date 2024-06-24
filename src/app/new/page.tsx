"use client";
import AdTextInputs from '@/components/AdTextInputs';
import UploadArea from '@/components/UploadArea';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons/faLocationCrosshairs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UploadResponse } from 'imagekit/dist/libs/interfaces/UploadResponse';
import { useState } from 'react';
// import MapPicker from 'react-google-map-picker';
import { createAd } from '../actions/adActions';
import SubmitButton from '@/components/SubmitButton';
import { redirect } from 'next/navigation';

const locationDefault = {
  lat: 59.432226005726896,
  lng: 18.057839558207103,
}

const NewAdPage = () => {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  const handleSubmit = async (formData: FormData) => {
    formData.set('files', JSON.stringify(files));
    formData.set('location', JSON.stringify(locationDefault));

    const result = await createAd(formData);
    console.log('result: ', { result} );

    redirect(`/ad/${result._id}`);
  };

  return (
    <form 
      action={handleSubmit} 
      className='max-w-xl mx-auto grid grid-cols-2 gap-8'>
      <div className='grow pt-8'>

        <UploadArea files={files} setFiles={setFiles}/>

        <div className='mt-8'>
          <label htmlFor="">Where is it located?</label>
          <button className='w-full flex items-center justify-center gap-1 py-1 border border-gray-400 text-gray-600 rounded'>
            <FontAwesomeIcon icon={faLocationCrosshairs} />
            <span>Share current Location</span>
          </button>
          <div className='mt-2 bg-gray-100 p-4 min-h-12 rounded text-gray-400 text-center'>
            google maps here
          </div>
        </div>
      </div>


      <div className='grow pt-2'>
        <AdTextInputs />

        <SubmitButton>Publish</SubmitButton>
      </div>

    </form>
  )
}

export default NewAdPage