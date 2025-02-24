import { ReactElement } from "react";
import { StaticImageData } from "next/image";
import {
  FaCheck,
  FaArrowUpWideShort,
  FaChartBar,
  FaImage,
  FaLaptopCode,
  FaMobile,
  FaPalette,
  FaChartLine,
  FaEnvelope,
  FaPhone,
  FaWordpress,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";

// Client logos
import Logo1 from "@/assets/logos/logo-1.png";
import Logo2 from "@/assets/logos/logo-2.png";
import Logo3 from "@/assets/logos/logo-3.png";
import Logo4 from "@/assets/logos/logo-4.png";
import Logo5 from "@/assets/logos/logo-5.png";
import Logo6 from "@/assets/logos/logo-6.png";

// Graphics Portfolio
import GraphicsImg1 from "@/assets/portfolio/graphic-design/graphic-1.png";
import GraphicsImg2 from "@/assets/portfolio/graphic-design/graphic-2.png";
import GraphicsImg3 from "@/assets/portfolio/graphic-design/graphic-3.png";
import GraphicsImg4 from "@/assets/portfolio/graphic-design/graphic-4.png";
import GraphicsImg5 from "@/assets/portfolio/graphic-design/graphic-5.png";

// Marketing Portfolio
import Marketing1 from "@/assets/portfolio/marketing/marketing-1.png";
import Marketing2 from "@/assets/portfolio/marketing/marketing-2.png";
import Marketing3 from "@/assets/portfolio/marketing/marketing-3.png";
import Marketing4 from "@/assets/portfolio/marketing/marketing-4.png";

// Web Development Portfolio
import Web1 from "@/assets/portfolio/web/web1.png";
import Web2 from "@/assets/portfolio/web/web2.png";
import Web3 from "@/assets/portfolio/web/web3.png";
import Web4 from "@/assets/portfolio/web/web4.png";
import Web5 from "@/assets/portfolio/web/web5.png";

// UI Portfolio
import UI1 from "@/assets/portfolio/ui-design/ui-1.png";
import UI2 from "@/assets/portfolio/ui-design/ui-2.png";
import UI3 from "@/assets/portfolio/ui-design/ui-3.png";
import UI4 from "@/assets/portfolio/ui-design/ui-4.png";
import UI5 from "@/assets/portfolio/ui-design/ui-5.png";
import UI6 from "@/assets/portfolio/ui-design/ui-6.png";
import UI7 from "@/assets/portfolio/ui-design/ui-7.png";

// Wordpress Portfolio
import WordpressImg1 from "@/assets/portfolio/wordpress/wordpress-1.png";
import WordpressImg2 from "@/assets/portfolio/wordpress/wordpress-2.png";
import WordpressImg3 from "@/assets/portfolio/wordpress/wordpress-3.png";
import WordpressImg4 from "@/assets/portfolio/wordpress/wordpress-4.png";
import WordpressImg5 from "@/assets/portfolio/wordpress/wordpress-5.png";
import WordpressImg6 from "@/assets/portfolio/wordpress/wordpress-6.png";

// Interfaces
type Navlinks = {
  name: string;
  path: string;
};

export type PricingPlan = {
  title: string;
  description: string;
  features: string[];
  price: number;
};

export type Service = {
  id: number;
  icon: ReactElement;
  name: string;
  shortDesc: string;
  description: string;
  pricing: PricingPlan[];
  portfolio?: StaticImageData[];
};

type Testimonial = {
  name: string;
  location: string;
  text: string;
};

type WhyUs = {
  icon: ReactElement;
  title: string;
  description: string;
};

type ContactInfo = {
  icon: ReactElement;
  title: string;
  description: string;
};

// Data
export const navLinks: readonly Navlinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
];

export const AboutData: readonly WhyUs[] = [
  {
    icon: <FaCheck />,
    title: "Smart digital solutions, seamless success.",
    description: "",
  },
  {
    icon: <FaCheck />,
    title: "Timely, efficient, and seamless delivery.",
    description: "",
  },
  {
    icon: <FaCheck />,
    title: "Innovative approach, exceptional results.",
    description: "",
  },
];

