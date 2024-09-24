import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const TermsAndConditions = () => {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const sections = [
        {
            title: "1. General Information",
            content: "Mahesh Patangwala And General Stores specializes in the wholesale of perfumes, deodorants, and ear-piercing services. All products listed are subject to availability and may vary based on supply."
        },
        {
            title: "2. Eligibility",
            content: "By using this site or making a purchase, you confirm that you are at least 18 years old or have legal parental/guardian consent, and that you are fully able to enter into legally binding contracts."
        },
        {
            title: "3. Products & Pricing",
            content: "We offer wholesale pricing for bulk purchases of perfumes and deodorants. Prices are subject to change without prior notice. We aim to ensure that all prices listed are accurate, but errors may occur. If we find an error in the price of any goods you have ordered, we will inform you as soon as possible and offer you the option of reconfirming your order at the correct price or cancelling it."
        },
        {
            title: "4. Order & Payment",
            content: "Orders can be placed through our website or directly at our store. We accept various payment methods, including cash, credit cards, and bank transfers. All orders are subject to acceptance and availability. Payment must be received in full before dispatch of any goods."
        },
        {
            title: "5. Shipping & Delivery",
            content: "Orders will be processed within 1-3 business days after payment confirmation. Delivery times may vary based on location and availability. We are not responsible for any delays in shipping caused by external factors such as couriers or customs."
        },
        {
            title: "6. Returns & Refunds",
            content: "Due to the nature of our products, returns are only accepted if the product is damaged or defective upon delivery. To request a return, please contact us within 7 days of receiving your order, providing proof of damage. Refunds will be processed to the original payment method within 14 days of receiving the returned product."
        },
        {
            title: "7. Ear Piercing Service",
            content: "Our ear-piercing service follows all necessary hygiene and safety guidelines. Customers must be of legal age or have parental consent for minors. We are not liable for any adverse reactions or complications post-piercing. Aftercare instructions will be provided and must be followed diligently."
        },
        {
            title: "8. Limitation of Liability",
            content: "Mahesh Patangwala And General Stores shall not be held liable for any indirect, incidental, or consequential damages arising out of the use of our products or services."
        },
        {
            title: "9. Intellectual Property",
            content: "All content, trademarks, and images on our website and marketing materials are the intellectual property of Mahesh Patangwala And General Stores. Unauthorized use is prohibited."
        },
        {
            title: "10. Governing Law",
            content: "These terms and conditions are governed by the laws of [Your Country/Region]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Your Country/Region]."
        },
        {
            title: "11. Changes to Terms & Conditions",
            content: "We reserve the right to update or modify these terms at any time. Any changes will be effective immediately upon posting on our website."
        },
    ];

    return (
        <div className="container mx-auto p-12">
            <h1 className="text-2xl font-bold">Terms & Conditions</h1>
            <p className='mb-4'>
                Welcome to Mahesh Patangwala And General Stores. These terms and conditions outline the rules and regulations for the use of Mahesh Patangwala And General Stores' website and services. By accessing or using our services, you agree to comply with and be bound by the following terms. If you do not agree to these terms, please do not use our services.
            </p>
            {sections.map((section, index) => (
                <div key={index} className="my-2 border rounded-lg border-black">
                    <div className='flex items-center justify-between cursor-pointer px-4 my-4 transition duration-200' onClick={() => handleToggle(index)}>
                        <h2 className="text-xl font-semibold">{section.title}</h2>
                        {open === index ? <FaMinusCircle /> : <FaPlusCircle />}
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        {open === index && (
                            <p className='mb-0 p-4'>{section.content}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TermsAndConditions;
