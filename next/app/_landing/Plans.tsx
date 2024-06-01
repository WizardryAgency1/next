import React from 'react';
import { SectionPrice } from '../_landing/Section';
import { Button } from '../components/ui/button';

export default function Plans() {
    // Array of plan objects
    const plans = [
        {
            name: 'Standard',
            description: 'Essential features to impress your clients.',
            price: 'Custom pricing for your design needs',
            products: 'Customized Website Design',
            subscribers: 'Integrated Contact Form',
            analytics: 'Includes Unlimited Free SSL',
            supportResponseTime: 'Assistance within 48 hours',
            choose: "Choose your domain for free",
            importantForClient: 'Professional design, Easy-to-use contact form, Secure website, Responsive support',
            additionalServices: [
                'Search engine optimization (SEO) to improve visibility',
                'Social media integration for broader reach',
                'Regular website maintenance for optimal performance',
            ]
        },
        {
            name: 'Business',
            description: 'Scalable plans for growing businesses.',
            price: 'Custom pricing for your business needs',
            products: 'Fully Managed Website Solution',
            subscribers: 'Advanced Contact Form with CRM',
            analytics: 'Includes Unlimited Free SSL and Analytics',
            supportResponseTime: 'Priority Support, 24-hour response',
            choose: "Select your domain at no extra cost",
            importantForClient: 'Scalable design, Advanced contact form with CRM integration, Comprehensive analytics, Priority support',
            additionalServices: [
                'Custom web development for unique features',
                'Integration with third-party tools and services',
                'Training and documentation for website management'
            ]
        },
        // Add more plan objects here if needed
    ];
    
    

    return (
        <SectionPrice className='rounded-4xl mr-auto my-40 border-black w-full shadow-lg h-auto bg-#305348-800 '>
            <div>
                <h3 className='text-center text-1xl md:text-2xl translate-x-2'>Pricing</h3>
                <h4 className='text-white-800 bold text-3xl md:text-5xl text-center align-center max-w3 m-auto mt-10'>Pricing plans for teams of all sizes</h4>
                <p className='text-center mt-5'>Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
            </div>
            <div className='flex-cols-1 md:flex md:py-10 lg:py-20 lg:max-w-4xl m-auto'>
                {/* Rendering plan cards using map function */}
                {plans.map((plan, index) => (
                    <div key={index} className='left flex flex-col justify-between bg-white relative text-[#305348] space-y-1 p-10 leading-10 rounded-lg shadow-2xl my-5 py-7  w-80 m-auto '>
                        <h3 className='bold text-2xl	'>{plan.name}</h3>
                        <span className='space-y-0'>
                            <p className='text-1 font-light'>{plan.description}</p>
                        </span>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>
                            <span className="inline ">{plan.price}</span>
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.subscribers}
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.analytics}
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.choose}
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.supportResponseTime}
                        </p>
                        <Button size="lg" className='w-full mt-5 hover:shadow-lg absolute-b-1  hover:bg-[#305348] hover:text-white'>Buy Plan</Button>
                    </div>

                ))}
            </div>

        </SectionPrice>
    );
}
