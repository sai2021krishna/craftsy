import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardContainerComponent = () => {
  const navigate = useNavigate();

  const handleBrowseProductsClick = useCallback(() => {
    console.info("Browse Products Clicked");
    navigate("products");
  }, []);

  return (
    <div className="p-5 h-full w-full">
      <div className="p-2 mt-2 mb-2">
        <p className="text-sm font-kriviCourierFont text-center">
          We are still growing!
        </p>
        <p className="text-sm font-kriviCourierFont text-center">
          You might not be able to place an order from the websitebut you can
          react us out at <a href="">@krivi_collective</a> on Instagram.
        </p>
      </div>

      <div className="p-2 mb-2">
        <img src="coldplay-candle.jpeg" alt="coldplay candle" />
        <div className="p-2">
          <p className="mt-2 text-lg font-bold font-kriviCenturyFont">
            "Light up your worlds, one story at a time"
          </p>
          <p className="mt-2 text-sm font-kriviCourierFont">
            At Krivi, we craft candles that tell stories, spread warmthand
            elevate your space. Every piece is a hand poured blend of artistry
            and nature
          </p>
          <button
            name="Browse products"
            className="mt-4 w-3/4 h-8 text-sm font-kriviCourierFont border active:text-kriviBase active:bg-kriviBlack"
            onClick={handleBrowseProductsClick}
          >
            Browse products
          </button>
        </div>
      </div>

      <div className="p-2 mb-2">
        <img src="ambasador-picture.jpg" alt="krivi brand ambasador" />
        <div className="p-2">
          <p className="mt-2 text-lg font-bold font-kriviCenturyFont">
            About us
          </p>
          <p className="mt-2 text-sm font-kriviCourierFont">
            Krivi is inspired by the world around us. The candles are born from
            our journeys we have taken, people we adore and the stories we've
            lived. Every design is a memory, handpoured into light.
          </p>
          <button
            name="Browse products"
            className="mt-4 w-3/4 h-8 text-sm font-kriviCourierFont border"
          >
            Get in touch
          </button>
        </div>
      </div>

      <div className="p-2 mb-2">
        <img src="creative-idea.jpeg" alt="krivi brand ambasador" />
        <div className="p-2">
          <p className="mt-2 text-sm font-kriviCourierFont">
            If you have a memory that you'd lik to bring back to life. DO let us
            know at @krivi_collective we might be able to design just the right
            thing for you!
          </p>
          <button
            name="Browse products"
            className="mt-4 w-3/4 h-8 text-sm font-kriviCourierFont border"
          >
            Browse Collections
          </button>
        </div>
      </div>
    </div>
  );
};
