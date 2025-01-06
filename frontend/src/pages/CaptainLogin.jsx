import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/MbCpDjh73jJ5ghDGD1S8E3HLJU_F5yvdH-XZEbBqPTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvdWJlci91YmVy/X1BORzE3LnBuZw"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl font-medium mb-2">What's Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-3 placeholder:text-base"
            type="email"
            placeholder="tanmay98213@gmail.com"
          />

          <h3 className="text-xl font-medium mb-2 mt-4">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 py-2 px-4 w-full rounded border text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button className="bg-black text-white font-semibold rounded w-full px-4 py-2 text-lg mb-3 placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Join As Fleet{" "}
            <Link to={"/captain-signup"} className="text-blue-600">
              Register As A Fleet
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/login"}
          className=" flex justify-center items-center bg-black placeholder:text-base text-white rounded w-full mb-5 py-2 px-1 font-semibold text-lg"
        >
          SignIn As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
