interface Props {
    label: string;
    active?: boolean;
}

export const ItemHeader = ({label, active}: Props) => {
    
    return (
        <div className={`${active ? `bg-spotify-verde text-black hover:bg-[#1ed55f]` : `bg-spotify-gray text-white hover:bg-[#444444]`} w-max px-5 py-2 rounded-3xl  cursor-pointer text-sm`}>
            <span>{label}</span>
        </div>
    );
}