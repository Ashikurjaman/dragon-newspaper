import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import img1 from '../../../assets/qZone1.png'
import img2 from '../../../assets/qZone2.png'
import img3 from '../../../assets/qZone3.png'
const RightNavbar = () => {
  return (
    <div>
      <div className="pl-5 mb-5">
        <h3 className="text-2xl mb-5 font-bold">Login With</h3>
        <div className="mx-auto">
        <button className="btn btn-outline btn-primary mb-3">
            <FaGoogle/>
            Login with Google</button>
        <button className="btn btn-outline btn-primary">
            <FaGithub/>
            Login with Github</button>
        </div>
      </div>
        {/* second part */}
      <div className="pl-5 mb-5">
        <h3 className="text-2xl mb-5 font-bold">Find us on</h3>
        <div className="mx-auto">
        <a className="btn border rounded-t-lg w-full  ">
            <FaFacebook/>
            Facebook</a>
        <a className="btn border w-full ">
            <FaTwitter/>
            Twitter</a>
        <a className="btn border  w-full ">
            <FaInstagram/>
            Instagram</a>
        </div>
      </div>
      {/* 3rd part  */}

      <div className="pl-5 mb-5">
        <h3 className="text-2xl mb-5 font-bold">Q-Zone</h3>
        <div className="mx-auto">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
