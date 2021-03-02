import React from "react";
import { FaCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";
// import { GiPencilRuler } from "react-icons/go";

export default [
  {
    id: 1,
    icon: <FaPencilRuler className="service-icon" />,
    title: "web design",
    text: `With the help of tools like Adobe Photoshop, Adobe Illustrator and AdobeXD, I create perfect designs for your business. Also giving the opportunity to view the website design, before it is developed and hosted.`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I create and develop websites using technologies such as HTML, CSS and JavaScript. Thus being able to create Institutional Sites, Dynamic, E-commerce and Blogs.`,
  },
  {
    id: 3,
    icon: <FaMobileAlt className="service-icon" />,
    title: "responsive",
    text: `Nowadays, we access the internet on various devices such as mobile phones, computers and tablets. That they have screens of different sizes. So we must ensure that websites are viewed perfectly on all of these devices. Thus guaranteeing due access through any device.`,
  },
];
