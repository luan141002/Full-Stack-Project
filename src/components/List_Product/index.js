import { memo, useEffect, useState, useRef, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

function ListProducts({ category }) {
    const [lMeal, setLMeal] = useState([]);

    const dispatch = useDispatch();

    // Calling API
    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
                category || 'Chicken'
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                setLMeal(data.meals);
            });
    }, [category]);

    return (
        <div className='flex bg-[rgb(67,87,86)] p-[10px] pb-[70px]'>
            <div className='basis-[5%] mx-[5px]'>
                <div className='flex items-center justify-center h-[200px] bg-[#8C8C8C]'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </div>
            <div className='basis-[95%] grid grid-cols-1 md:grid-cols-3 gap-4 '>
                <div className=' flex  items-center justify-center h-[200px] bg-[#8C8C8C] bg-center w-full max-w-sm bg-cover border border-gray-200 '>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                {
                    <>
                        {lMeal.map((meal) => (
                            <div
                                key={meal.idMeal}
                                className=' flex items-end h-[200px] bg-center w-full max-w-sm bg-cover border border-gray-200 '
                                style={{
                                    backgroundImage: `url('${meal.strMealThumb}')`,
                                }}
                                onClick={() => dispatch(addItem(meal))}>
                                <div className='flex w-[100%] h-[20%] p-2 text-white justify-between bg-[#8C8C8C] opacity-70'>
                                    <h5 class='text-sm font-semibold tracking-tight  '>
                                        {' '}
                                        {meal.strMeal}{' '}
                                    </h5>
                                    <h5 class='text-sm font-semibold tracking-tight'>
                                        $ {meal.idMeal}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        </div>
    );
}

export default ListProducts;
