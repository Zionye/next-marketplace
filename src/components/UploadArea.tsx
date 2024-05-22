import { Dispatch, SetStateAction } from 'react'
import Uploader from '@/components/Uploader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
}

const UploadArea = ({files, setFiles}: Props) => {
  return (
    <div className='bg-gray-100 p-4 rounded'>
      <h2 className='text-center text-xs text-gray-400 uppercase font-bold'>
        Add photos your product
      </h2>
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faImage} className='h-24 text-gray-300' />

        <label className='upload-btn cursor-pointer mt-2 border px-4 py-2 rounded inline-flex gap-1 items-center justify-center'>
          <Uploader onSuccess={
            file => {
              console.log('Uploader success file: ', file);
              setFiles(prov => [...prov, file]);
            }}
          />
          <FontAwesomeIcon icon={faPlus} />
          <span>Add photo</span>
        </label>

        {files.map(file => (
          <div 
            className='text-xs'
            key={file.fileId}>
              {file.url}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UploadArea