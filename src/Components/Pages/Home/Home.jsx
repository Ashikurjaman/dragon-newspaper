import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftNavbar from '../Shared/LeftNavbar/LeftNavbar';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';
import BreakingNews from './BreakingNews/BreakingNews';

const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
                <Navbar/>
                    
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div >
                        <LeftNavbar></LeftNavbar>
                    </div>
                    <div className='col-span-2'>
                        <h3 className="text-4xl">News Comming Soon....</h3>
                    </div>
                    <div>
                        <RightNavbar></RightNavbar>
                    </div>
                    </div>
        </div>
    );
};

export default Home;