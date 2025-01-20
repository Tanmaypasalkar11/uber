import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleplate, setVehiclePlate] = useState("");
  const [vehiclecapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicalType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehicleplate,
        capacity: vehiclecapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    const data = response.data;
    if (response.status === 201) {
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicalType("");
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
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg  placeholder:text-base"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
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
            className="bg-[#eeeeee] mb-3 py-2 px-4 w-full rounded border text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <h3 className="text-xl font-medium mb-2 mt-4">Vehicle Information</h3>
          <div className="flex gap-2 mb-4">
            <input
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              className="px-4 py-2 w-full mb-3 bg-[#eeeeee] rounded border text-lg placeholder:text-base"
              placeholder="Vehicle Colour"
            />
            <input
              value={vehicleplate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              className="px-4 py-2 w-full mb-3 bg-[#eeeeee] rounded border text-lg placeholder:text-base"
              placeholder="Vehicle Plate"
            />
          </div>
          <div className="flex gap-2 mb-4">
            <input
              value={vehiclecapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              className="px-4 py-2 w-full mb-3 bg-[#eeeeee] rounded border text-lg placeholder:text-base"
              placeholder="Vehicle Capacity"
            />
            <select
              required
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setVehicalType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Auto">Auto</option>
            </select>
          </div>

          <button className="bg-black text-white font-semibold rounded w-full px-4 py-2 text-lg mb-3 placeholder:text-base">
            Create Captain Account
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
