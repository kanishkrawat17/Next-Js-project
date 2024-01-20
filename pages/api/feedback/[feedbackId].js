import path from "path";
import fs from "fs";

const handler = (req, res) => {
  const { feedbackId } = req.query;
  const pathname = path.join(process.cwd(), "/db/feedback.json");
  const feedbackData = JSON.parse(fs.readFileSync(pathname, "utf-8")); // reading file synchronously.
  const item = feedbackData.feedbacks.find(feedback => feedback.id == feedbackId);

  return res.status(200).json(item);
};

export default handler;
