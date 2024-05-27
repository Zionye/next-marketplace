import { UploadResponse } from 'imagekit/dist/libs/interfaces';

const UploadThumbnail = ({file}:{file: UploadResponse}) => {
  if(file.fileType === 'image'){
    return (
      <a href={file.url} target='_blank'>
        <img src={file.url+'/tr:h-100,w-100,fo-auto'} />
      </a>
    )
  }
  return (
    <div>{file.url} &raquo;</div>
  )
}

export default UploadThumbnail