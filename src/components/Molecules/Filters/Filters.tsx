import { useState } from "react";

const Filters = ({ getButtonEvent }: any) => {
  const [active, setActive] = useState<Number | null>(null);

  const filterButtons = Array.from(Array(5));
  const orderButtons = ["ASC", "DESC"];

  return (
    <div className="col-span-2 flex justify-end gap-2">
      {orderButtons.map((button) => {
        return (
          <button
            key={`Filter Button - ${button}`}
            data-testid={`filter-${button}`}
            onClick={(e) => getButtonEvent({ filter: button })}
            className={`py-2 px-6 hover:bg-slate-400 rounded text-white bg-slate-500`}
          >
            {button}
          </button>
        );
      })}
      {filterButtons.map((_button, index) => {
        const number = index + 1;
        return (
          <button
            key={`Filter Button - ${number}`}
            data-testid={`filter-${number}`}
            onClick={(e) => {
              getButtonEvent({ index: number });
              setActive(index);
            }}
            className={`${
              index === active ? "bg-slate-400" : "bg-slate-500"
            } py-2 px-6 hover:bg-slate-400 rounded text-white`}
          >
            {number}
          </button>
        );
      })}
      <button
        key={`Filter Button - Reset`}
        onClick={(e) => {
          getButtonEvent({ index: 0 });
          setActive(null);
        }}
        className={`py-2 px-6 hover:bg-slate-400 rounded text-white bg-slate-500`}
      >
        Reset
      </button>
    </div>
  );
};

export default Filters;
