export const Refund=(
    {
        num,
        refund
    }
)=>{
    return <div className="p-4 ml-[2%]">
        <div className="text-lg font-medium">
            <h1>Trasnsactions | This Months </h1>
        </div>
        <div className="flex mt-[1%]   gap-3">
            <div className="bg-gray-300 text-sm w-[10%] h-[5%]   rounded-3xl p-2 text-gray-500">
            <div className="ml-[15%]">
            <h1>Payouts ({num})</h1>
            </div>
            </div>
            <div className="bg-blue-700  w-[10%] h-[5%]   rounded-3xl p-2 text-white text-sm">
   <div className="ml-[15%]">
   <h1> Refunds ({refund})</h1>
   </div>
            </div>
        </div>
    </div>
}