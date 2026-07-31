import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const UserTable = ({ users, title }) => {
  const [search, setSearch] = useState("");

  const filtered = users.filter((item) =>
    item.business.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div
        className="
          flex
          flex-col
          lg:flex-row
          justify-between
          lg:items-center
          gap-4
          mt-6
          mb-5
        "
      >
        <h1
          className="
            text-white
            text-3xl
            sm:text-3xl
            font-light
            underline
          "
        >
          {title}
        </h1>

        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Searching..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              py-3
              pl-5
              pr-14
              outline-none
              text-sm
              sm:text-base
            "
          />

          <div
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              h-9
              w-9
              rounded-xl
              bg-[#40D5CF]
              flex
              items-center
              justify-center
            "
          >
            <FaSearch className="text-white text-sm" />
          </div>
        </div>
      </div>

      <div
        className="
          hidden
          md:block
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-sm
          border
          border-gray-200
        "
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="
                  px-6
                  py-5
                  text-left
                  text-2xl
                  font-medium
                  text-black
                  rounded-tl-3xl
                  border-r
                  border-gray-200
                "
              >
                Business Name
              </th>

              <th
                className="
                  px-6
                  py-5
                  text-left
                  text-2xl
                  font-medium
                  text-black
                  border-r
                  border-gray-200
                "
              >
                Contact Name
              </th>

              <th
                className="
                  px-6
                  py-5
                  text-left
                  text-2xl
                  font-medium
                  text-black
                  border-r
                  border-gray-200
                "
              >
                Phone Number
              </th>

              <th
                className="
                  px-6
                  py-5
                  text-left
                  text-2xl
                  font-medium
                  text-black
                  rounded-tr-3xl
                "
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-5 border-b border-solid border-gray-300">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.logo}
                      alt={item.business}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {item.business}
                      </h2>

                      <p className="text-sm text-gray-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-gray-700 border-b border-solid border-gray-300">
                  {item.contact}
                </td>

                <td className="px-6 py-5 text-gray-700 border-b border-solid border-gray-300">
                  {item.phone}
                </td>

                <td className="px-6 py-5 border-b border-solid border-gray-300">
                  <Status status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="
          md:hidden
          flex
          flex-col
          gap-4
        "
      >
        {filtered.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-5
              shadow-sm
              border
              border-gray-200
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                mb-4
              "
            >
              <img
                src={item.logo}
                alt={item.business}
                className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                "
              />

              <div>
                <h2 className="font-bold text-gray-900">{item.business}</h2>

                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Contact</span>

                <span className="text-gray-700">{item.contact}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Phone</span>

                <span className="text-gray-700">{item.phone}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-600">Status</span>

                <Status status={item.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Status = ({ status }) => {
  return status === "Active" ? (
    <span
      className="
        inline-flex
        rounded-full
        border
        bg-lime-100
        border-green-500
        px-4
        py-1
        text-sm
        font-medium
        text-green-600
      "
    >
      Active
    </span>
  ) : (
    <span
      className="
        inline-flex
        rounded-full
        border
        bg-red-100
        border-red-500
        px-4
        py-1
        text-sm
        font-medium
        text-red-600
      "
    >
      Block
    </span>
  );
};

export default UserTable;
