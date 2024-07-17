'use server';

import Gallery from "@/components/Gallery";
import { connect } from "@/libs/helpers";
import { AdModel } from "@/models/Ad";

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
      <div className="w-3/5 grow bg-black text-white flex flex-col relative">
        <Gallery files={adDoc.files} />
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