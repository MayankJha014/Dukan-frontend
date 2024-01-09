import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { tableData } from "./table_list";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [pageNo, setPageNo] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 8;

  useEffect(() => {
    setTotalPages(Math.ceil(tableData.length / itemsPerPage));
  }, [tableData, itemsPerPage]);

  const pageNo = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(tableData.slice(startIndex, endIndex));
  }, [tableData, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-auto overflow-x-hidden p-6 ">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-medium font-inter text-xl">Overview</p>
            <select
              name="periodic-data"
              id="periodic-data"
              className="border-0 w-44 text-sm p-2 rounded-md font-normal text-gray-700"
            >
              <option value="thismonth">This Month</option>
              <option value="lastmonth">Last Month</option>
              <option value="lastweek">Last Week</option>

              <option value="lastyear">Last Year</option>
            </select>
          </div>
          <div className="flex  flex-wrap sm:p-10 items-center">
            <div className="flex-grow my-4 sm:my-0">
              <p className="font-inter pb-2.5 text-black/60">Online orders</p>
              <p className="font-inter text-4xl font-semibold">231</p>
            </div>
            <div className="flex-grow my-4 sm:my-0">
              <p className="font-inter pb-2.5 text-black/60">
                Advance recieved
              </p>
              <p className="font-inter text-4xl font-semibold">₹23,92,312.19</p>
            </div>
          </div>
          <p className="text-xl text-black font-semibold">
            Transactions | This Month
          </p>
          <div className="flex justify-between p-4">
            <form className="w-64 hidden md:block">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2.5 ps-10 text-sm text-gray-900 bg-[#f7f7f7] border border-gray-300  rounded-lg "
                  placeholder="Search by order ID..."
                />
              </div>
            </form>
            <div className="flex gap-2">
              <div className="p-2 border flex h-fit gap-1 border-black/20 rounded text-gray-600">
                <span className="text-black/50 font-inter text-sm">Sort</span>
                <BiSortAlt2 size={20} className="text-gray-500" />
              </div>
              <div className="p-2 h-fit border border-black/20 rounded ">
                <FiDownload size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-base font-light font-inter">
                    <thead className="border-b bg-[#F2F2F2]  ">
                      <tr>
                        <th
                          scope="col"
                          className=" px-6 py-4 font-normal text-gray-600  "
                        >
                          Order ID
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 font-normal text-gray-600"
                        >
                          <div className="flex items-center">
                            <p>Order Date</p>
                            <span>
                              <FaCaretDown size={18} />
                            </span>{" "}
                          </div>
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 font-normal text-center text-gray-600"
                        >
                          Order Amount
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 font-normal text-gray-600 text-right"
                        >
                          <div className="flex items-center justify-end">
                            <p> Transaction fees</p>
                            <span>
                              <CiCircleAlert size={18} />
                            </span>{" "}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="overflow-hidden h-44 ">
                      {currentData.map((x, index) => (
                        <tr className="border-b " key={index}>
                          <td className="whitespace-nowrap  px-6 py-2 font-medium text-[#146EB4]">
                            {x.id}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-2 text-gray-600">
                            {x.id}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-2 text-gray-600 text-center">
                            {x.orderAmt}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-2 text-gray-600 text-right">
                            {x.transac}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex gap-2 justify-center my-2">
          {currentPage != 1 ? (
            <div
              className="flex border items-center border-black/30 rounded px-2 cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="px-1 text-sm text-black/90">Previous</span>{" "}
            </div>
          ) : (
            <></>
          )}
          {pageNo.map((x, index) => (
            <li
              className={`px-3 py-1.5 text-black border cursor-pointer border-black/30 rounded ${
                currentPage == index + 1 ? "bg-[#146EB4] text-white" : ""
              }`}
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {x}
            </li>
          ))}
          {totalPages != currentPage ? (
            <div
              className="flex border items-center border-black/30  px-2 rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span className="px-1 text-sm text-black/90">Next</span>{" "}
              <svg
                className="h-5 w-5 rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
