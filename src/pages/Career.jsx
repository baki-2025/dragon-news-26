import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { FaRocket, FaLaptopCode, FaVideo } from 'react-icons/fa';
import { FaPenNib } from 'react-icons/fa6';

const Career = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-50/40 via-white to-pink-50/40 min-h-screen text-gray-800 font-sans selection:bg-purple-200 pb-20">
            <header className="pt-5"><Header /></header>
            <nav className='w-11/12 mx-auto my-6'>
                <Navbar />
            </nav>

            <main className="w-11/12 md:max-w-5xl mx-auto my-10 bg-white/80 p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-100/50 border border-gray-100 backdrop-blur-md">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 tracking-tight">Join Our Team</h1>
                    <p className="text-lg text-gray-600 font-medium">Build the future of digital journalism with us.</p>
                </div>

                <div className="mb-12">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 md:w-2/3">
                            <h2 className="text-3xl font-extrabold mb-4">Why Work At Dragon News?</h2>
                            <p className="text-white/90 text-lg mb-6 leading-relaxed">
                                We are a fast-growing, innovative tech and media company. You'll be working with a diverse team of passionate individuals dedicated to delivering unbiased news through beautiful, modern aesthetics. We value creativity, impact, and a healthy work-life balance.
                            </p>
                            <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all">View Openings</button>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-indigo-500 pl-4 py-1 mb-8">Current Opportunities</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Job 1 */}
                    <div className="p-6 border border-gray-100 rounded-2xl bg-white hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <FaLaptopCode size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">Frontend Developer</h4>
                                <p className="text-sm text-gray-500 font-medium">Engineering • Remote</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            Join our engineering team to build sleek, responsive, and glassmorphism-fueled user interfaces using React and Tailwind CSS.
                        </p>
                        <button className="text-indigo-500 font-bold hover:underline">Apply Now →</button>
                    </div>

                    {/* Job 2 */}
                    <div className="p-6 border border-gray-100 rounded-2xl bg-white hover:border-pink-300 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <FaPenNib size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">Senior Investigative Journalist</h4>
                                <p className="text-sm text-gray-500 font-medium">Editorial • New York</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            Drive high-impact stories. You will have full editorial independence to uncover truths that matter to our global audience.
                        </p>
                        <button className="text-pink-500 font-bold hover:underline">Apply Now →</button>
                    </div>

                    {/* Job 3 */}
                    <div className="p-6 border border-gray-100 rounded-2xl bg-white hover:border-purple-300 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <FaVideo size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">Multimedia Producer</h4>
                                <p className="text-sm text-gray-500 font-medium">Media • London</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            Create stunning visual stories and documentaries that accompany our major reports. Expertise in Premiere and After Effects is required.
                        </p>
                        <button className="text-purple-500 font-bold hover:underline">Apply Now →</button>
                    </div>

                    {/* Job 4 */}
                    <div className="p-6 border border-gray-100 rounded-2xl bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <FaRocket size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Growth Marketing Manager</h4>
                                <p className="text-sm text-gray-500 font-medium">Marketing • Remote</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            Lead our reader acquisition strategies, converting casual readers into loyal subscribers through data-driven campaigns.
                        </p>
                        <button className="text-blue-500 font-bold hover:underline">Apply Now →</button>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Career;
