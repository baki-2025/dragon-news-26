import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { FaHeart, FaPenNib, FaGlobe } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-gradient-to-br from-pink-50/40 via-white to-blue-50/40 min-h-screen text-gray-800 font-sans selection:bg-pink-200 pb-20">
            <header className="pt-5"><Header /></header>
            <nav className='w-11/12 mx-auto my-6'>
                <Navbar />
            </nav>

            <main className="w-11/12 md:max-w-4xl mx-auto my-10 bg-white/80 p-8 md:p-12 rounded-3xl shadow-xl shadow-pink-100/50 border border-gray-100 backdrop-blur-md">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 tracking-tight">About Dragon News</h1>
                    <p className="text-lg text-gray-600 font-medium">Journalism Without Fear or Favour.</p>
                </div>

                <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                    <p>
                        Welcome to <span className="font-bold text-pink-500">Dragon News</span>, your most trusted, vibrant, and fiercely independent source for the latest happenings across the globe. Born out of a passion for truth and a commitment to unapologetic journalism, we have been setting the standard for digital news since our inception.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaPenNib className="text-pink-500 text-4xl mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Unbiased Reporting</h3>
                            <p className="text-sm text-gray-600">We cut through the noise to bring you facts. No strings attached.</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaGlobe className="text-blue-500 text-4xl mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Global Reach</h3>
                            <p className="text-sm text-gray-600">From local stories to international headlines, we cover it all seamlessly.</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaHeart className="text-purple-500 text-4xl mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">For The People</h3>
                            <p className="text-sm text-gray-600">Our journalism is powered by you, driven purely by public interest.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-pink-500 pl-4 py-1">Our Mission</h2>
                    <p>
                        At Dragon News, we believe that an informed society is an empowered one. In an era of rampant misinformation, our dedicated team of experienced journalists, analysts, and editors work round-the-clock to verify, investigate, and present stories that matter.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 py-1 mt-8">The Future of News</h2>
                    <p>
                        We aren't just adapting to the future; we are building it. By merging cutting-edge design, glassmorphism aesthetics, and blazingly fast technology, reading Dragon News is designed to be an immersive, premium experience.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default About;
