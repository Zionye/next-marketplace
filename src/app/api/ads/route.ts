import { authOptions } from "@/libs/authOptions";
import { connect } from "@/libs/helpers";
import { Ad, AdModel } from "@/models/Ad";
import { FilterQuery } from "mongoose";
import {getServerSession} from "next-auth";

export const GET = async (req: Request, res: Response) => {
  console.log('req: ---', req);
  const { searchParams } = new URL(req.url);
  const filter: FilterQuery<Ad> = {};

  const phrase = searchParams.get('phrase') || null;
  const category = searchParams.get('category') || null;
  const min = searchParams.get('min') || null;
  const max = searchParams.get('max') || null;

  if(phrase){
    // filter.title = {$regex: ".*" +phrase + ".*"};
    filter.title = {$regex: `.*${phrase}.*`, $options: 'i'};
  }
  if(category){
    filter.category = category;
  }
  if (min && !max) filter.price = {$gte: min};
  if (max && !min) filter.price = {$lte: max};
  if (min && max) filter.price = {$gte: min, $lte: max};

   await connect();
   const adsDocs = await AdModel.find(filter, null, {sort:{createdAt: -1}});
   return Response.json(adsDocs);
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  await connect();
  const adDoc = await AdModel.findById(id);
  const session = await getServerSession(authOptions);
  if (!adDoc || adDoc.userEmail !== session?.user?.email) {
    return Response.json(false);
  }
  await AdModel.findByIdAndDelete(id);
  return Response.json(true);
}