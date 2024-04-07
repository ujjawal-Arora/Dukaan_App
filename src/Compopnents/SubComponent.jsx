export const SubComponent= (
    {
        text,
        icon
    }
) =>{
    return <div className=" hover:bg-gray-700 rounded-lg flex p-1 mt-[5%] gap-3 font-medium text-slate-300 ">
        <div className="text-xl mt-1 "> 
            
{icon}
        </div>
        <div className="text-lg font-medium "> 
{text}
        </div>
    </div>
}