export const Footer= (
    {
        icon,
        amount,
    }
) =>{
    return <div className="flex p-1 mt-[5%] mb-2 font-normal text-gray-300 hover:text-white">
        <div className="text-3xl p-3"> 
       <div className="bg-gray-500 p-1">     
{icon}
</div>
        </div>
        <div className="p-2"> 
 <div className="text-xs">
<h1>Available Credits</h1>
 </div>
 <div className="">
    {amount}
 </div>
        </div>
    </div>
}