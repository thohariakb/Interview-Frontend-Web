import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataProductsOne } from '../store/services/productsDataOne';
const CardQuestion1 = () => {

    const dispatch = useDispatch();
    const productDataOne = useSelector((state) => state.productsDataOne.products);

    // console.log('products', productDataOne);

    useEffect(() => {
        dispatch(getDataProductsOne);
    }, []);

    return (
        <div>

            <h1 className="ml-auto lg:w-3/4 font-bold text-2xl text-gray-400 mb-3 mt-4">Question 1</h1>
            
            <div className="ml-auto p-10 lg:w-3/4 bg-white dark:bg-gray-800 shadow-lg rounded">
                <div className="flex items-center justify-around py-6 border-b border-gray-300 dark:border-gray-200">
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Product Name</p>
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Product Code</p>
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Description</p>
                    <p className="font-bold text-xl text-gray-500 dark:text-gray-100">Tags</p>
                </div>

                <div className="flex flex-wrap items-center justify-around py-6 pl-8 border-b border-gray-300 dark:border-gray-200">
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

export default CardQuestion1
