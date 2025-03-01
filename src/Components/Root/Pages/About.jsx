// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             <h2>About Us</h2>
//         </div>
//     );
// };

// export default About;
import React from "react";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="bg-base-200 py-16">
      <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 mr-8 lg:mb-0">
           
           
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4">Empowering Careers, Empowering Your Growth</h3>
            <p className="text-gray-600 mb-6">
              At <span className="font-bold">Career solutions Tips</span>, Our mission is to bridge the gap between aspirations and achievements by offering personalized career counseling, skill development, and mental well-being support.

Backed by a team of seasoned professionals, we empower individuals to uncover their strengths, overcome challenges, and confidently navigate their professional journey. Whether you’re seeking clarity in your career path or striving to enhance your skills, we’re here to support you—every step of the way.


            </p>
            <p className="text-gray-600 mb-6">
            we are dedicated to helping individuals unlock their full potential, overcome obstacles, and navigate the complexities of professional life with confidence. Whether you're looking for clarity in your career path, seeking personal growth, or striving to enhance your skills, we provide tailored guidance and unwavering support. Our mission is to empower you with the tools, insights, and strategies needed to achieve lasting success. Let us be your partner in growth and transformation.
            </p>
            <button
              onClick={() => window.location.href = "/"}
              className="btn  btn-info mt-4"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
