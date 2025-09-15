import type { ReactElement } from "react";

interface ButtonInterface {
  title: string;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant: "primary" | "secondary";
  onClick: () => void;
}


const sizeStyles = {
  "sm": "py-1 px-2 text-sm rounded-sm",
  "md": "py-2 px-4 text-md rounded-md",
  "lg": "py-4 px-8 text-xl rounded-xl "
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};


export function Button (props: ButtonInterface) {
  return <button
    className={sizeStyles[props.size] + " " + variantStyles[props.variant]}>
    <div className="flex items-center">
      {props.startIcon}
      <div className="pl-2 pr-2">
        {props.title}
      </div>
      {props.endIcon}
    </div>
  </button>
};

{/* <Button variant="primary" size="md" onClick={() => { }} text={"asd"} /> */}
