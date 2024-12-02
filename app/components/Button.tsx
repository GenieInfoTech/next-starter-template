import React from "react";

type Props = {
  label?: string;
  onClick?: () => void;
};

function Button({ label = "Button", onClick = () => {} }: Props) {
  return (
    <button
      className="bg-sky-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
