import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';
const CartItem = ({ cartItem }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const quanInput = useRef();
    const handleMinus = (Meal) => {
        const isValid = quanInput.current.value > 1 ? true : false;
        if (!isValid) {
            dispatch(removeItem(Meal));
            // console.log(Meal);
        } else {
            setQuantity(quantity - 1);
        }
    };
    const handleXIcon = (Meal) => {
        dispatch(removeItem(Meal));
        // console.log(Meal)
    };

    return (
        <div
            key={cartItem.idMeal}
            className='w-full h-[50px] flex justify-between p-[5px] border-b-2 border'>
            <div className='flex space-x-2 items-center'>
                <div
                    className=' w-[50px] h-[50px] flex justify-center items-center text-[#72727272]'
                    onClick={() => handleXIcon(cartItem)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <img
                    className='w-[40px] h-[40px]'
                    src={cartItem.strMealThumb}
                    alt=''
                />
                <label className='font-bold'>{cartItem.strMeal}</label>
            </div>
            <div className='flex space-x-6 items-center'>
                <div className='h-[40px]'>
                    <button
                        className='w-[40px] h-[40px] bg-[#09AEAA]'
                        onClick={() => handleMinus(cartItem)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                        ref={quanInput}
                        type='number'
                        className='w-[40px] h-[40px]'
                        value={quantity}
                    />

                    <button
                        className='w-[40px] h-[40px] bg-[#09AEAA]'
                        onClick={() => setQuantity(quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <label className='text-[#72727272] text-sm'>
                    {' '}
                    $ {cartItem.idMeal}
                </label>
                <label className='text-black text-base'>
                    {' '}
                    ${quantity * cartItem.idMeal}
                </label>
            </div>
        </div>
    );
};

export default CartItem;
