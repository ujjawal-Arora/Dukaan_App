import { SlArrowDown } from "react-icons/sl";

export const OverView= () =>{
    return <div className="flex justify-between p-6">
        <div className=" font-medium text-xl">
<h1> Overview</h1>
        </div>
        <div className="flex  justify-between gap-3 p-2 w-[11%] bg-gray-50 border boder-2 border-gray-300">
            <div className="text-sm">
                <h1>This Month</h1>
            </div>
            <div className="mt-1 text-xs font-bold">
                {<SlArrowDown/>}
            </div>
        </div>
    </div>
}