import React from "react"
import { IconType } from "react-icons";

interface MapButtonProps{
    label: string;
    mapValue: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>, mapValue: string) => void;
    disabled?: boolean;
    outline?: boolean;
    icon?: IconType;
}

const MapButton: React.FC<MapButtonProps> = ({
    label,
    onClick,
    mapValue,
    disabled,
    outline,
    icon: Icon
}) => {
  return ( //hover:-translate-y-1/8
    <button className="bg-ui-light/25 hover:bg-ui-light/15 hover:-translate-y-1/8 active:bg-ui-light/35 text-white duration-100 ease-in w-45 h-13 px-5 font-mono font-bold text-xl rounded-4xl cursor-pointer" onClick={(e) => onClick(e, mapValue)}>
        {Icon && (
            <Icon
                size = {24}
                className= "absolute left-4 top-3"
            />
        )}
        {label}
    </button>
  )
};

export default MapButton;
