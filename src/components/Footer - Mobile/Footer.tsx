import { ItemFooter } from "./ItemFooter";
import { FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { VscLibrary } from "react-icons/vsc";

export const Footer = () => {
    return (
        <div className="fixed w-full left-0 bottom-0 h-max p-3 flex items-center bg-gradient-to-t from-black via-black/50 to-transparent md:hidden">
            <ItemFooter icon={<FaHouse />} label="Início"/>
            <ItemFooter icon={<IoIosSearch />} label="Buscar"/>
            <ItemFooter icon={<VscLibrary />} label="Sua Biblioteca"/>
        </div>
    );
}