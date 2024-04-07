import { BsArrowDownUp } from "react-icons/bs";
import { PiDownloadSimple } from "react-icons/pi";

export const SortCompo = () => {
    return (
        <div className="flex justify-between">
            <div className=" bg-white border-solid border-2 p-2 flex rounded-md w-96 gap-3 ">
                <div className="bg-white p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div>
                    <input className="bg-white focus:outline-0 w-80" type="text" placeholder="Order ID or Transaction ID" />

                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex bg-slate-50  p-1 rounded-sm border-solid border-2 h-[80%] w-20">
                    <div className="ml-[16%]">
                        <h1>Sort</h1>
                    </div>
                    <div className="p-1 ml-[5%]">
                        {<BsArrowDownUp />}
                    </div>
                </div>
                <div className= "flex bg-slate-50 p-1 rounded-sm border-solid border-2 h-[80%] w-12 text-2xl ">
                 <div className="ml-[20%]">
                 <PiDownloadSimple />
                 </div>
                </div>
            </div>
        </div>
    )
}