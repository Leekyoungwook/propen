import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventSDefault();

    if (value.username === "" || value.email === "" || value.password === "") {
      alert("이름과 이메일, 비밀번호는 필수 입력값 입니다.");
      return;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg px-8 py-5 w-72 border">
        <h2 className="text-lg font-bold mb-4">SIGNUP</h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn w-full h-12 !text-base">Submit</button>
        </form>
        <div className="mt-4">
          <span>이미 회원이라면 | </span>
          <Link to="/login" className="underline hover:italic">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
