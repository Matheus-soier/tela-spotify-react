import { Header } from "@/components/Header - Mobile/Header";
import { Footer } from "@/components/Footer - Mobile/Footer";
import { playlist } from "@/data/playlist";
import Image from "next/image";
import Teto from "@/assets/teto.png";

const Page = () => {

  function hello() {
    const hello = new Date().getHours();
    if(hello > 5 && hello < 16) {
      return "Boa Tarde";
    } else if(hello >= 16 && hello <= 23) {
      return "Boa noite";
    } else if (hello >= 0 && hello <= 5) {
      return "Boa Madrugada"
    } else {
      return "Bom dia";
    }
  } 

  return (
    <div className="flex flex-col h-full w-screen bg-[#121212]">
        <Header />
        <div className="flex md:bg-black">
          <div className="hidden md:flex md:flex-col w-1/3 h-screen gap-3 p-3">
            <div className="w-full h-1/3 bg-[#121212] rounded-md"></div>
            <div className="w-full h-full bg-[#121212] rounded-md"></div>
          </div>
          <div className="flex flex-col w-full mt-20 space-y-4 md:mt-0 md:pt-20 md:px-4 md:bg-gradient-to-b md:from-[#474747] md:to-transparent px-4 bg-[#121212]">
            <h2 className="text-white font-bold text-3xl">{hello()}</h2>
            <div className="grid grid-cols-2 gap-2 items-center md:grid-cols-3">
              {playlist.map(item => (
                <div key={item.id} className="flex bg-spotify-gray h-16 rounded-md text-white cursor-pointer hover:bg-[#444444] gap-2 items-center">
                  <div className="w-16 h-16">
                    <Image src={Teto} alt="playlist song" className="rounded-l-md"/>
                  </div>
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Page;