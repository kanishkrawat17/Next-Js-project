import React, { useRef, useState } from "react";
import axios from "axios";
import Link from "next/Link";
import { useRouter } from "next/Router";

const TestingApi = () => {
  const [feedbacks, setFeedbacks] = useState(null);
  const feedbackRef = useRef(null);
  const usernameRef = useRef(null);

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "api/feedback",
      data: {
        feedback: feedbackRef.current.value,
        username: usernameRef.current.value,
      },
      headers: {
        "Content-Type": "application/json",
      },
      params: {},
    });
    usernameRef.current.value = "";
    feedbackRef.current.value = "";
  };

  const handleSubmit = () => {
    console.log("for submission");
  };

  const handleGetAllFeedbacks = async () => {
    const response = await axios("/api/feedback");
    const jsonData = response?.data?.data?.feedbacks ?? {};
    setFeedbacks([...jsonData]);
  };

  const loadData = (id) => {
   fetch(`api/feedback/${id}`)
   .then(res => res.json())
   .then(data => console.log(data, "Data"))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" ref={usernameRef} />
        <br />
        <label>Feedback</label>
        <textarea type="text" ref={feedbackRef} />
      </form>
      <button onClick={handleClick}>Submit feedback</button>
      <button onClick={handleGetAllFeedbacks}>Get all feedbacks</button>
      {feedbacks && feedbacks.length
        ? feedbacks.map((user) => {
            return (
              <li key={user.id}>
                Username: {user.username}
                <button  onClick={loadData.bind(null, user.id)}>
                  See feedback by this user
                </button>
              </li>
            );
          })
        : null}
    </>
  );
};

export default TestingApi;

/**
 * 1. Create a seperate feedback Page.
 * 2.
 */