export const ClientData: readonly StaticImageData[] = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
];

export const TestimonialData: readonly Testimonial[] = [
  {
    name: "John Doe",
    location: "CEO, Company XYZ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
  {
    name: "Jane Smith",
    location: "Product Manager, Company ABC",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
];

export const WhyUsData: readonly WhyUs[] = [
  {
    icon: <PiCertificateBold />,
    title: "Certified Professionals & Experts",
    description:
      "Our certified experts deliver quality solutions with proven skills and experience.",
  },
  {
    icon: <FaChartLine />,
    title: "We are fast, Accurate & Reliable",
    description:
      "We are fast, accurate, reliable, and committed to delivering exceptional results.",
  },
  {
    icon: <TbDeviceLandlinePhone />,
    title: "24/7 Customer Support",
    description:
      "Providing 24/7 customer support with fast, accurate, and reliable service.",
  },
];

export const AboutPageData = {
  ourVision: {
    title: "Our Vision",
    description:
      "This is our vision of the Internet and the Internet is available to everyone and everyone in the world and is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world",
  },
  ourMission: {
    title: "Our Mission",
    description:
      "The mission of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the",
  },
};

export const ContactPageData: readonly ContactInfo[] = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    description: "devsphereoffical@gmail.com",
  },
  {
    icon: <FaPhone />,
    title: "Call Us",
    description: "+92346-7890654",
  },
  {
    icon: <RiWhatsappFill />,
    title: "WhatsApp Us",
    description: "+92346-7890654",
  },
];

// Reusable pricing plans
const pricingPlans: PricingPlan[] = [
  {
    title: "Start Up",
    description: "Check out our starup plan",
    features: Array(5).fill("1 Post per week"),
    price: 2000,
  },
  {
    title: "Premium",
    description: "Check out our premium plan",
    features: Array(5).fill("1 Post per week"),
    price: 2000,
  },
  {
    title: "Basic",
    description: "Check out our basic plan",
    features: Array(5).fill("1 Post per week"),
    price: 2000,
  },
];

