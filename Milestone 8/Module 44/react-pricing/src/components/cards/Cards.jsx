import React from "react";
import { CircleCheckBig } from 'lucide-react';

const Cards = ({ price }) => {
  return (
    <div className="flex flex-col border-2 rounded-2xl p-4 bg-gray-500">
      <div>
        <h1 className="text-3xl">{price.name}</h1>
        <h3 className="text-3xl">{price.price}</h3>
      </div>

      <div className="p-4 flex-1">
        <p>{price.information}</p>
        {
            price.features.map((feature,index) => <p className="flex gap-2 my-4" key={index}><CircleCheckBig /> {feature}</p>)
        }
      </div>
      <button className="btn w-full">Subscribe</button>
    </div>
  );
};

export default Cards;
