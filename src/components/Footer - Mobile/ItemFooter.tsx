import React from "react";

interface Props {
    icon: React.ReactElement;
    label: string;
}

export const ItemFooter: React.FC<Props> = ({icon, label}: Props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-1 text-white flex-1 cursor-pointer">
            <div className="text-2xl">{icon}</div>
            <p className="text-[11px]">{label}</p>
        </div>
    );
}