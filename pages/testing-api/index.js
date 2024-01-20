import React, { useEffect, useRef, useState } from "react";
import path from "path";
import axios from "axios";

const TestingApi = () => {
  const [data, setData] = useState(null);
  const [feedbacks, setFeedbacks] = useState(null);
  const feedbackRef = useRef(null);
  const emailRef = useRef(null);

  const handleClick = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/api/feedback",
      data: {
        feedback: feedbackRef.current.value,
        email: emailRef.current.value,
      },
      headers: {
        "Content-Type": "application/json",
      },
      params: {},
    });
    const message = response?.data?.message ?? "";
    setData(message);
    const pathname = path.join(process.cwd(), "/db/feedback.json");
    console.log(pathname, "Hello");
  };

  const handleSubmit = () => {
    console.log("for submission");
  };

  const handleGetAllFeedbacks = async () => {
    const response = await axios("http://localhost:3000/api/feedback");
    const jsonData = response?.data?.data?.feedbacks ?? {};
    setFeedbacks([...jsonData]);
  };

  return (
    <>
      <h2>Status: {data ? data : "Loading......!!!"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" ref={emailRef} />
        <br />
        <label>Feedback</label>
        <textarea type="text" ref={feedbackRef} />
      </form>
      <button onClick={handleClick}>Submit feedback</button>
      <button onClick={handleGetAllFeedbacks}>Get all feedbacks</button>
      {feedbacks && feedbacks.length ? (
          feedbacks.map((user) => {
            return (
              <ul>
                <li>username: {user.email}</li>
                <li>feedback: {user.feedback}</li>
              </ul>
            );
          })
      ) : null}
    </>
  );
};

export default TestingApi;
