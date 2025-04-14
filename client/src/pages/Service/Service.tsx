import React from "react";
import ServiceCard from "./components/ServiceCard";
import ServiceCard2 from "./components/ServiceCard2";
import Heading from "@/components/Heading";
import PageTitle from "@/components/PageTitle";
import Hero from "./components/Hero";


const services = [
  {
    title: "Social Media Management",
    description:
"Social media management is a critical aspect of any digital marketing strategy. It involves creating and sharing engaging content, building and growing your online community, and monitoring your brand's reputation .marketingexl help you achieve all of these goals and more.",
    gifSrc: "/gifs/smm.gif",       // Path to animated GIF
    staticSrc: "/gifs/smm.png",    // First frame as static image
  },
  {
    title: "SEO & SEM",
    description:
"SEO improves organic visibility through keywords and content, while SEM uses paid ads to drive targeted traffic to websites.",
    gifSrc: "/gifs/seo.gif",
    staticSrc: "/gifs/seo.png",
  },
  {
    title: "EMAIL & WHATSAPP MARKETING",
    description:
    "Email and WhatsApp marketing deliver personalized messages directly to users, boosting engagement, nurturing leads, and driving conversions efficiently.",
    gifSrc: "/gifs/email.gif",       // Path to animated GIF
    staticSrc: "/gifs/email.png",    // First frame as static image
  },
  {
    title: "UI/UX",
    description:
"UI/UX focuses on designing intuitive, user-friendly interfaces that enhance user satisfaction, improve usability, and create seamless digital experiences.",
    gifSrc: "/gifs/uiux.gif",
    staticSrc: "/gifs/uiux.png",
  },
];

const services2 = [
    {
      title: "PR & Online Reputation Management",
      description:
"PR and Online Reputation Management build trust by managing brand image, handling public perception, and responding to feedback across digital platforms.",
      gifSrc: "/gifs/SM.gif",       // Path to animated GIF
      staticSrc: "/gifs/SM.png",    // First frame as static image
    },
    {
      title: "Brand guidelines",
      description:
"Brand guidelines define visual and messaging standards, ensuring consistency across all platforms to maintain a strong, recognizable brand identity.",
      gifSrc: "/gifs/BRAND.gif",
      staticSrc: "/gifs/BRAND.png",
    },
    {
      title: "Logo Design",
      description:
"Logo design creates a unique visual identity that represents a brand’s values, enhances recognition, and leaves a lasting impression.",
      gifSrc: "/gifs/LOGO.gif",       // Path to animated GIF
      staticSrc: "/gifs/LOGO.png",    // First frame as static image
    },
    {
      title: "Motion design & Video Editing",
      description:
"Logo design creates a unique visual identity that represents a brand’s values, enhances recognition, and leaves a lasting impression.",
      gifSrc: "/gifs/MD.gif",
      staticSrc: "/gifs/MD.png",
    },
  ];

const services3 = [
    {
        index: 0,
      title: "Conversion Rate Optimisation",
      description:
"Conversion Rate Optimization enhances website performance by analyzing user behavior and testing elements to increase leads, sales, and overall engagement.",
      gifSrc: "/gifs/CRO.gif",       // Path to animated GIF
      staticSrc: "/gifs/CRO.png",    // First frame as static image
    },
    {
        index: 1,
      title: "E Commerce Development",
      description:
"E-commerce development builds online stores with secure payment systems, user-friendly design, and features that enhance shopping experiences and drive sales.",
      gifSrc: "/gifs/ECOM.gif",
      staticSrc: "/gifs/ECOM.png",
    },
    {
        index: 2,
      title: "Influencer Marketing",
      description:
"Influencer marketing leverages trusted content creators to promote brands, build credibility, reach target audiences, and drive engagement or sales.",
      gifSrc: "/gifs/IM.gif",       // Path to animated GIF
      staticSrc: "/gifs/IM.png",    // First frame as static image
    },
    {
        index: 3,
      title: "Content Marketing",
      description:
"Content marketing is a type of marketing that involves creating and sharing valuable content to attract and retain a clearly defined audience. The goal of content marketing is to create brand awareness and generate leads and sales.",
      gifSrc: "/gifs/ODM.gif",
      staticSrc: "/gifs/ODM.png",
    },
  ];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Heading title="Services"/>
        <PageTitle title="Services - MarketingExl" />
        <Hero />
    <section className="bg-black py-12 px-4 md:px-16">
        
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        {services3.map((service, index) => (
          <ServiceCard2 key={index} {...service} />
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        {services2.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Services;
