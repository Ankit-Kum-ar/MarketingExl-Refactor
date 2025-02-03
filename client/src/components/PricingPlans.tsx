import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PricingPlans: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-6 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-orange-500 mb-10">
        CHOOSE YOUR PLAN TODAY!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Standard Plan */}
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 space-y-6">
          <h3 className="text-2xl font-bold">Standard Plan</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Advanced keyword research
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              On-page and off-page SEO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Google Ads management
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Content creation and scheduling
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Targeted WhatsApp marketing
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Basic Website Design
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              UI/UX Revamps
            </li>
          </ul>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-600 transition duration-300">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-orange-500 text-white rounded-2xl shadow-lg p-6 space-y-6 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-1 px-4 rounded-full text-sm font-bold">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold">Premium Plan</h3>
          <ul className="space-y-2">
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Advanced keyword research
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              On-page and off-page SEO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Google Ads management
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Content creation and scheduling
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Targeted WhatsApp marketing
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Basic Website Design
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              UI/UX Revamps
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Conversion Rate Optimization
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Product Listing on all major marketplaces
            </li>
          </ul>
          <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-xl hover:bg-gray-200 transition duration-300">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 space-y-6">
          <h3 className="text-2xl font-bold">Enterprise Plan</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Advanced keyword research
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              On-page and off-page SEO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Google Ads management
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Content creation and scheduling
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Targeted WhatsApp marketing
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Custom Website Development
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Continuous CRO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Extensive Product Listings
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Marketplace Management
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              Sales Optimization
            </li>
          </ul>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-600 transition duration-300">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
