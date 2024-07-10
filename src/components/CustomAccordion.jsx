import React, { useState } from "react";

function Accordion({ faq }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-6">
      <dt
        className="flex justify-between items-center"
        aria-controls="faq-1"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        <p className="font-semibold text-lg">{faq.question}</p>
        <i
          className={`fa-solid fa-chevron-up transition ${
            isSelected ? "rotate-0" : "rotate-180"
          }`}
        ></i>
      </dt>
      <dd
        id="faq-1"
        className={`${isSelected ? "block" : "hidden"} text-lg font-light mt-6`}
      >
        <p>{faq.answer}</p>
      </dd>
    </div>
  );
}

export default Accordion;
