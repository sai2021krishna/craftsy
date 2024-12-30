import React, { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useKriviStore } from "../infra/store/store";

const SessionCreationContainer = () => {
  const [email, setEmail] = useState("");

  const { setEmail: setStoreEmail} = useKriviStore.getState();

  const location = useLocation();
  const navigate = useNavigate();

  const handleEmailChange = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleCreateProfileButtonClick = () => {
    const kriviDetailsStringified = localStorage.getItem("kriviDetails");
    if (!kriviDetailsStringified) {
      localStorage.setItem(
        "kriviDetails",
        JSON.stringify({ createdAt: new Date(), profile: { email } })
      );
    } else {
      const kriviDetails = JSON.parse(kriviDetailsStringified);
      kriviDetails.profile.email = email;
      localStorage.setItem("kriviDetails", JSON.stringify(kriviDetails));
    }
    const from = location.state?.from || "/";
    setStoreEmail(email)
    navigate(from);
  };

  return (
    <div className="h-full w-full p-5">
      <div className="p-3 bg-kriviInfo bg-opacity-20 border-2 border-kriviInfo rounded-md flex">
        <div className="h-6 w-1/5 flex justify-center items-center">
          <InformationCircleIcon className="h-full w-full" />
        </div>
        <div>
          <p className="ml-2 font-kriviCourierFont text-base">
            Currently we won't be asking you to Sign-in.
          </p>
          <p className="ml-2 mt-2 font-kriviCourierFont text-base">
            Although we require your email to have your cart managed for current
            and future references.
          </p>
          <p className="ml-2 mt-2 font-kriviCourierFont text-base">
            Once you have submitted your email we will redirect you to the
            previous page you were on.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleCreateProfileButtonClick}
        className="flex flex-col justify-center"
      >
        <input
          type="email"
          placeholder="yourmailid@xyz.com"
          value={email}
          onChange={handleEmailChange}
          required
          className="h-12 mt-10 p-2 font-kriviCourierFont border rounded-sm"
        />
        <button
          type="submit"
          className="h-12 mt-5 bg-kriviBlack rounded-sm text-kriviBase text-base font-kriviCourierFont active:transition active:ease-in-out active:scale-105"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default SessionCreationContainer;
