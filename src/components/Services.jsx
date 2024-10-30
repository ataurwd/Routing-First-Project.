import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const userData = useLoaderData()
    const mainData = userData.data
    return (
        <div className=" px-16 my-16">
        <div className="space-y-4 mb-10">
			<h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
			<p className="max-w-2xl dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		</div>
            <section className='grid grid-cols-4 gap-8'>
                {
                    mainData.map(service => (
                        <div key={service.id} className='bgGradientPriceing p-5 rounded-xl space-y-3'>
                            <img src={service.avatar} alt="" className='rounded-full h-32 w-32 overflow-hidden'/>
                            <h2 className='text-3xl font-semibold'>{service.first_name}</h2>
                            <p className='text-xl'>{service.email}</p>
                        </div>
                    ))
                }
            </section>
        </div>

    );
};

export default Services;