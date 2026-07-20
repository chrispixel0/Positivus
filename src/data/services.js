import seo from "../assets/services/seo.png";
import ppc from "../assets/services/ppc.png";
import social from "../assets/services/social.png";
import email from "../assets/services/email.png";
import content from "../assets/services/content.png";
import analytics from "../assets/services/analytics.png";

const services = [
  {
    id: 1,
    title: "Search engine optimization",
    image: seo,
    background: "bg-light",
    text: "bg-primary",
    dark: false,
  },
  {
    id: 2,
    title: "Pay-per-click advertising",
    image: ppc,
    background: "bg-primary",
    text: "bg-white",
    dark: false,
  },
  {
    id: 3,
    title: "Social Media Marketing",
    image: social,
    background: "bg-dark",
    text: "bg-white",
    dark: true,
  },
  {
    id: 4,
    title: "Email Marketing",
    image: email,
    background: "bg-light",
    text: "bg-primary",
    dark: false,
  },
  {
    id: 5,
    title: "Content Creation",
    image: content,
    background: "bg-primary",
    text: "bg-white",
    dark: false,
  },
  {
    id: 6,
    title: "Analytics and Tracking",
    image: analytics,
    background: "bg-dark",
    text: "bg-primary",
    dark: true,
  },
];

export default services;
