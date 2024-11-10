import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

export const NavbarComponent = () => {

  return (
    <>
      <div className="min-w-full h-12 flex p-2 bg-kriviPrimary bg-opacity-40 bg-gradient-to-r from-kriviPrimary border-none rounded-sm">
        <div className=" md:h-full xl:h-full 2xl:h-full md:w-1/2 xl:w-1/2 2xl:w-1/2">
          <img src="krivi.png" className="h-10 object-cover" alt="krivi logo" />
        </div>
        <div className="w-3/5 md:w-4/5 xl:w-4/5 2xl:w-4/5 flex justify-center"></div>
        <div className="w-1/5 md:w-1/10 xl:w-1/10 2xl:w-1/10 flex justify-center items-center">
          <button className="w-1/2 flex justify-end font-kriviMPlus1PFont text-kriviGrey active:text-krivyBlack active:-translate-y-1 active:scale-120 md:hover:text-krivyBlack xl:hover:text-krivyBlack 2xl:hover:text-krivyBlack md:hover:-translate-y-1 xl:hover:-translate-y-1 2xl:hover:-translate-y-1 md:hover:scale-120 xl:hover:scale-120 2xl:hover:scale-120 duration-300">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};
