import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-4xl font-bold text-primary mb-4">About</h1>
      <h2 className="text-3xl font-semibold text-secondary mb-8">Mahesh Patang Wala</h2>
      
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/3">
          <div className="animate-fadeIn">
            <img src="path-to-your-image1.jpg" alt="Description" className="w-56 h-56 object-cover rounded-lg shadow-lg"/>
          </div>
          <div className="animate-fadeIn delay-200">
            <img src="path-to-your-image2.jpg" alt="Description" className="w-56 h-56 object-cover rounded-lg shadow-lg"/>
          </div>
        </div>
        <div className="lg:w-2/3 text-gray-600 space-y-4 max-w-md">
          <p className="transition-opacity duration-700 ease-in-out animate-fadeIn">
            Welcome to Mahesh Patang Wala, where we bring you the best in our field. Our mission is to provide exceptional service and quality products.
          </p>
          <p className="transition-opacity duration-700 ease-in-out animate-fadeIn delay-200">
            With years of experience, we are dedicated to ensuring customer satisfaction and delivering innovative solutions to meet your needs.
          </p>
          <p className="transition-opacity duration-700 ease-in-out animate-fadeIn delay-400">
            Explore our wide range of products including stylish shoes, trendy sneakers, elegant earrings, warm jackets, comfortable t-shirts, and cool goggles.
          </p>
          <p className="transition-opacity duration-700 ease-in-out animate-fadeIn delay-600">
            Whether you're looking for the latest fashion or timeless classics, we have something for everyone. Shop with us and experience the best in quality and service.
          </p>
          <p className="transition-opacity duration-700 ease-in-out animate-fadeIn delay-800">
            Thank you for visiting Mahesh Patang Wala. We are committed to offering top-notch products and exceptional customer support. Feel free to reach out if you have any questions or need assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
