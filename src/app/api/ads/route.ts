import { connect } from "@/libs/helpers";
import { AdModel } from "@/models/Ad";

export const GET = async () => {
   await connect();
   const adsDocs = await AdModel.find({}, null, {sort:{createdAt: -1}});
   return Response.json(adsDocs);
}