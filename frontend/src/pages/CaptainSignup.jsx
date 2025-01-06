import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userdata, setUserdata] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserdata({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="px-5 py-5 flex flex-col justify-between h-screen">
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
          <h3 className="text-xl font-medium mb-2">What's Your Name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg  placeholder:text-base"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-xl font-medium mb-2">What's Your Email </h3>
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
            Already Have An Account?{" "}
            <Link to={"/captain-login"} className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div className="w-screen">
        <p className="text-[10px] leading-tight ">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Policy</span> and Terms of Service
          apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