export const ServicesData: readonly Service[] = [
  {
    id: 1,
    icon: <FaPalette />,
    name: "Graphic Designing",
    shortDesc:
      "Looking for stunning designs? Our graphic design services create eye-catching visuals that make your brand stand out. Creative, and effective designs for all your needs.",
    description:
      "Your brands visual identity plays a crucial role in how your audience perceives your business. At DevSphere, our graphic design team is passionate about creating stunning visuals that not only capture attention but also communicate your brands story and message effectively. We believe that great design has the power to leave a lasting impression, and we work tirelessly to ensure that your designs are both creative and functional. Our graphic design services cover a wide range of needs, including logo design, branding materials, brochures, posters, digital banners, social media graphics, and more. Each design is carefully crafted with your brand's identity and marketing objectives in mind, ensuring that your visuals resonate with your audience and elevate your brand presence. Whether you are looking to create a new brand identity or refresh your existing one, we help you craft designs that are memorable and impactful, driving engagement and enhancing your brands recognition.",
    pricing: pricingPlans,
    portfolio: [
      GraphicsImg1,
      GraphicsImg2,
      GraphicsImg3,
      GraphicsImg4,
      GraphicsImg5,
    ],
  },
  {
    id: 2,
    icon: <FaImage />,
    name: "UI/UX Desgining",
    shortDesc:
      "Transform your user experience with our UX/UI design services. We create intuitive, user-friendly interfaces that make your website or app easy to navigate and visually appealing.",
    description:
      "A well-designed user interface (UI) and a seamless user experience (UX) are vital to ensuring that your users have a positive interaction with your digital products. At DevSphere, we specialize in designing intuitive and user-friendly interfaces that not only look great but also make your product easy to navigate and use. Our UI/UX design process revolves around understanding your users' needs, behaviors, and pain points, which allows us to create solutions that meet their expectations and improve their overall experience. Our team focuses on creating designs that are both functional and aesthetically pleasing, optimizing each element to drive engagement and satisfaction. From wireframing and prototyping to interactive design and user testing, we take a comprehensive approach to ensure that every touchpoint of the user journey is considered and refined. With our UI/UX design services, we help you create digital products that users love to interact with, improving conversion rates and fostering long-term customer loyalty.",
    pricing: pricingPlans,
    portfolio: [UI1, UI2, UI3, UI4, UI5, UI6, UI7],
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    name: "Web Development",
    shortDesc:
      "Turn your ideas into reality with our expert app development. We build intuitive, scalable, and high-performance mobile apps tailored to your business needs.",
    description:
      "At DevSphere, we understand the importance of having a strong online presence, and we specialize in creating dynamic, responsive websites that are built to engage visitors and convert them into loyal customers. Whether you are looking to develop an entirely new website or refresh your current one, our team of experienced web developers ensures your site is visually appealing, easy to navigate, and performs at its best. We design and develop custom websites that are tailored to meet your specific business goals, ensuring they stand out in a crowded digital space. Our web development process is user-centric, focusing on providing a seamless and enjoyable browsing experience across all devices. We utilize the latest web technologies and development frameworks to ensure that your site is fast, secure, and scalable, offering you a platform that can grow as your business evolves. From e-commerce platforms to corporate websites and blogs, we build solutions that not only reflect your brand identity but also provide a smooth user experience. Additionally, our development team works closely with you throughout the project to make sure your vision is brought to life, keeping you updated with progress and ensuring every feature aligns with your objectives.",
    pricing: pricingPlans,
    portfolio: [Web1, Web2, Web3, Web4, Web5],
  },
  {
    id: 4,
    icon: <FaMobile />,
    name: "App Development",
    shortDesc:
      "Bring your ideas to life with our expert app development. We build intuitive, scalable, and high-performance mobile apps tailored to your business needs.",
    description:
      "In todays mobile-first world, an effective mobile application is key to staying competitive and keeping customers engaged. At DevSphere, we offer comprehensive mobile app development services for both Android and iOS platforms, creating apps that provide smooth, intuitive user experiences while achieving your business goals. Our app development team takes the time to understand your business objectives, target audience, and specific needs to design and build mobile applications that fit seamlessly into your overall digital strategy. We provide end-to-end app development services, covering everything from initial concept and design to development, testing, and deployment. Our apps are built to offer high performance, reliability, and scalability, with features that enhance user engagement and improve business processes. Whether you are looking to develop a mobile app for e-commerce, social networking, entertainment, or productivity, we have the expertise to create customized solutions that cater to your target audience and drive results.",
    pricing: pricingPlans,
  },
  {
    id: 5,
    icon: <FaChartBar />,
    name: "Digital Marketing",
    shortDesc:
      "Boost your online presence with our digital marketing services. From social media to SEO, we help you reach your audience, grow your brand, and drive results.",
    description:
      "In the fast-paced digital world, a strong online presence is essential for business growth. At DevSphere, our digital marketing services are designed to help you reach your target audience, increase brand awareness, and drive conversions. We use data-driven strategies and cutting-edge marketing tools to create comprehensive campaigns that deliver measurable results. We offer a full suite of digital marketing services, including search engine marketing (SEM), social media marketing, content marketing, email marketing, influencer marketing, and more. Our team of experts works closely with you to develop a personalized marketing strategy that aligns with your business objectives and ensures you are reaching the right audience with the right message. By combining creative content, strategic targeting, and advanced analytics, we optimize every campaign to achieve the best possible outcomes for your brand. Whether you are looking to increase website traffic, improve engagement on social media, or boost sales through targeted ad campaigns, our digital marketing services help you stay ahead of the competition and achieve long-term success.",
    pricing: pricingPlans,
    portfolio: [Marketing1, Marketing2, Marketing3, Marketing4],
  },
  {
    id: 6,
    icon: <FaArrowUpWideShort />,
    name: "SEO",
    shortDesc:
      "Enhance your website ranking with expert SEO services. We optimize keywords, build links, and refine on-page strategies to drive traffic and increase visibility.",
    description:
      "A strong SEO strategy is the foundation of any successful online business. At DevSphere, we help you improve your websites visibility on search engines like Google, ensuring that your target audience can easily find you when they search for relevant products or services. Our SEO services are designed to increase organic traffic, improve your websites ranking, and enhance your overall online presence. Our team starts with a comprehensive SEO audit to identify any issues that may be hindering your websites performance. We then conduct keyword research to determine the best opportunities for your business and optimize your websites content, structure, and technical aspects to align with search engine algorithms. Additionally, we focus on building high-quality backlinks and improving your websites domain authority to boost your rankings. Whether you are a local business looking to rank for specific geographic searches or an e-commerce website aiming to reach a global audience, our SEO strategies are tailored to meet your needs. With DevSpheres SEO services, you can expect higher visibility, increased traffic, and more conversions, all of which contribute to your long-term success.",
    pricing: pricingPlans,
    portfolio: [Marketing1, Marketing2, Marketing3, Marketing4],
  },
  {
    id: 7,
    icon: <MdVideoLibrary />,
    name: "Video Editing",
    shortDesc:
      "Enhance your website ranking with expert SEO services. We optimize keywords, build links, and refine on-page strategies to drive traffic and increase visibility.",
    description:
      "Video content is one of the most engaging and effective ways to connect with your audience. At DevSphere, we provide professional video editing services to help you create polished, high-quality videos that communicate your brand message and engage viewers. Whether you need promotional videos, explainer videos, tutorials, or social media content, our video editing team ensures that your videos are crafted to perfection. We handle all aspects of video editing, from cutting and arranging footage to adding special effects, transitions, and sound design. Our goal is to create visually appealing, compelling content that resonates with your audience and drives results. We use advanced editing software and techniques to ensure that each video meets the highest standards of quality, ensuring your brand stands out in a crowded digital space. Our video editing services are customized to fit your brands tone and messaging, helping you tell a captivating story that inspires action from your audience. Whether you are looking to increase brand awareness, generate leads, or simply entertain your followers, our video editing expertise ensures your content is professional, engaging, and impactful.",
    pricing: pricingPlans,
  },
  {
    id: 8,
    icon: <FaWordpress />,
    name: "Wordpress",
    shortDesc:
      "We design, optimize, and maintain custom WordPress websites with SEO, security, WooCommerce, and performance enhancements, ensuring a high-performing, visually appealing, and user-friendly experience.",
    description:
      "WordPress is one of the most powerful and versatile platforms for building websites. At DevSphere, we provide professional WordPress services to help you create a fully customized, high-performing website that aligns with your brand and business goals. Whether you need a corporate website, blog, e-commerce store, or portfolio, our team ensures your site is visually appealing, responsive, and optimized for success. We handle all aspects of WordPress development, from custom theme design and plugin integration to performance optimization and security enhancements. Our goal is to deliver a seamless, user-friendly experience that engages visitors and drives results. We use the latest WordPress technologies and best practices to ensure your website is secure, fast, and scalable, helping your brand stand out in a competitive digital landscape. Our WordPress services are tailored to fit your specific needs, allowing you to create a powerful online presence that reflects your brand identity and vision. Whether you want to improve SEO, enhance functionality, or maintain a smooth-running website, our expertise ensures your WordPress site remains efficient, professional, and impactful.",
    pricing: pricingPlans,
    portfolio: [
      WordpressImg1,
      WordpressImg2,
      WordpressImg3,
      WordpressImg4,
      WordpressImg5,
      WordpressImg6,
    ],
  },
];

// Social Data
export const SocialData = [
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/DevSphere-116816443988852/",
  },
  {
    icon: <RiInstagramFill />,
    url: "https://www.facebook.com/DevSphere-116816443988852/",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.facebook.com/DevSphere-116816443988852/",
  },
  {
    icon: <RiLinkedinFill />,
    url: "https://www.facebook.com/DevSphere-116816443988852/",
  },
];
