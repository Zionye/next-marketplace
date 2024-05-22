"use client";
import UploadArea from '@/components/UploadArea';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons/faLocationCrosshairs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UploadResponse } from 'imagekit/dist/libs/interfaces/UploadResponse';
import { useState } from 'react';

const NewAdPage = () => {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  return (
    <form action="" className='max-w-xl mx-auto grid grid-cols-2 gap-8'>
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
        <label htmlFor="titleIn">Title</label>
        <input id='titleIn' type="text" placeholder='Title'/>

        <label htmlFor="priceIn">Price</label>
        <input id='priceIn' type="number" placeholder='Price'/>

        <label htmlFor="categoryIn">Category</label>
        <select name="" id="categoryIn">
          <option selected disabled value="">select category</option>
          <option value="">Cart</option>
          <option value="">Electronics</option>
          <option value="">Properties</option>
        </select>

        <label htmlFor="descriptionIn">Description</label>
        <textarea name="" id="descriptionIn" placeholder='description'></textarea>

        <label htmlFor="mobileIn">Mobile</label>
        <textarea name="" id="mobileIn" placeholder='mobile'></textarea>

        <button className='mt-2 bg-blue-600 text-white px-6 py-2 rounded'>
          publish
        </button>
      </div>

    </form>
  )
}

export default NewAdPage