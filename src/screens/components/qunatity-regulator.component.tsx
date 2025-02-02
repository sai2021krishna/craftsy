type QuantityRegulatorComponentProps = {
  handleQuantityMutation: (selector: '-' | '+') => void;
  handleInputChange: (event: any) => void;
  quantity: number;
};
export const QuantityRegulatorComponent = (
  props: QuantityRegulatorComponentProps
) => {
  const { handleInputChange, handleQuantityMutation, quantity } = props;

  return (
    <>
      <p className="font-kriviCourierFont text-md opacity-70">Quantity</p>
      <div className="mt-2 w-32 h-8 flex justify-center border">
        <p
          className="w-10 font-kriviCourierFont text-xl text-center active:transition active:ease-in-out active:scale-105"
          onClick={() => handleQuantityMutation("-")}
        >
          -
        </p>
        <input
          type="text"
          value={quantity}
          className="w-10 font-kriviCourierFont text-xl text-center"
          onChange={handleInputChange}
        />
        <p
          className="w-10 font-kriviCourierFont text-xl text-center active:transition active:ease-in-out active:scale-105"
          onClick={() => handleQuantityMutation("+")}
        >
          +
        </p>
      </div>
    </>
  );
};
