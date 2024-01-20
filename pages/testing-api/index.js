import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const TestingApi = () => {
  const [data, setData] = useState(null);
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
  };

  const handleSubmit = () => {
    console.log("for submission");
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
    </>
  );
};

export default TestingApi;
