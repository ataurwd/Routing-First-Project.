import React from 'react';

const AbHeading = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 bgGradientPricing">
            <div className="container mx-auto flex flex-col items-center px-4 py-6 text-center md:py-12 md:px-6 lg:px-10 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Our Journey and Mission</h1>
                    <p className="px-8 mt-8 mb-12 text-lg">
                        Since our inception, we’ve been driven by a simple yet powerful goal: to make a positive impact on our community 
                        and empower our clients through exceptional service. We’re dedicated to innovation, quality, and transparency, 
                        striving to exceed expectations at every step.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 bg-black text-white">Meet Our Team</button>
                        <button className="px-8 py-3 m-2 text-lg border-2 rounded-xl dark:text-gray-900 dark:border-gray-300">Our Story</button>
                    </div>
            </div>
        </section>
    );
};

export default AbHeading;