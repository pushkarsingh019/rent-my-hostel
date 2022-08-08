import connectDB from "../../config/database";

export default function handler(req, res) {
  connectDB();
  res.send('Api is up and running');
}
