import { RiMessage2Fill } from "react-icons/ri";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export const AppBar = () => {
    return <div className="flex  h-20 p-5 justify-between " >
        <div className=" flex text-blue-700 text-2xl">
            <h2>Payouts</h2>
            <div className="flex text-sm p-1">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 w-5 h-5 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>

                </div>
                <div className="ml-1 ">

                    <h2>How it works</h2>
                </div>
            </div>
        </div>

        <div className=" bg-gray-200 p-2 flex rounded-md w-96 gap-3">
            <div className="bg-gray-200 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div>
                <input className="bg-gray-200 focus:outline-0 w-80" type="text" placeholder="Search features,tutorial " />

            </div>
        </div>
        <div className="flex gap-3 ">
            <div className="bg-gray-200 rounded-full">

                <div className="bg-gray-200 h-10 w-10 text-2xl rounded-full p-2">
{<RiMessage2Fill />}
                </div>
            </div>
            <div className="bg-gray-200 rounded-full">

<div className="bg-gray-200 h-10 w-10 text-lg rounded-full p-3">
{<TbTriangleInvertedFilled />}
</div>
</div>
        </div>
    </div>
}