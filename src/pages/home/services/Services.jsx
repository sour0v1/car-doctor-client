import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='space-y-3 my-6'>
                <p className='text-orange-600 font-bold text-center'>Service</p>
                <h1 className='text-2xl font-bold text-center'>Our Service Area</h1>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-9 mb-9'>

                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;