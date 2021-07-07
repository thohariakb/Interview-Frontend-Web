import React, {useState} from 'react'

const Navbar = () => {

    const [profile, setProfile] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <div>

<div className="ml-auto p-10 lg:w-3/4">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white">
                            <div className="hidden lg:flex w-full">

                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-start">
                                        <h1 className="font-bold text-xl text-gray-500">Question 2</h1>
                                    </div>
                                </div>

                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                    <div className="relative w-full">
                                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search by product name" />
                                    </div>
                                </div>
 
                            </div>

                        </nav>
                        {/* Navigation ends */}
                        
                        

                    </div>
            
        </div>
    )
}

export default Navbar
