import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


function Contact() {
    return (
        <div className='relative h-full container mx-auto p-12  w-full'>
            <h1 className='font-bold text-4xl text-center mb-8'>Contact Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <form className='w-full p-4 space-y-6 bg-gray-100 rounded-lg shadow-md'>
                    <div>
                        <label htmlFor="username" className='block text-left font-medium mb-2'>Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder='Enter Username'
                            className='w-full p-3 border rounded-lg focus:outline-none'
                            aria-label="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-left font-medium mb-2'>Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder='Enter Email'
                            className='w-full p-3 border rounded-lg focus:outline-none'
                            aria-label="Enter your Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-left font-medium mb-2'>Number</label>
                        <input
                            id="number"
                            type="text"
                            placeholder='Enter Number'
                            className='w-full p-3 border rounded-lg focus:outline-none'
                            aria-label="Enter your Number"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-left font-medium mb-2'>Message</label>
                        <textarea
                            id="message"
                            className='w-full p-3 border rounded-lg focus:outline-none'
                            placeholder='Enter Message'
                            rows={3}
                        />
                    </div>
                    <button
                        type="submit"
                        className='w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800'>
                        Send
                    </button>
                </form>
                <div className=' bg-gray-50 rounded-lg shadow-md p-4 overflow-hidden'>
                    <div className='flex items-center gap-8 py-2'>
                        <div className='relative bg-black text-white rounded-full p-2'>
                            <FaMapMarkerAlt className='text-xl'/>
                        </div>
                        <div className='text-left'>
                            <p className='font-bold text-xl'>Location:</p>
                            <sub className='text-md'>PH-18, Indira Colony, Jaripatka, Nagpur, Maharashtra 440014</sub>
                        </div>
                    </div>
                    <div className='flex items-center gap-8 py-2'>
                        <div className='relative bg-black text-white rounded-full p-2'>
                            <FaPhoneAlt className='text-xl' />
                        </div>
                        <div className='text-left'>
                            <p className='font-bold'>Phone:</p>
                            <sub> 073500 05315</sub>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119049.1555759553!2d79.00857683896578!3d21.180790237028546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd4c13ccc72dcab%3A0x83400de59cf114fd!2sPH-18%2C%20Indira%20Colony%2C%20Jaripatka%2C%20Nagpur%2C%20Maharashtra%20440014!3m2!1d21.180905499999998!2d79.09102949999999!5e0!3m2!1sen!2sin!4v1727070788158!5m2!1sen!2sin"
                        // width="600"
                        // height="350"
                        style={{ border: '1px solid black' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className= "w-full h-[350px]">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
