import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../../../../../public/categories.json";
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import moment from "moment/moment";
const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="space-y-5">
        <h3 className="text-2xl">All Category {categories.length}</h3>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="block ml-4 text-lg"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      {/* 2nd part */}
      <div className="space-y-2 mb-2">
          <h4 className="text-center text-2xl">All News</h4>
        <div className="card w-15 bg-base-100 shadow-sm ">
          <figure>
            <img
              src={img1}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arts!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-start">
              <div className="badge ">Sports</div>
              <small className=" flex items-center  ">
              <small className="mr-2"><FaCalendar/></small>
                
                {moment().format("d, MMM  YYYY")}
                
                </small>
              
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1 mb-2">
          
        <div className="card w-15 bg-base-100 shadow-lg">
          <figure>
            <img
              src={img2}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arts!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-start">
              <div className="badge ">Sports</div>
              <small className=" flex items-center  ">
              <small className="mr-2"><FaCalendar/></small>
                
                {moment().format("d, MMM  YYYY")}
                
                </small>
              
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1">
          
        <div className="card w-15 bg-base-100 shadow-sm">
          <figure>
            <img
              src={img3}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arts!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-start">
              <div className="badge ">Sports</div>
              <small className=" flex items-center  ">
              <small className="mr-2"><FaCalendar/></small>
                
                {moment().format("d, MMM  YYYY")}
                
                </small>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
