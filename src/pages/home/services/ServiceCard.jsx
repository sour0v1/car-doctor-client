import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, img, price,  } = service;
    return (
            <div className="card card-compact w-full bg-base-100 shadow-xl flex flex-col">
                <figure className=''><img src={img} alt="Shoes" /></figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <p className='font-medium text-orange-600'>Price : ${price}</p>
                        <Link to={`checkout/${_id}`}><button className="btn"><FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
    );
};

export default ServiceCard;