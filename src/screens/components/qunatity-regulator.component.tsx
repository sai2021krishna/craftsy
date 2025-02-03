type QuantityRegulatorComponentProps = {
  isQuantityTextVisible: boolean;
  handleQuantityMutation: (selector: "-" | "+") => void;
  handleInputChange: (event: any) => void;
  quantity: number;
  display: "details" | "cart";
};
export const QuantityRegulatorComponent = (
  props: QuantityRegulatorComponentProps
) => {
  const {
    isQuantityTextVisible,
    handleInputChange,
    handleQuantityMutation,
    quantity,
    display,
  } = props;

  return (
    <>
      {isQuantityTextVisible && (
        <p className="font-kriviCourierFont text-md opacity-70">Quantity</p>
      )}
      <div
        className={`mt-2 flex justify-center border ${
          display === "details" ? "w-32 h-8" : "w-24 h-6"
        }`}
      >
        <p
          className={`font-kriviCourierFont text-center active:transition active:ease-in-out active:scale-105 ${
            display === "details" ? "w-10 text-xl" : "w-8 text-md"
          }`}
          onClick={() => handleQuantityMutation("-")}
        >
          -
        </p>
        <input
          type="text"
          value={quantity}
          className={`font-kriviCourierFont text-center ${
            display === "details" ? "w-10 text-xl" : "w-8 text-md"
          }`}
          onChange={handleInputChange}
        />
        <p
          className={`font-kriviCourierFont text-center active:transition active:ease-in-out active:scale-105 ${
            display === "details" ? "w-10 text-xl" : "w-8 text-md"
          }`}
          onClick={() => handleQuantityMutation("+")}
        >
          +
        </p>
      </div>
    </>
  );
};
