import React from "react";

const CardQuestion2 = (props) => {
  const { products } = props;

  return (
    <div>

      <div className="ml-auto p-4 lg:w-3/4 bg-white dark:bg-gray-800 shadow-lg rounded">
        <div className="grid grid-cols-4 gap-6 flex text-center items-center py-6 border-b border-gray-300 dark:border-gray-200">
          <p className="font-bold text-lg text-gray-500 dark:text-gray-100">
            Product Name
          </p>
          <p className="font-bold text-lg text-gray-500 dark:text-gray-100">
            Product Code
          </p>
          <p className="font-bold text-lg text-gray-500 dark:text-gray-100">
            Description
          </p>
          <p className="font-bold text-lg text-gray-500 dark:text-gray-100">
            Tags
          </p>
        </div>

        {products?.map((item, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-4 gap-6 flex flex-wrap items-center py-6 border-b border-gray-300 dark:border-gray-200"
            >
              <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                <p className="text-center text-sm text-gray-800 dark:text-gray-100 mb-2 font-normal">
                  {item?.title}
                </p>
              </div>
              <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                <p className="text-center text-sm text-gray-800 dark:text-gray-100 mb-2 font-normal">
                  {item?.id}
                </p>
              </div>
              <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                <p className="text-justify text-sm text-gray-800 dark:text-gray-100 mb-2 font-normal">
                  {item?.description}
                </p>
              </div>
              <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                <div className="ml-20 text-sm text-gray-400 dark:text-gray-100 mb-2 font-normal">
                  <ul className="list-disc">
                    {item?.tags?.map((element) => (
                      <li>{element}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardQuestion2;
