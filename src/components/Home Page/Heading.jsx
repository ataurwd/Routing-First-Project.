import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Heading = () => {
    return (
        <div>
        <AwesomeSlider className='h-[500px]'>
          <div data-src="https://media.gettyimages.com/id/1478579258/vector/seo-related-line-style-banner-design-for-web-page-headline-brochure-annual-report-and-book.jpg?s=1024x1024&w=gi&k=20&c=QFPBbwP1LHFGwDufUUoQ0v6hD5h83atTgfRUZQ7GWw0=" />
          <div data-src="https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg" />
          <div data-src="https://csladda.com/wp-content/uploads/2019/06/web-design-banner.jpg" />
        </AwesomeSlider>
        
        {/* for fetures section */}
        </div>
    );
};

export default Heading;