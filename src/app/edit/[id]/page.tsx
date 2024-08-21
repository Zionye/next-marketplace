'use server';

import AdForm from '@/components/AdForm';
import { authOptions } from "@/libs/authOptions";
import { connect } from "@/libs/helpers";
import { AdModel } from "@/models/Ad";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    id: string
  };
  searchParams: {
    [key: string]: string;
  };
};

const EditPage = async (props: Props) => {
  const id = props.params.id;
  await connect();
  const adDoc = await AdModel.findById(id);
  const session = await getServerSession(authOptions);

  if(!adDoc){
    return '404 Not found!';
  }
  if(session?.user?.email !== adDoc?.userEmail){
    return 'Not yours!';
  }

  return (
    // <div>{JSON.stringify(props)}</div>
    <AdForm
      id={adDoc._id}
      defaultTexts={adDoc}
      defaultFiles={adDoc.files}
      // defaultLocation={{lng:adDoc.location.coordinates[0],lat:adDoc.location.coordinates[1]}} 
    />
  )
}

export default EditPage