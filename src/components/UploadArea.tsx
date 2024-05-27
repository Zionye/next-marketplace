import { Dispatch, SetStateAction, useState } from 'react'
import Uploader from '@/components/Uploader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import UploadThumbnail from './UploadThumbnail';

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
}

const UploadArea = ({files, setFiles}: Props) => {
  const [isUploading, setIsUploading] = useState(false);
  
  return (
    <div className='bg-gray-100 p-4 rounded'>
      <h2 className='text-center text-xs text-gray-400 uppercase font-bold'>
        Add photos your product
      </h2>
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faImage} className='h-24 text-gray-300' />

        <label className={
          'upload-btn mt-2 border px-4 py-2 rounded inline-flex gap-1 items-center justify-center '
          + (
            isUploading
              ? 'text-gray-400 cursor-not-allowed'
              : "border-blue-600 text-blue-600 cursor-pointer"
          )
        }>
          <Uploader 
            onUploadStart={() => setIsUploading(true)}
            onSuccess={file => {
              console.log('Uploader success file: ', file);
              setFiles(prov => [...prov, file]);
              setIsUploading(false);
            }}
          />
          {isUploading ? (
            <span>Uploading...</span>
          ) : (
            <>
              <FontAwesomeIcon icon={faPlus} />
              <span>Add photo</span>
            </>
          )}
        </label>

        <div className='flex flex-wrap gap-2 mt-2'>
          {files.map(file => (
            <div className="size-16 rounded overflow-hidden"  key={file.fileId}>
              <UploadThumbnail file={file}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UploadArea