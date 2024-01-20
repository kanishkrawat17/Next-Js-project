import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method == "POST") {
    const { username, feedback } = req.body;
    const pathname = path.join(process.cwd(), "/db/feedback.json");
    const feedbackData = JSON.parse(fs.readFileSync(pathname, "utf-8")); // reading file synchronously.
    const id = new Date().getTime().toString();
    feedbackData?.feedbacks?.push({ username, feedback, id });
    fs.writeFileSync(pathname, JSON.stringify(feedbackData));
    res.status(200).json({ message: "Success sent feedback" });
  } else if(req.method == "GET") {
    const pathname = path.join(process.cwd(), "/db/feedback.json");
    const feedbackData = JSON.parse(fs.readFileSync(pathname, "utf-8")); // reading file synchronously.

    return res.status(200).json({
        data: feedbackData
    });
  }
};

export default handler;
