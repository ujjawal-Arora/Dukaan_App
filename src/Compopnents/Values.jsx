export const Values = (
    {
        oid,stats,tid,Rdate,Rtime,amount
    }
) => {
    return (
        <div className=" gap-10 p-4 grid grid-cols-6">
            <div>

                <div className="text-blue-700 font-medium">#{oid}</div>

            </div>

            <div className="flex  gap-2">

                <div className={`${stats=='Successful' ? 'bg-green-400': stats=='Processing'?'bg-gray-400':'bg-red-600'} rounded-full h-[22%] w-[5%] p-1 mt-[5%]`}></div>
                <div>{stats}</div>
            </div>

            <div>

                <div>{tid}</div>

            </div>

            <div className="flex gap-2">

                <div>{Rdate},</div>
                <div>{Rtime}</div>

            </div>

            <div>


            </div>

            <div >

                <div className="ml-[30%]" >{amount}</div>

            </div>






        </div>
    )
}