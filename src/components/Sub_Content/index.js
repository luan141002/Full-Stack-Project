import React from 'react';
import SubContent_1 from './SubContent1';
import SubContent_2 from './SubContent2';

const SubContent = () => {
    return (
        <div className='flex h-screen'>
            <div className='basis-[50%]'>
                <SubContent_1 />
            </div>
            <div className='basis-[50%]'>
                <SubContent_2 />
            </div>
        </div>
    );
};

export default SubContent;
