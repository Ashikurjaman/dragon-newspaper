import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img className='mx-auto my-4' src={logo} alt="" />
            <p className='text-lg text-center'>Journalism Without Fear or Favor</p>
            <p className='text-sm text-center'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
        </div>
    );
};

export default Header;