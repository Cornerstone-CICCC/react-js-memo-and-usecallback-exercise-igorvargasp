import { memo } from "react";

interface GetProductsButtonProps {
  onClick: () => void;
}

const GetProductsButton = memo(function GetProductsButton({
  onClick,
}: GetProductsButtonProps) {
  console.log("Rendered Button Component");

  return <button onClick={onClick}>Fetch Products</button>;
});

export default GetProductsButton;
