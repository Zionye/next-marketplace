'use server';

import UploadThumbnail from "@/components/UploadThumbnail";
import UploadView from "@/components/UploadView";
import { connect } from "@/libs/helpers";
import { AdModel } from "@/models/Ad";
import { useEffect } from "react";

type Props = {
  params: {
    id: string
  };
  searchParams: {
    [key: string]: string;
  };
};

const SingleAdPage = async (args: Props) => {
  await connect();
  const adDoc = await AdModel.findById(args.params.id);
  console.log('adDoc:--> ', adDoc);

  if(!adDoc){
    return 'Not found!';
  }

  return (
    // <div>{JSON.stringify(args)}</div>
    <div className="flex absolute inset-0 top-16">
      <div className="grow bg-black text-white flex flex-col">
        <div className="grow flex items-center p-4">
          {adDoc.files?.length > 0 && (
            <div>
              <UploadView file={adDoc.files[0]}/>
            </div>
          )}
        </div>
        <div className="p-4 flex gap-4">
          {adDoc.files.map(file => (
            <div key={file.fileId} className="size-14">
              <UploadThumbnail file={file} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/5 p-8 grow shrink-0">
        <div className="text-lg font-bold">{adDoc.title}</div>
        <label>category</label>
        <p className="text-sm">{adDoc.category}</p>
        <label>description</label>
        <p className="text-sm">{adDoc.description}</p>
        <label>contact</label>
        <p className="text-sm">{adDoc.contact}</p>
      </div>
    </div>
  )
}

export default SingleAdPage