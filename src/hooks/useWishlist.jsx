import { useState, useEffect } from "react";

const getWishlistFromStorage = () => {
  const saved = localStorage.getItem("wishlist");
  return saved ? JSON.parse(saved) : [];
};

const saveWishlistToStorage = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  window.dispatchEvent(new Event("wishlistChanged"));
};

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(getWishlistFromStorage());

  useEffect(() => {
    const handleChange = () => {
      setWishlist(getWishlistFromStorage());
    };

    window.addEventListener("wishlistChanged", handleChange);
    return () => window.removeEventListener("wishlistChanged", handleChange);
  }, []);

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const toggleWishlist = (product) => {
    const exists = isInWishlist(product.id);
    const updated = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    saveWishlistToStorage(updated);
    setWishlist(updated);
  };

  return {
    wishlist,
    toggleWishlist,
    isInWishlist,
    count: wishlist.length,
  };
};
