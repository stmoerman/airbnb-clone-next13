"use client";

import { SafeUser } from "@/app/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "@/app/hooks/useFavorite";

interface AddToFavoriteButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-600/70"}
      />
    </div>
  );
};

export default AddToFavoriteButton;
