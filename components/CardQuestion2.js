import React from 'react'

const CardQuestion2 = () => {
    return (
        <div>
        
        <div className="ml-auto p-10 lg:w-3/4 bg-white dark:bg-gray-800 shadow-lg rounded">
                <div className="flex items-center justify-around py-6 border-b border-gray-300 dark:border-gray-200">
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Product Name</p>
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Product Code</p>
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Description</p>
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Tags</p>
                
                </div>

                <div className="flex flex-wrap items-center justify-around py-6 border-b border-gray-300 dark:border-gray-200">
                    <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                        <p className="text-sm text-gray-800 dark:text-gray-100 mb-2 font-normal">Nike</p>
                    </div>
                    <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                        <p className="text-sm text-gray-800 dark:text-gray-100 mb-2 font-normal">N001</p>
                    </div>
                    <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                        <p className="text-sm text-gray-800 dark:text-gray-100 mb-2 font-normal">Shoes</p>
                    </div>
                    <div className="mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                        <div className="text-sm text-gray-400 dark:text-gray-100 mb-2 font-normal">
                        <ul className="list-disc">
                            <li>Shoes</li>
                            <li>Sport</li>
                            <li>Running</li>
                        </ul>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CardQuestion2
