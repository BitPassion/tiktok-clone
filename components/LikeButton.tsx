import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "../store/authStore";

// Props interface
interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

// Like Button
const LikeButton = ({ handleLike, handleDislike, likes }: IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  // check if video is already liked
  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {/* Already liked */}
        {alreadyLiked ? (
          <div
            onClick={handleDislike}
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]"
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          // Like
          <div
            onClick={handleLike}
            className="bg-primary rounded-full p-2 md:p-4"
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        {/* Total Likes */}
        <p className="text-md font-semibold">{likes?.length | 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
