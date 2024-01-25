import { ItemHeader } from "@/components/Header - Mobile/ItemHeader";

import UserIcon from "@/assets/user.jpeg";
import Image from 'next/image';

export const Header = () => {
    return(
        <div className="fixed top-0 left-0 flex items-center gap-3 bg-[#121212] w-screen h-max px-3 py-3 overflow-x-auto md:bg-transparent md:left-[26%]">
            <div>
                <div className="w-8 h-8">
                    <Image src={UserIcon} alt="User" className="rounded-full cursor-pointer"/>
                </div>
            </div>
                <ItemHeader label={"Tudo"} active={true}/>
                <ItemHeader label={"Música"}/>
                <ItemHeader label={"Podcast"}/>
        </div>
    );
}