// import { useState } from 'react'
// function App() {
//   // const [count, setCount] = useState(0)
import { RevenueCard } from "./Compopnents/RevenueCard"
import { AppBar } from "./Compopnents/AppBar";
import { SideBar } from "./Compopnents/SideBar";
import { Refund } from "./Compopnents/Refund";
import { OverView } from "./Compopnents/OverView";
import { SortCompo } from "./Compopnents/SortCompo";
import { Grid } from "./Compopnents/Grid";
import { Values } from "./Compopnents/Values";
import { MadeBy } from "./Compopnents/MadeBy";
export default function App() {
  return (
    <div className=''>
      {/* <RevenueCard/> */}
      <div className="flex-grow ml-[17%]">

        <SideBar />

        <div className="">
          <AppBar />
          <div className="bg-gray-100">
            <OverView />
            <div className="flex ml-6 justify-between p-2 ">
            <RevenueCard title={"Amount Pending"} orderCount={15} amount={78965.0012} flag={"true"} />

                <RevenueCard title={"Amount Pending"} orderCount={15} amount={78965.0012} />

                <RevenueCard title={"Amount Pending"}  amount={78965.0012} />
              
            </div>
           <div className="mt-[1%]">
           <Refund num={20} refund={6}/>
           </div>


           <div className=" m-5 bg-slate-50">
        <div className=" p-6 ml-[2%]">
          <SortCompo/>
          </div>
          <div className=" p-6 ml-[2%]">
         <Grid/>
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Successful"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Processing"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Failed"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Successful"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Processing"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Failed"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Successful"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Processing"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Failed"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Successful"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Processing"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Failed"} Rdate={"Today"} Rtime={"08:45 PM"}/>
         <hr />
         <Values oid={218123} tid={123456789} amount={"$ 1,125.00"} stats={"Successful"} Rdate={"Today"} Rtime={"08:45 PM"}/>
          </div>
        </div>


           </div>
           <MadeBy/>
        </div>

      </div>


    </div>
  )
}

