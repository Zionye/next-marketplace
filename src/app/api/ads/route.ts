import { connect } from "@/libs/helpers";
import { Ad, AdModel } from "@/models/Ad";
import { FilterQuery } from "mongoose";

export const GET = async (req: Request, res: Response) => {
  console.log('req: ---', req);
  const { searchParams } = new URL(req.url);
  const filter: FilterQuery<Ad> = {};

  const phrase = searchParams.get('phrase') || null;
  const category = searchParams.get('category') || null;

  if(phrase){
    // filter.title = {$regex: ".*" +phrase + ".*"};
    filter.title = {$regex: `.*${phrase}.*`, $options: 'i'};
  }
  if(category){
    filter.category = category;
  }

   await connect();
   const adsDocs = await AdModel.find(filter, null, {sort:{createdAt: -1}});
   return Response.json(adsDocs);
}