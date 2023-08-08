import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className='flex justify-between w-full h-[50px] bg-[rgb(67,87,86)] text-white items-center'>
            <div className=''>
                <button className='w-[50px] h-[50px] bg-[#1EA4A3] mr-[10px]'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button className='w-[50px] h-[50px] bg-transparent  mr-[10px]'>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <label className=' mr-[10px]'>
                    <span className='font-bold'>Store: </span> Food Store
                </label>
                <label className=' mr-[10px]'>
                    <span className='font-bold'>Register:</span> Register 1
                </label>
            </div>
            <div className='flex  gap-[5px]'>
                <button className='bg-transparent w-[50px] h-[50px] mr-[10px]'>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <button className='bg-transparent w-[50px] h-[50px] mr-[10px]'>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <img
                    src='https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg'
                    alt=''
                    className='w-[40px] h-[40px] mr-[10px] self-center'
                />
                <label className=' mr-[10px] self-center'>
                    <span className='font-bold'>Register:</span> Register 1
                </label>
                <button className='flex flex-col bg-red-700 w-[50px] h-[50px] items-center justify-center '>
                    <FontAwesomeIcon icon={faHouse} />
                    <label className='text-xs'>Log Out</label>
                </button>
            </div>
        </div>
    );
}
export default Header;
