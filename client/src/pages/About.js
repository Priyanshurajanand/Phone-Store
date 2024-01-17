import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
    <div className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img src="/images/about.jpeg" alt="contactus" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </div>
  </Layout>
  
  );
};

export default About;
