import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="Puff" color="brown" height={750} width={280} />
  </div>
);
