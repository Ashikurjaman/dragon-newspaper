import { useParams } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Navbar from "../../../Shared/Navbar/Navbar";
import RightNavbar from "../../../Shared/RightNavbar/RightNavbar";


const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid grid-cols-4">
               <div className="col-span-3">
                  <p>{id}</p>
               </div>
               <div>
                     <RightNavbar></RightNavbar> 
               </div>
            </div>
        </div>
    );
};

export default News;