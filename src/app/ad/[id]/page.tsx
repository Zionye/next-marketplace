'use server';

import Gallery from "@/components/Gallery";
import DeleteAdButton from "@/components/DeleteAdButton";
import { authOptions } from "@/libs/authOptions";
import { connect, formatDate, formatMoney } from "@/libs/helpers";
import { AdModel } from "@/models/Ad";
import { getServerSession } from "next-auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  const session = await getServerSession(authOptions);

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
        {session && session?.user?.email === adDoc.userEmail && (
          <div className="mt-2 flex gap-2">
            <Link
              href={`/edit/${adDoc._id}`} 
              className="border border-blue-600 text-blue-600 rounded-md py-1 px-4 inline-flex gap-1 items-center cursor-pointer">
                <FontAwesomeIcon icon={faPencil}/>
                <span>Edit</span>
            </Link>
            
            <DeleteAdButton id={adDoc._id}/>
          </div>
        )}
        <label>Price</label>
        <p>{formatMoney(adDoc.price)}</p>
        <label>category</label>
        <p className="text-sm">{adDoc.category}</p>
        <label>description</label>
        <p className="text-sm">{adDoc.description}</p>
        <label>contact</label>
        <p className="text-sm">{adDoc.contact}</p>

        <p className="mt-4 text-xs text-gray-400">
          Posted: {formatDate(adDoc.createdAt)}<br />
          Last update: {formatDate(adDoc.updatedAt)}
        </p>
      </div>
    </div>
  )
}

export default SingleAdPage