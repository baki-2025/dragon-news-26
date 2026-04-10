import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6'>All Categories ({categories.length})</h2>
            <div className='flex flex-col gap-3'>
                {categories.map((category) => (
                    <NavLink 
                        key={category.id} 
                        className={({isActive}) => 
                            isActive 
                            ? "btn border-none bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg w-full justify-start px-6 font-bold" 
                            : "btn bg-white hover:bg-pink-50 border-white hover:border-pink-200 text-gray-600 font-semibold w-full justify-start px-6 transition-all shadow-sm hover:shadow-md"
                        } 
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;