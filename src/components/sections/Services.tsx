import React from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';


function Services() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Discover the range of AI-driven solutions we offer, designed to
          transform your business and automate workflows.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Chatbot */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              
              <SmartToyIcon className="text-blue-400 text-6xl" />
              
            </div>
            <h3 className="text-2xl font-semibold mb-4">AI Chatbot</h3>
            <p className="text-gray-400">
              Automate conversations and enhance customer engagement with our
              intelligent chatbot solutions.
            </p>
            <a
              href="/services/ai-chatbot"
              className="mt-6 inline-block text-blue-400 border border-blue-400 px-6 py-2 rounded-md hover:bg-blue-400 hover:text-black transition"
            >
              Learn More →
            </a>
          </div>

          {/* Single Thread Agent */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <BrandingWatermarkIcon className="text-purple-400 text-6xl" /> 
            </div>
            <h3 className="text-2xl font-semibold mb-4">Single Thread Agent</h3>
            <p className="text-gray-400">
              A streamlined AI solution focused on executing sequential tasks
              with high efficiency.
            </p>
            <a
              href="/services/single-thread-agent"
              className="mt-6 inline-block text-purple-400 border border-purple-400 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition"
            >
              Learn More →
            </a>
          </div>

          {/* Multi-thread Agent */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <DynamicFeedIcon className="text-green-400 text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Multi-thread Agent</h3>
            <p className="text-gray-400">
              Our AI agent that handles multiple tasks simultaneously, boosting
              productivity and automation.
            </p>
            <a
              href="/services/multi-thread-agent"
              className="mt-6 inline-block text-green-400 border border-green-400 px-6 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
