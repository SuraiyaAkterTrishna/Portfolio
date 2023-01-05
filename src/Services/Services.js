import React from 'react';
import icon1 from '../../src/Image/icons/ux.png';
import icon2 from '../../src/Image/icons/coding.png';
import icon3 from '../../src/Image/icons/smartphone.png';
// "#fff5ec"

const Services = () => {
    return (
        <div className='p-8' style={{backgroundColor: "#fff5ec"}}>
            <h1 className='text-5xl font-bold text-center pt-4'>My Services</h1>
            <p className='text-center mt-4 pb-12'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-5'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon1} alt="Shoes" className="rounded-xl w-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>1. RESPONSIVE LAYOUT</p>
                        <h2 className="card-title">Responsive layout design meeting clients needs.</h2>
                        <p> design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon2} alt="Shoes" className="rounded-xl w-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>2. DEVELOPMENT</p>
                        <h2 className="card-title">Development gorgeous graphic design meeting clients needs.</h2>
                        <p>design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon3} alt="Shoes" className="rounded-xl w-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>3. APP DESIGN</p>
                        <h2 className="card-title">Application design according to customers needs.</h2>
                        <p>design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;