
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-display'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;