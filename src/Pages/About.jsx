import { FaQuoteLeft } from 'react-icons/fa';
import aboutImage from '../assets/about.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="w-full h-auto p-6 md:p-12">
            <div className="container mx-auto">
                {/* About Us Section */}
                <h1 className="font-bold text-3xl md:text-4xl text-center mb-8">About Us</h1>
                <div className="flex flex-col md:flex-row items-center mb-12">
                    {/* Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src={aboutImage} alt="About Us" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 md:pl-12">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center md:text-left">
                            Mahesh Patangwala And General Stores ll Wholesale Perfume, Deodorants & Ear Piercing Services
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
                            Welcome to Mahesh Patangwala And General Stores! We are your trusted source for wholesale perfumes, deodorants, and professional ear piercing services. Our extensive range of high-quality fragrances caters to all preferences, ensuring satisfaction for both personal use and retail businesses.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left mt-4">
                            Established in [Year], we pride ourselves on offering premium products at competitive prices. Whether you're looking for the latest scents or safe and hygienic ear piercing, we are here to serve you with a commitment to excellence.
                        </p>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        At Mahesh Patangwala And General Stores, our mission is to provide top-notch fragrances and services that enhance the quality of life for our customers. We aim to be your go-to supplier for all your perfume, deodorant, and ear piercing needs, while delivering exceptional customer service.
                    </p>
                </div>

                {/* Testimonials Section */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">What Our Customers Say</h2>
                    <div className="flex flex-col md:flex-row items-center justify-around">
                        {/* Testimonial 1 */}
                        <div className="md:w-1/3 mb-8 md:mb-0 text-center">
                            <FaQuoteLeft className="text-gray-400 text-3xl mx-auto mb-4" />
                            <p className="text-base md:text-lg text-gray-700 italic">"The variety of perfumes and deodorants here is unmatched. Excellent quality and fantastic prices!"</p>
                            <p className="text-gray-800 font-semibold mt-4">- Anjali Desai</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="md:w-1/3 mb-8 md:mb-0 text-center">
                            <FaQuoteLeft className="text-gray-400 text-3xl mx-auto mb-4" />
                            <p className="text-base md:text-lg text-gray-700 italic">"I got my ears pierced here, and the service was very professional and hygienic. Highly recommended!"</p>
                            <p className="text-gray-800 font-semibold mt-4">- Rahul Mehta</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="md:w-1/3 text-center">
                            <FaQuoteLeft className="text-gray-400 text-3xl mx-auto mb-4" />
                            <p className="text-base md:text-lg text-gray-700 italic">"A one-stop-shop for all my fragrance needs. Great customer service and quick delivery!"</p>
                            <p className="text-gray-800 font-semibold mt-4">- Priya Shah</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Discover Our Products Today!</h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                        Explore our collection of perfumes and deodorants or visit us for a safe and stylish ear piercing experience. Your satisfaction is our priority!
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 md:px-8 rounded-full transition duration-300">
                       <Link to="/">Shop Now</Link> 
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
