import image from "../assets/dukaan.jpg"
// import  SubComponent from "./ SubComponent"

import { SubComponent } from "./SubComponent"
import { Footer } from "./Footer";

import { MdOutlineHome } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { IoWalletSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";

export const SideBar = () => {
    return <div className="fixed top-0 left-0 overflow-y-auto    bg-slate-800 w-[17%] p-3" >
        <div className="flex gap-5">
            <div className="">
                <img src={image} alt="" className="h-16 w-28 rounded-md" />
            </div>
            <div className="flex w-60 justify-between">
            <div>
                <div className="text-slate-50 text-lg font-medium ">
                    <h1>Ujjawal</h1>
                </div>
                <div className="text-gray-200 underline underline-offset-2">
                    <a href="#">Visit Store</a>
                </div>
            </div>
            <div className="mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-50">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

            </div>
            </div>
            
        </div>
        <div className="mt-10">
        <SubComponent text={"Home"} icon={<MdOutlineHome />
}/>
        <SubComponent text={"Orders"} icon={<FaClipboardList />
}/>
        <SubComponent text={"Products"} icon={<CiDeliveryTruck />
}/>
        <SubComponent text={"Delivery"} icon={<HiMiniSpeakerWave />
}/>
        <SubComponent text={"Marketing"} icon={<SiGoogleanalytics />
}/>
        <SubComponent text={"Analytics"} icon={<IoWalletSharp />
}/>
        <SubComponent text={"Payouts"} icon={<CiDiscount1 />
}/>
        <SubComponent text={"Discount"} icon={<IoGridOutline />
}/>
        <SubComponent text={"Audience"} icon={<MdPeopleAlt />
}/>
        <SubComponent text={"Apperiance"} icon={<IoIosColorPalette />
}/>
        <SubComponent text={"Plugins"} icon={<BsLightningCharge />
}/>
        </div>
        
<div className="mt-[24%] bg-gray-600 w-[90%] rounded-md">
<Footer icon={<CiWallet />} amount={4859.12}/>
</div>

    </div>

}