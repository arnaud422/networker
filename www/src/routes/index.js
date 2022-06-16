import React from 'react';
import {Routes, Route} from "react-router-dom"
import Log from '../components/Log/Log';

const index = () => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<Log signin={true} signup={false}/>}/>
                
            </Routes>
        </div>  
    );
};

export default index;