import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  // console.log(import.meta.env.VITE_a) 
  useEffect(() =>{

    Aos.init();

  },[]



  )
    return (

      <div className='w-11/12 mx-auto'  >
        <div className="carousel w-full">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" /> */}
            
            <div
  className="hero bg-gray-900 min-h-screen"
  style={{
    backgroundImage:  "url(https://i.ibb.o.com/B5GJVjQn/businessman-green-arrow.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold  text-blue-600">Career HUB</h1>
      <p className="mb-5 text-white font-50 font-serif">
      Career Hub is committed to empowering individuals to reach their full potential by offering personalized guidance and resources tailored to their unique career paths. Our mission is to bridge the gap between aspirations and achievements through expert services in career counseling, skill development, resume optimization, and mental well-being support. Whether you're seeking career clarity, professional growth, or a competitive edge in the job market, Career Hub provides the tools and expertise to help you succeed.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>



          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
       
        <div id="slide3" className="carousel-item relative w-full">
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/5XYVLjtC/Career-Growth-vs-Career-Development-The-Key-Differences.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
   
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/cc02dcX4/3966601.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center">
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
   
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
  </div>
</div>
               
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          
     
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>


      <div className=" p-8 "data-aos="fade-right">
      <h2 className="text-3xl font-bold text-center mb-6  ">Our Main Services</h2>
      <p className="text-center text-gray-600 mb-10">
        We offer various services from making you strong not only with your skill but also with your mental health to overcome any obstacle in your corporate world.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Feature 1 */}
        <button><div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{
    backgroundImage: "url(https://i.ibb.co.com/YQLrmnT/Hexagon.png)",
  }} >
          <div className="text-blue-500 mb-4">
            <i className="fas fa-sitemap text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-serif text-yellow-50"><NavLink to="/services">Personal Therapy</NavLink></h3>
          {/* <p className="text-white-600">
            Far far away, behind the word mountains, far from the countries Vokalia.
          </p> */}
        </div></button>

        {/* Feature 2 */}
        <button><div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{
    backgroundImage: "url(https://i.ibb.co.com/YQLrmnT/Hexagon.png)",
  }} >
          <div className="text-blue-500 mb-4">
            <i className="fas fa-sitemap text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-serif text-yellow-50"><NavLink to="/services">Career Counseling</NavLink></h3>
          
        </div></button>
        {/* Feature 3 */}
        <button><div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{
    backgroundImage: "url(https://i.ibb.co.com/YQLrmnT/Hexagon.png)",
  }} >
          <div className="text-blue-500 mb-4">
            <i className="fas fa-sitemap text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-serif text-yellow-50"><NavLink to="/services">CV Review</NavLink></h3>
          
        </div></button>

        {/* Feature 4 */}
        <button><div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{
    backgroundImage: "url(https://i.ibb.co.com/YQLrmnT/Hexagon.png)",
  }} >
          <div className="text-blue-500 mb-4">
            <i className="fas fa-sitemap text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-serif text-yellow-50"><NavLink to="/services">Skill Developement</NavLink></h3>
         
        </div></button>
        
       
      </div>
    </div>
   {/* Success Story */}
<div className='border-b-4 border-t-4 py-9'>
<div className="hero bg-base-100  " >
  <div className="hero-content flex-col lg:flex-row-reverse" data-aos="fade-left">
    <img
      src="https://i.ibb.co.com/0rTVBKv/portrait-3440139-1280.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div >
      <h1 className="text-5xl font-bold w-11/12 mx-auto">Success Story!</h1>
      <p className="py-6 w-11/12 mx-auto">
        Listen from our clients who got benefited from our services and living their lives once which were seemed impossible.
      </p>
      <p className="text-center text-gray-600 italic mb-10">
  "Career Hub helped me find clarity and confidence in my career path. Their personalized guidance and expert advice have truly been a game-changer for my professional growth."  
  <span className="block font-bold mt-2">- Emma Stone</span>
</p>

      
    </div>

    
  </div>
  
</div>

<div className="hero-content flex-col lg:flex-row" data-aos="fade-right">
    <img
      src="https://i.ibb.co.com/BKHLw4F/man-449406-1280.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <p className="text-center text-gray-600 italic mb-10 w-11/12 mx-auto">
  "Thanks to Career Hub, I discovered my true potential and developed the skills needed to thrive in my industry. Their support has been invaluable to my success."  
  <span className="block font-bold mt-2">- Peter Jackson</span>
</p>

      
    </div>
  </div>



</div>

{/* FAQ */}
<div className="my-8" data-aos="fade-zoom-in">
  <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
  
  {/* Question 1 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md mb-4">
    <input type="radio" name="career-hub-faq" defaultChecked />
    <div className="collapse-title text-lg font-medium">
      What services does Career Hub offer?
    </div>
    <div className="collapse-content">
      <p>
        Career Hub provides a range of services, including personal therapy, career counseling, resume review, skill development, and stress management. We aim to empower individuals in their personal and professional journeys.
      </p>
    </div>
  </div>
  
  {/* Question 2 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md mb-4">
    <input type="radio" name="career-hub-faq" />
    <div className="collapse-title text-lg font-medium">
      How do I schedule an appointment?
    </div>
    <div className="collapse-content">
      <p>
        You can schedule an appointment through our website by navigating to the "Services" page and selecting the service and counselor that suits your needs. Alternatively, feel free to contact us directly for assistance.
      </p>
    </div>
  </div>
  
  {/* Question 3 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md mb-4">
    <input type="radio" name="career-hub-faq" />
    <div className="collapse-title text-lg font-medium">
      Are your services available online?
    </div>
    <div className="collapse-content">
      <p>
        Yes, Career Hub offers online sessions for most of our services, ensuring convenience and accessibility for clients regardless of location.
      </p>
    </div>
  </div>
  
  {/* Question 4 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md">
    <input type="radio" name="career-hub-faq" />
    <div className="collapse-title text-lg font-medium">
      How can Career Hub help improve my career prospects?
    </div>
    <div className="collapse-content">
      <p>
        Career Hub provides personalized counseling and skill-building sessions to help you discover your strengths, overcome challenges, and navigate your professional journey with confidence. Our experts tailor solutions to meet your unique goals.
      </p>
    </div>
  </div>
</div>



      </div>
      
    );
};

export default Home;