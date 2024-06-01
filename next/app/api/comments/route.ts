import CommentModel from "../../models/comment";
import { connectToMongo } from '../../utils/db';

const MONGODB_URI = process.env.MONGODB_URI;

export async function GET() {
   await connectToMongo(MONGODB_URI);
  try {
    const comments = await CommentModel.find();
    return Response.json({comments})
  } catch (error) {
    return Response.json({ message: 'Internal Server Error' });
  }

}

export default GET;