import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className="w-50 mx-auto pt-5">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="text-center my-5">
            <Link to="/home"> <button className="notFound-button" type="submit">
                Back to Home
            </button></Link>
            </div>
           
        </div>

    );
};

export default NotFound;