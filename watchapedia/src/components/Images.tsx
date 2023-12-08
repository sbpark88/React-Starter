import React from "react";
import { AiFillStar } from "react-icons/ai";
import { COLORS } from "../constants/COLORS";

export const RatingStar: React.FC = () => {
  return (
    <AiFillStar
      style={{ transform: "translateY(2px)" }}
      color={COLORS.YELLOW_0}
    />
  );
};
