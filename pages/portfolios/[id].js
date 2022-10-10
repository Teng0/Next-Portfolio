import React from "react";
import { useRouter } from "next/router";
const PortfolioDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>I am detail Page with ID: {id} </h1>
    </div>
  );
};

export default PortfolioDetails;
