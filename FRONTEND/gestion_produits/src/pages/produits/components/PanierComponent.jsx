const PanierComponent = () => {
  return (
    <div className="section-panier">
      <div className="font-sans bg-white max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-extrabold text-gray-800">Your Cart</h2>
        <div className="overflow-x-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-500 p-2 ">Description</th>
                <th className="text-base text-gray-500 p-2 pl-8">Size</th>
                <th className="text-base text-gray-500 p-2 pr-8 text-center">
                  Quantity
                </th>
                <th className="text-base text-gray-500 p-2 ">Remove</th>
                <th className="text-base text-gray-500 p-2 text-end">Price</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y">
              <tr>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="h-36 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product6.webp"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        Black T-Shirt
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-6 px-4">
                  <button
                    type="button"
                    className="bg-transparent border flex items-center justify-center w-11 h-10 font-semibold text-base "
                  >
                    M
                  </button>
                </td>

                <td className="py-6 px-4">
                  <div className="flex overflow-hidden border w-max">
                    <button
                      type="button"
                      className="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="bg-gray-800 text-white flex items-center justify-center w-11 h-10 font-semibold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>

                <td className="py-6 px-4">
                  <button
                    type="button"
                    className="bg-transparent border flex items-center justify-center w-11 h-10 font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-orange-500 inline cursor-pointer"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </td>
                <td className="py-6 px-4">
                  <h4 className="text-lg font-bold text-gray-800 text-end">
                    $18.5
                  </h4>
                </td>
              </tr>

              <tr>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="h-36 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product2.webp"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        Gray T-Shirt
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-6 px-4">
                  <button
                    type="button"
                    className="bg-transparent border flex items-center justify-center w-11 h-10 font-semibold text-base"
                  >
                    M
                  </button>
                </td>

                <td className="py-6 px-4">
                  <div className="flex overflow-hidden border w-max">
                    <button
                      type="button"
                      className="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="bg-gray-800 text-white flex items-center justify-center w-11 h-10 font-semibold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>

                <td className="py-6 px-4">
                  <button
                    type="button"
                    className="bg-transparent border flex items-center justify-center w-11 h-10 font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-orange-500 inline cursor-pointer"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </td>
                <td className="py-6 px-4">
                  <h4 className="text-lg font-bold text-gray-800 text-end">
                    $18.5
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" max-w-full ml-auto mt-4">
          <ul className="text-gray-800 divide-y">
            <li className="flex flex-wrap gap-4 text-base py-3">
              Subtotal <span className="ml-auto font-bold">$37.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
              Total <span className="ml-auto">$45.00</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-base px-6 py-2 w-full bg-gray-800 hover:bg-gray-900 text-white rounded"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanierComponent;
