import { Outlet } from 'react-router-dom';
import Header from '../../header';
import SubContent from '../../Sub_Content';
function defaultLayout() {
    return (
        <div className='flex'>
            <div className='w-full h-screen'>
                <Header />
                <div>
                    <SubContent />
                </div>
            </div>
        </div>
    );
}
export default defaultLayout;
