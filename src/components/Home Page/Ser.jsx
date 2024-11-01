import React from 'react';

const Services = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800 mx-20 mt-10">
            <div className="container mx-auto">
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-600">How it works</span>
                <h2 className="text-5xl font-bold text-center dark:text-gray-900 mt-5">Building with <span className='headingBG text-white px-3 rounded-md'>Mamba is simple</span></h2>
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50 bg-black text-white">1</div>
                        <p className="text-2xl font-semibold">
                            <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50 bg-black text-white">2</div>
                        <p className="text-2xl font-semibold">
                            <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50 bg-black text-white">3</div>
                        <p className="text-2xl font-semibold">
                            <b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Services;