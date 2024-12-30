import React, { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useKriviStore } from "../infra/store/store";

export const FooterComponent = () => {
  // if you have a email ask with a checkbox to subscribe to newsletter

  const profile = useKriviStore((state) => state.profile);
  // if no email then present a textbox like now and once submitted create a session and use it fo cart
  const [newsLetterEmail, setnewsLetterEmail] = useState("");
  const [newsLetterSubscribed, setNewsLetterSUbscribed] = useState(false);

  const handleNewsLetterEmailChange = (e: any) => {
    e.preventDefault();
    setnewsLetterEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    // update subscription in db
    setNewsLetterSUbscribed(true);

    // craete krviv local storage session
    localStorage.setItem(
      "kriviDetails",
      JSON.stringify({
        createdAt: new Date(),
        profile: { email: newsLetterEmail },
      })
    );

    // update email in store profile
    const { setEmail } = useKriviStore.getState();
    setEmail(newsLetterEmail);
  };

  const handleSubscribeButtonClick = () => {
    // update subscription details in db
    setNewsLetterSUbscribed(true);
  };

  return (
    <>
      <div className="h-48 pl-5 pr-5 pt-2 pb-2 flex flex-col justify-center items-center">
        {!newsLetterSubscribed ? (
          <>
            <p className="text-kriviBase text-lg text-center font-kriviCenturyFont flex justify-center">
              Subscribe to our news-letter{" "}
              {profile.email ? `with ${profile.email}` : ""}
            </p>
            {!profile.email ? (
              <div className="mt-5 flex justify-center items-center">
                <form
                  onSubmit={handleEmailSubmit}
                  className={
                    "mt-2 flex items-center w-40 h-8 border rounded-sm border-kriviBase"
                  }
                >
                  <input
                    onChange={handleNewsLetterEmailChange}
                    placeholder="Email"
                    className="w-32 p-2 bg-transparent text-kriviBase font-kriviCourierFont text-sm"
                  />
                  <button type="submit">
                    <ArrowRightIcon className="h-4 w-6 text-kriviBase active:transition active:ease-in-out active:scale-125" />
                  </button>
                </form>
              </div>
            ) : (
              <button
                onClick={handleSubscribeButtonClick}
                className="h-8 w-2/3 mt-3 font-kriviCourierFont text-lg text-kriviBase border border-kriviBase active:transition active:ease-in-out active:scale-105"
              >
                Subscribe
              </button>
            )}
          </>
        ) : (
          <div className="flex text-center justify-center items-center">
            <CheckCircleIcon className="h-6 text-kriviSuccess" />
            <p className="ml-2 text-kriviBase font-kriviCenturyFont text-lg">
              Hope our news-letters find you well!
            </p>
          </div>
        )}

        <div className="mt-5">
          <a href="https://www.instagram.com/krivi_collective?igsh=cmJvZGhweGo5dW8z">
            <img
              src="/instagram.png"
              alt="instagram"
              className="h-6 w-6 text-kriviBase"
            />
          </a>
        </div>
      </div>
      <div className="h-12 border-t border-kriviBase flex items-center justify-center">
        <p className="flex justify-center items-center text-kriviBase text-xs font-kriviCourierFont">
          Copyrights, Krivi
        </p>
      </div>
    </>
  );
};
