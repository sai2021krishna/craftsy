import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ImageComponent } from "../components/image.component";

export const DashboardContainerComponent = () => {
  const navigate = useNavigate();

  const handleBrowseProductsClick = useCallback(() => {
    console.info("Browse Products Clicked");
    navigate("/products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-5 h-full w-full">
      <div className="p-2 mt-2 mb-2">
        <p className="text-sm font-kriviCourierFont text-center">
          We are still growing!
        </p>
        <p className="text-sm font-kriviCourierFont text-center">
          You might not be able to place an order from the websitebut you can
          react us out at{" "}
          <a href="https://www.instagram.com/krivi_collective?igsh=cmJvZGhweGo5dW8z">
            @krivi_collective
          </a>
          on Instagram.
        </p>
      </div>

      <div className="p-2 mb-2">
        <ImageComponent
          src="coldplay-candle.jpeg"
          altText="coldplay candle"
          classes=""
        />
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

      <div className="p-2 mb-2  bg-kriviBlack bg-opacity-5 rounded-md">
        <ImageComponent
          src="ambasador-picture.jpg"
          altText="krivi brand ambasador"
          classes=""
        />
        <div className="mt-3 p-2">
          <p className="mt-2 text-lg font-bold font-kriviCenturyFont">
            About us
          </p>
          <p className="mt-2 text-sm font-kriviCourierFont">
            Krivi is inspired by the world around us. The candles are born from
            our journeys we have taken, people we adore and the stories we've
            lived. Every design is a memory, handpoured into light.
          </p>
        </div>
      </div>

      <div className="p-2 mt-3 mb-2">
        <ImageComponent
          src="creative-idea.jpeg"
          altText="krivi brand ambasador"
          classes="mt-3"
        />
        <div className="p-2">
          <p className="mt-2 text-sm font-kriviCourierFont">
            If you have a memory that you'd lik to bring back to life. DO let us
            know at @krivi_collective we might be able to design just the right
            thing for you!
          </p>
          <a href="https://www.instagram.com/krivi_collective?igsh=cmJvZGhweGo5dW8z">
            <button
              name="Get in touch"
              className="mt-4 w-3/4 h-8 text-sm font-kriviCourierFont border"
            >
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
