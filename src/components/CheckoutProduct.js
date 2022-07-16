import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ item }) => {
  const { id, title, category, description, price, image, rating, hasPrime, counter } =
    item;
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = { id, title, category, description, price, image, rating, hasPrime };
    dispatch(addToBasket(product))
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}));
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon key={i} className="h-5 text-yellow-500" />;
            })}
        </div>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <p className='m-auto w-full bg-red-500 text-white font-bold text-center border border-yellow-400 rounded-lg'>{counter}</p>
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
