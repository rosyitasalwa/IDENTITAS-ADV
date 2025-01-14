import React from 'react';
const AccountSetting = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-customBeigeMuda">
                    <div className=" p-8 rounded-lg max-w-2xl w-1/2 mr-96">
                        <h1 className="text-2xl font-bold mb-4 text-[#4b2e2e]">ACCOUNT</h1>
                        <div className="flex flex-col md:flex-row items-center mb-4">
                            <img src="https://placehold.co/100x100" alt="Profile picture of a person" className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-4" />
                            <div className="flex flex-col md:flex-row items-center">
                                <button className="bg-[#4b2e2e] text-white px-4 py-2 rounded-md mr-2 mb-2 md:mb-0">UPLOAD NEW PHOTO</button>
                                <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md">RESET</button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Allowed PNG or JPEG.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button className="bg-[#4b2e2e] text-white px-4 py-2 rounded-md">SAVE CHANGE</button>
                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">RESET</button>
                        </div>
                    </div>
                </div>
            );
        }
        
export default AccountSetting;
