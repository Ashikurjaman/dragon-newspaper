import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftNavbar from '../Shared/LeftNavbar/LeftNavbar';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';
import BreakingNews from './BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart/NewsCart';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header/>
            <BreakingNews/>
                <Navbar/>
                    
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div >
                        <LeftNavbar></LeftNavbar>
                    </div>
                    <div className='md:col-span-2'>
                    {
                            news.map((aNews)=><NewsCart 
                            key={aNews._id} 
                            news={aNews} 
                            >

                                </NewsCart>
                            )
                        }
                    </div>
                    <div>
                        <RightNavbar></RightNavbar>
                    </div>
                    </div>
        </div>
    );
};

export default Home;