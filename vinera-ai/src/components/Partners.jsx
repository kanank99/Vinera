import React from 'react';
import openai from '../assets/images/openai-logo.png';
import botpress from '../assets/images/botpress-logo.png';
import zapier from '../assets/images/zapier-logo.png';
import make from '../assets/images/make-logo.png';
import aws from '../assets/images/aws-logo.png';
import stripe from '../assets/images/stripe-logo.png';

function Partners() {
  const partners = [
    {
      id: 1,
      name: 'OpenAI',
      logo: openai,
    },
    {
      id: 2,
      name: 'Botpress',
      logo: botpress,
    },
    {
      id: 3,
      name: 'Zapier',
      logo: zapier,
    },
    {
      id: 4,
      name: 'Make',
      logo: make,
    },
    {
      id: 5,
      name: 'AWS',
      logo: aws,
    },
    {
      id: 6,
      name: 'Stripe',
      logo: stripe,
    },
  ];

  return (
    <div className='bg-[#313435] pt-16 pb-16 rounded-t-[4em]'>
      <h1 className="text-2xl font-bold mb-4">OUR PARTNERS</h1>
      <div className="flex flex-wrap justify-around items-center">
        {partners.map((partner) => (
          <div key={partner.id} className="flex flex-col items-center m-2">
            <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;