import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import MyImage from './MyImage';

const UploadView = ({file}: {file: UploadResponse}) => {
  if(file.fileType === "image"){
    return(
      <MyImage 
        src={file.filePath} 
        alt={'produce photo'} 
        width={1000} 
        height={1000}
        className='w-full h-auto'
      />
    );
  }

  return (
    <>
      {file.name}
    </>
  )
}

export default UploadView