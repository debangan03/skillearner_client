import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            Skill Earner was founded with the vision of empowering individuals with the skills needed to excel in the modern world. Our platform offers a wide range of courses, designed and taught by industry experts, to help learners achieve their personal and professional goals. Whether you're looking to advance in your career, learn a new hobby, or simply expand your knowledge, Skill Earner is here to help you succeed.
          </p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide high-quality, accessible education to learners around the world. We believe that education is a powerful tool that can transform lives, and we are committed to making learning opportunities available to everyone, regardless of their background or location. At Skill Earner, we are dedicated to fostering a community of lifelong learners and helping individuals unlock their full potential.
          </p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h4 className="text-xl font-semibold">Jane Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h4 className="text-xl font-semibold">John Smith</h4>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img src="https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h4 className="text-xl font-semibold">Emily Johnson</h4>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
            <li>Innovation: We are constantly seeking new ways to provide innovative solutions to meet our learners' needs.</li>
            <li>Commitment: We are dedicated to helping our learners succeed by providing the best learning experience possible.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
