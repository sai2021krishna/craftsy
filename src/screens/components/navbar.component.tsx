import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";
import { useKriviStore } from "../infra/store/store";

export const NavbarComponent = () => {
  const navigate = useNavigate();

  const { profile } = useKriviStore((state) => state);
  const { setEmail } = useKriviStore.getState();

  const kriviDetailsStringified = localStorage.getItem("kriviDetails");

  useEffect(() => {
    if (kriviDetailsStringified) {
      const kriviDetails = JSON.parse(kriviDetailsStringified);

      if (kriviDetails.profile?.email) {
        setEmail(kriviDetails.profile?.email);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnHome = useCallback(() => {
    console.info("home");
    navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-1/5 h-full flex justify-center items-center">
        <Bars3Icon className="h-6" />
      </div>
      <div
        className="w-3/5 md:w-4/5 xl:w-4/5 2xl:w-4/5 flex justify-center"
        onClick={returnHome}
      >
        <img
          src="/krivi-logo-cropped.png"
          alt="Krivi's Logo"
          className="p-1 h-14 w-auto object-cover"
        />
      </div>
      <div className="w-1/5 md:w-1/10 xl:w-1/10 2xl:w-1/10 flex justify-center items-center">
        <button
          onClick={() => {
            navigate(profile.email ? "/cart" : "/session-creation");
          }}
          className="w-1/2 flex justify-center font-kriviMPlus1PFont text-kriviGrey active:text-krivyBlack active:-translate-y-1 active:scale-120 md:hover:text-krivyBlack xl:hover:text-krivyBlack 2xl:hover:text-krivyBlack md:hover:-translate-y-1 xl:hover:-translate-y-1 2xl:hover:-translate-y-1 md:hover:scale-120 xl:hover:scale-120 2xl:hover:scale-120 duration-300"
        >
          {profile.email ? (
            <ShoppingCartIcon className="h-5 w-5" />
          ) : (
            <UserIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </>
  );
};
