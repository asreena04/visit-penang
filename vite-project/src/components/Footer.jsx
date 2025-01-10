import React from "react";
import { NavbarMenu } from '../mockData/Data';

const Footer = () => {
  const teamMembers = [
    {
      name: "Arissa A/P Eh Sing",
      role: "Tourist Spot Planner",
      description: "Responsible for the design and planning of tourist spot categories.",
      img: "", // Add image URL here
    },
    {
      name: "Ashman Bin Mohd FauziS",
      role: "Food & Beverages Planner",
      description: "Responsible for the design and planning of Food & Beverages categories.",
      img: "", // Add image URL here
    },
    {
      name: "Asreena Chulaphong A/P Akhom",
      role: "Shopping Areas & Groceries Planner",
      description: "Responsible for the design and planning of shopping areas and groceries categories.",
      img: "", // Add image URL here
    },
    {
      name: "Punam Kunpichai A/L Samli",
      role: "Accommodation Planner",
      description: "Responsible for the design and planning of accommodation categories.",
      img: "", // Add image URL here
    },
  ];

  return (
    <footer className="bg-red-600 text-white px-8 md:px-16 lg:px-28 py-12 font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-white pb-2">
            The Team Behind Penang Travel
          </h2>
          <section>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-red-600"
                >
                  <img
                    src={member.img || "https://via.placeholder.com/80"}
                    alt={`Picture of ${member.name}`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-red-500">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-white pb-2">
            Quick Links
          </h2>
          <ul className="space-y-12 text-2xl mt-12 ml-2">
          {NavbarMenu.map((item) => (
                <li key={item.id} >
                  <a href={item.link} className="hover:text-gray-200 transition-colors duration-200">
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-white pb-2">
            Contact Us
          </h2>
          <p className="text-2xl mb-12 mt-10 ml-3">
            Email:{" "}
            <a
              href="mailto:Penangtravel@example.com"
              className="text-white underline hover:text-gray-200 transition-colors duration-200"
            >
              info@example.com
            </a>
          </p>
          <p className="text-2xl mb-12 mt-10 ml-3">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-white underline hover:text-gray-200 transition-colors duration-200"
            >
              +123 456 7890
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-200 mt-12 border-t border-gray-100 pt-6">
        <p>&copy; 2025 Penang Travel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
