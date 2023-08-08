import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListProducts from '../../List_Product';

function SubContent_1() {
    const [category, setCategory] = useState('Chicken');
    const [lCategory, setListCategory] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((res) => res.json())
            .then((data) => {
                setListCategory(data.categories);
            });
    }, []);
    console.log('List category after :', lCategory);

    // console.log(lCategory);

    return (
        <div className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href='https://flowbite.com/' className='flex items-center'>
                    <img
                        src='https://flowbite.com/docs/images/logo.svg'
                        className='h-8 mr-3'
                        alt='Flowbite Logo'
                    />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                        Flowbite
                    </span>
                </a>
                <div className='flex md:order-1'>
                    <button
                        type='button'
                        data-collapse-toggle='navbar-search'
                        aria-controls='navbar-search'
                        aria-expanded='false'
                        className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 20'>
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                            />
                        </svg>
                        <span className='sr-only'>Search</span>
                    </button>
                    <div className='relative hidden md:block w-[500px]'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg
                                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 20'>
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                />
                            </svg>
                            <span className='sr-only'>Search icon</span>
                        </div>
                        <input
                            type='text'
                            id='search-navbar'
                            className='block w-full p-2 pl-10 text-sm text-gray-900 border border-[#09AEAA]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Search...'
                        />
                    </div>
                    <button
                        data-collapse-toggle='navbar-search'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-search'
                        aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'>
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                    id='navbar-search'>
                    <div className='relative mt-3 md:hidden'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg
                                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 20'>
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                />
                            </svg>
                        </div>
                        <input
                            type='text'
                            id='search-navbar'
                            className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Search...'
                        />
                    </div>
                    <button className='bg-black w-[50px] h-[50px] mr-[10px] text-white'>
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col'>
                <ul class='grid grid-cols-7  text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
                    {
                        <>
                            {lCategory.map((category) => (
                                <li class='mr-1 mb-2'>
                                    <button
                                        onClick={() => {
                                            setCategory(category.strCategory);
                                        }}
                                        class='inline-block w-[100px] h-[44px] text-white bg-[rgb(67,87,86)] active'
                                        aria-current='page'>
                                        {category.strCategory}
                                    </button>
                                </li>
                            ))}
                        </>
                    }
                </ul>
                <div>
                    <div className='h-max-screen'>
                        <ListProducts category={category} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubContent_1;
