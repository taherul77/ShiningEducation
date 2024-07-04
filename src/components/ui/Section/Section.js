
import React from "react";

export default function Section({ heading }) {
  return (
    <div className="mx-auto m-4  lg:py-2">
      <h3 className="text-3xl lg:text-4xl font-bold uppercase text-red-600 ">
        {heading}
      </h3>
    </div>
  );
}