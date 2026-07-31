import React from "react";

const RevenueTable = () => {
  const data = [
    {
      name: "Wade Warren",
      email: "michelle.rivera@example.com",
      date: "10/28/12",
      amount: "£450",
    },
    {
      name: "Esther Howard",
      email: "felicia.reid@example.com",
      date: "8/21/15",
      amount: "£360",
    },
    {
      name: "Brooklyn Simmons",
      email: "sara.cruz@example.com",
      date: "10/11/16",
      amount: "£500",
    },
    {
      name: "Jenny Wilson",
      email: "jackson.graham@example.com",
      date: "8/15/17",
      amount: "£150",
    },
  ];

  const total = data.reduce(
    (sum, item) => sum + Number(item.amount.replace("£", "")),
    0
  );

  const lineClass =
  "relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-[radial-gradient(circle,_#9CA3AF_1px,_transparent_1.2px)] after:bg-[length:8px_1px] after:bg-repeat-x";

  return (
    <div className="mt-6 bg-white rounded-[22px] shadow-sm overflow-x-auto px-8 py-6">
      <table className="w-full min-w-[850px] border-collapse">
        <thead>
          <tr>
            <th
              className={`${lineClass} text-left pb-5 text-[15px] font-bold text-black`}
            >
              Company Name
            </th>

            <th
              className={`${lineClass} text-left pb-5 text-[15px] font-bold text-black`}
            >
              Company Email
            </th>

            <th
              className={`${lineClass} text-center pb-5 text-[15px] font-bold text-black`}
            >
              Date
            </th>

            <th
              className={`${lineClass} text-right pb-5 text-[15px] font-bold text-black`}
            >
              Amount Received
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td
                className={`${lineClass} py-5 text-[#42D8D3] font-medium`}
              >
                {item.name}
              </td>

              <td
                className={`${lineClass} py-5 font-bold text-gray-800`}
              >
                {item.email}
              </td>

              <td
                className={`${lineClass} py-5 text-center font-bold text-gray-800`}
              >
                {item.date}
              </td>

              <td
                className={`${lineClass} py-5 text-right font-semibold text-gray-800`}
              >
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}></td>

            <td className="pt-6 text-right text-[18px] font-bold text-black">
              £{total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RevenueTable;