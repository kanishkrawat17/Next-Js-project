import React from "react";
import fs from "fs";
import path from "path";

const FeedbackPage = (props) => {
  const { feedbackData } = props;

  const loadCompleteData = (userId) => {
    const user = feedbackData.find(feedback => feedback.id === userId);
    fetch(`/api/feedback/${user.id}`)
    .then(response => response.json())
    .then(data => console.log(data, "Data Hiiiii---"));
  };

  return feedbackData && feedbackData.length
    ? feedbackData.map((user) => {
        return (
          <li key={user.id}>
            {user.username}
            <br/>
            <button onClick={loadCompleteData.bind(null, user?.id)}>Show feedback by this user</button>
          </li>
        );
      })
    : "No data to show";
};

export default FeedbackPage;

export async function getStaticProps() {
  const pathname = path.join(process.cwd(), "/db/feedback.json");
  const feedbackData = JSON.parse(fs.readFileSync(pathname, "utf-8")); // reading file synchronously.

  return {
    props: {
      feedbackData: feedbackData?.feedbacks
    },
  };
}
