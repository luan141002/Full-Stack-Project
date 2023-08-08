import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/defaultLayout';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* set up Layout cho các route Default  */}
                    <Route path='/' element={<Layout />} />
                    {/* Những cái children trong Layout tùy theo path mà sẽ hiện lên ở phần main  */}
                    {/* {/* <Route index element={<Main />} /> */}
                    {/* <Route path='/management' element={< />} /> */}
                    {/* </Route> */}
                    {/* Những Layout riêng */}
                    {/* <Route path='/login' element={<Login />} />
                    <Route path='/Authen' element={<Authen />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Router;
