import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faPlus,
    faQrcode,
    faCartShopping,
    faUser,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../Cart_Item';

const Sub_Content_2 = () => {
    const lCartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const prevTotal = useRef();
    prevTotal.current = lCartItems
        ? lCartItems.reduce((total, item) => total + +item.idMeal, 0)
        : 0;

    console.log(lCartItems);
    console.log(prevTotal.current);

    return (
        <div className='max-h-screen'>
            <div className='flex flex-col '>
                <ul className='flex flex-wrap text-sm bg-gray-300 font-medium text-center text-black dark:text-gray-400'>
                    <li className='mr-1'>
                        <a
                            href='#'
                            className='inline-block px-5 py-5 bg-white text-black  flex '
                            aria-current='page'>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className='mr-[2px]'
                            />{' '}
                            Cart
                        </a>
                    </li>
                    <li class='mr-1'>
                        <a href='#' className='inline-block px-5 py-5 flex '>
                            <FontAwesomeIcon
                                icon={faUser}
                                className='mr-[2px]'
                            />{' '}
                            Customer
                        </a>
                    </li>
                    <li class='mr-1'>
                        <a href='#' className='inline-block px-5 py-5  '>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className='mr-[2px]'
                            />{' '}
                            Location
                        </a>
                    </li>
                </ul>
                <div className='flex flex-col h-screen '>
                    <div className=''>
                        {lCartItems.map((cartItem) => (
                            <CartItem cartItem={cartItem} />
                        ))}
                    </div>
                    <div className='mt-[190px] space-y-4 p-[10px]'>
                        <div className='flex justify-between border-b-2 border-gray-600'>
                            <label>Sub Total</label>
                            <label>${prevTotal.current}</label>
                        </div>
                        <div className='flex justify-between text-[#09AEAA] text-xl'>
                            <label>Sub Total</label>
                            <label>${prevTotal.current}</label>
                        </div>
                        <div className='flex text-white space-x-4'>
                            <button className='w-[129px] h-[92px] bg-[#4D4D4D] text-center'>
                                Add Notes
                            </button>
                            <button className='w-[129px] h-[92px] bg-[#09AEAA] text-center'>
                                Add fee or discount
                            </button>
                            <button className='w-[129px] h-[92px] bg-[#09AEAA] text-center'>
                                Apply Coupon
                            </button>
                            <button className='w-[129px] h-[92px] bg-[#09AEAA] text-center'>
                                Shipping
                            </button>
                            <button className='w-[129px] h-[92px] bg-[#DF9915] text-center'>
                                Suspend & Save cart
                            </button>
                            <button className='w-[260px] h-[92px] bg-[#A7B005] text-center'>
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sub_Content_2;
