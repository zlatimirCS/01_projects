"use client";

const error = (error) => {
  // return <div>Drinks fetch failed</div>;
  return <div>{error.error.message}</div>;
};
export default error;
