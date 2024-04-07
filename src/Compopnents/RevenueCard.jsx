import { FaRegQuestionCircle } from "react-icons/fa";

export const RevenueCard = ({ title, orderCount, amount, flag }) => {
  return (
    <div className="w-[32%]">
      <div className={`${flag ? 'bg-blue-700' : 'bg-white rounded'} p-4 h-32  shadow-gray-400 shadow-lg`}>
        <div className={`${flag ? 'text-white' : 'text-gray-700'} flex gap-2`}>
          <div>{title}</div>
          <div className={`${flag ? 'text-white' : 'text-gray-500'} mt-1 text-xm`}>
            <FaRegQuestionCircle />
          </div>
        </div>
        <div className="flex mt-5 justify-between">
          <div className={`${flag ? 'text-white' : 'text-black'} text-3xl font-medium`}>$ {amount}</div>
          {orderCount ? (
            <div className="flex">
              <div className={`${flag ? 'text-white' : 'text-blue-700'} cursor-pointer underline`}>{orderCount} order(s)</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${flag ? 'text-white' : 'text-blue-700'} w-6 h-6`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {flag ? (
        <div className="bg-blue-950 shadow-gray-600 shadow-lg text-white flex justify-between p-3 rounded-b-lg">
          <h2>Next Payout date : </h2>
          <h2>Today, 04:00 PM</h2>
        </div>
      ) : null}
    </div>
  );
};



