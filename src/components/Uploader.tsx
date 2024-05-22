'use client';
import {IKContext, IKUpload} from "imagekitio-react";
import {IKUploadProps} from "imagekitio-react/src/components/IKUpload/props";

const Uploader = (props: IKUploadProps) => {
  console.log('IKUpload props: ', props);

  return (
    <>
      <IKContext
        urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINTS}
        publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
        authenticator={async () => {
          const response = await fetch('/api/imagekit/auth');
          return await response.json();
        }}
      >
        <IKUpload {...props} />
      </IKContext>
    </>
  )
}

export default Uploader