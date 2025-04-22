import React from "react";
import { useWishlist } from "../hooks/useWishlist";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full max-w-[1450px] m-auto px-4 sm:px-6 lg:px-8 mt-34">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 place-items-center">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative w-full max-w-[240px] h-[260px] flex flex-col gap-4 group hover:text-red-500 duration-300"
            >
              <div className="overflow-hidden rounded-[15px]">
                <Link to={`/product/${item.id}`}>
                  <img
                    className="w-full h-[180px] object-cover rounded-[15px] transform transition-transform duration-300 group-hover:scale-105"
                    src={item.img}
                    alt={item.title}
                  />
                </Link>
              </div>

              <button
                onClick={() => toggleWishlist(item)}
                className={`absolute top-2 right-2 w-[40px] h-[40px] rounded-full bg-[#D4D4D4] text-[#FF0000] text-xl flex items-center justify-center shadow-md cursor-pointer`}
              >
                {isInWishlist(item.id) ? (
                  <span className="text-red-500">❤️</span>
                ) : (
                  <span className="text-gray-400">🤍</span>
                )}
              </button>

              <h1 className="text-center text-[16px] font-medium">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
