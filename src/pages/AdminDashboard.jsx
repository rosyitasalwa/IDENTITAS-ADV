import React from 'react'
import logo from "../assets/Logo.png";

const AdminDashboard = () => {
    return (
        <div className="flex h-screen">
                        <div className="w-1/4 bg-customMochaBrown p-4 mt-20">
                            <ul>
                                <li className="mb-4">
                                    <button className="w-full text-left p-2 rounded-full text-white font-bold hover:bg-orange-950 transition-all">
                                    <i class="ri-login-box-line mr-5 to-white"></i> Login
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button className="w-full text-left p-2 rounded-full text-white font-bold hover:bg-orange-950 transition-all">
                                    <i class="ri-logout-box-r-line mr-5 to-white"></i> Logout
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button className="w-full text-left p-2 rounded-full text-white font-bold hover:bg-orange-950 transition-all">
                                    <i class="ri-user-settings-line mr-5 to-white"></i> Account Setting
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button className="w-full text-left p-2 rounded-full text-white font-bold hover:bg-orange-950 transition-all">
                                    <i class="ri-dashboard-line mr-5 to-white"></i> Dashboard
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button className="w-full text-left p-2 rounded-full text-white font-bold hover:bg-orange-950 transition-all">
                                    <i class="ri-clipboard-line mr-5 to-white"></i> Review
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="bg-[#b08a7d] p-8 rounded-lg w-96">
                                <img src={logo} alt="Logo Identitas Advertising" className="mx-auto mb-4" />
                                <h2 className="text-white text-left text-lg font-bold mb-2">Welcome to Identitas Advertising!</h2>
                                <p className="text-white text-center mb-6">Please sign-in to your account and start the adventure</p>
                                <form>
                                    <div className="mb-4">
                                        <input type="email" placeholder="Email" className="w-full p-2 rounded bg-white" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="password" placeholder="Password" className="w-full p-2 rounded bg-white" />
                                    </div>
                                    <button type="submit" className="w-full p-2 bg-white rounded-full text-[#6b4a3b] font-bold">LOGIN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                );
            };
            
export default AdminDashboard