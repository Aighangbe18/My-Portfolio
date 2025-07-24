import React from "react";
import { motion } from "framer-motion";
import {
  Code, // Icon for Web Development
  ShoppingCart, // Icon for E-commerce
  Globe, // Icon for Website Design/Deployment
  Search, // Icon for SEO
  Settings, // Icon for Maintenance
  Lightbulb, // Icon for Consulting/Strategy
  DollarSign,
  CalendarClock,
  ArrowRight,
  Mail, // Contact Icon
  Phone, // Contact Icon
  MapPin, // Location Icon
} from "lucide-react";

// Simulated Tailwind CSS setup and custom styles
// In a real project, these would be in tailwind.config.js and index.css respectively.
// For this example, we'll simulate them within the component's context.
const GlobalStyles = () => (
  <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Space+Grotesk:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    :root {
        --color-primary: #6366f1; /* Indigo 500 */
        --color-secondary: #a78bfa; /* Violet 400 */
        --color-accent: #facc15; /* Amber 400 */
        --color-dark-bg: #0d0d1a; /* Even darker for more contrast */
        --color-card-bg: #1f1f3a; /* Darker card background */
        --color-light-text: #e0e0e0;
        --color-lighter-text: #b0b0b0;
        --color-primary-darker: #4338ca;
        --color-gradient-start: #6366f1; /* Primary */
        --color-gradient-end: #a78bfa; /* Secondary */
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--color-dark-bg);
        color: var(--color-light-text);
    }
    .font-headline {
        font-family: 'Space Grotesk', sans-serif;
    }
    .font-body {
        font-family: 'Inter', sans-serif;
    }

    /* Keyframes for animations */
    @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse-ring {
        0% { transform: scale(0.3); opacity: 0.7; }
        100% { transform: scale(1.5); opacity: 0; }
    }
    @keyframes border-pulse {
        0%, 100% { border-color: rgba(var(--color-primary), 0.5); }
        50% { border-color: rgba(var(--color-accent), 0.8); }
    }
    @keyframes rotate-glow {
        0% { transform: rotate(0deg); opacity: 0.2; }
        50% { opacity: 0.4; }
        100% { transform: rotate(360deg); opacity: 0.2; }
    }
    @keyframes shine-text {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
    @keyframes scale-up-bounce {
        0% { transform: scale(0.8); opacity: 0; }
        50% { transform: scale(1.05); opacity: 1; }
        70% { transform: scale(0.98); }
        100% { transform: scale(1); }
    }

    /* Utility Classes */
    .animate-gradient-shift {
        animation: gradient-shift 8s ease infinite;
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.5s ease-out forwards;
    }
    .animate-pulse-ring-sm {
        position: relative;
    }
    .animate-pulse-ring-sm::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 9999px;
        background-color: currentColor;
        animation: pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        z-index: -1;
    }
    .btn-primary {
        @apply inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-lg
               bg-gradient-to-r from-primary to-secondary text-white shadow-lg
               transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl
               focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50
               relative overflow-hidden; /* For internal shine effect */
    }
    .btn-primary::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.15);
        transform: skewX(-20deg);
        transition: left 0.5s ease-out;
    }
    .btn-primary:hover::after {
        left: 100%;
    }

    .card-border-animated {
        border: 2px solid transparent; /* Start with transparent border */
        background-image: linear-gradient(var(--color-card-bg), var(--color-card-bg)), linear-gradient(to right, var(--color-primary), var(--color-secondary));
        background-origin: border-box;
        background-clip: padding-box, border-box;
        transition: all 0.4s ease-in-out;
    }
    .card-border-animated:hover {
        background-image: linear-gradient(var(--color-card-bg), var(--color-card-bg)), linear-gradient(to right, var(--color-accent), var(--color-primary));
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
        transform: translateY(-5px);
    }
    .shine-text {
        background: linear-gradient(90deg, var(--color-light-text) 0%, var(--color-accent) 25%, var(--color-light-text) 50%, var(--color-accent) 75%, var(--color-light-text) 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine-text 3s linear infinite;
    }
    `}
  </style>
);

const services = [
  {
    id: 1,
    name: "Custom Website Design & Development",
    description:
      "Full-stack development of a unique, responsive website tailored to your brand and business needs, including UI/UX design and front-end/back-end implementation.",
    price: "Starting from $2500",
    duration: "4-8 weeks",
    icon: Globe,
  },
  {
    id: 2,
    name: "E-commerce Solutions",
    description:
      "Build a robust online store with secure payment gateways, comprehensive product management, user accounts, and inventory systems.",
    price: "Starting from $3500",
    duration: "6-10 weeks",
    icon: ShoppingCart,
  },
  {
    id: 3,
    name: "Web Application Development",
    description:
      "Develop custom web applications with complex functionalities, scalable databases, seamless API integrations, and intuitive user interfaces.",
    price: "Contact for Quote",
    duration: "Project-based",
    icon: Code,
  },
  {
    id: 4,
    name: "Website Maintenance & Support",
    description:
      "Ongoing updates, proactive security monitoring, swift bug fixes, and performance optimization to ensure your site runs smoothly and securely 24/7.",
    price: "$75/month",
    duration: "Monthly",
    icon: Settings,
  },
  {
    id: 5,
    name: "Search Engine Optimization (SEO)",
    description:
      "Improve your website's visibility on search engines, drive organic traffic, and achieve higher rankings for relevant keywords through on-page and technical SEO.",
    price: "Starting from $500",
    duration: "Per Campaign",
    icon: Search,
  },
  {
    id: 6,
    name: "Technical Consulting & Strategy",
    description:
      "Expert advice on web strategy, technology stack selection, scalability planning, digital presence optimization, and project roadmap development.",
    price: "$120/hour",
    duration: "Min 1 hour",
    icon: Lightbulb,
  },
];

const RateCard = () => {
  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div id="RateCard" className="min-h-screen bg-darkBg text-lightText font-body relative overflow-hidden">
      <GlobalStyles /> {/* Apply global styles */}

      {/* Dynamic Background Elements */}
      <div>
        {/* Large, rotating primary glow */}
        <div className="absolute w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[rotate-glow_20s_linear_infinite]"
             style={{ top: '10%', left: '5%' }}></div>
        {/* Smaller, pulsating accent glow */}
        <div className="absolute w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-[rotate-glow_15s_reverse_linear_infinite]"
             style={{ bottom: '15%', right: '10%' }}></div>
        {/* Subtle gradient shift overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-cardBg to-darkBg opacity-50 animate-gradient-shift"></div>
      </div>

      <div className="container mx-auto py-20 px-4 pt-32 relative z-10">
        {/* Company/Personal Branding & Contact Information */}
        <motion.div
          className="bg-cardBg p-6 rounded-xl shadow-lg mb-12 text-center border border-primary-darker max-w-4xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent font-headline mb-2 shine-text"> {/* Added shine-text */}
            My Web Development Services & Rates
          </h2>
          
        </motion.div>

        <motion.p
          className="text-center text-lg text-lighterText mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          As a dedicated web developer, I offer a comprehensive suite of services
          designed to bring your digital vision to life and ensure your online
          presence thrives. Below is a breakdown of my offerings and pricing.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-cardBg p-8 rounded-xl shadow-xl card-border-animated
                         flex flex-col justify-between h-full transform hover:z-20" /* Added hover:z-20 for layering effect */
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.7)" }} /* More pronounced hover */
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center mb-4">
                <service.icon size={40} className="text-accent mr-4 flex-shrink-0 animate-[scale-up-bounce_0.8s_ease-out]" /> {/* Icon animation */}
                <h3 className="text-2xl font-bold text-white font-headline leading-tight">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-400 text-base mb-6 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <div className="flex items-center text-xl text-primary font-semibold mb-2">
                  <DollarSign size={24} className="mr-2 opacity-80" />
                  <span>{service.price}</span>
                </div>
                <div className="flex items-center text-lg text-lighterText font-medium">
                  <CalendarClock size={22} className="mr-2 opacity-80" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Structure Details */}
        <motion.section
          className="bg-cardBg p-8 rounded-xl shadow-xl border border-primary-darker mt-16 max-w-4xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-secondary font-headline mb-6 text-center">
            Pricing Structure Details
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lighterText text-lg">
            <li>
              <span className="font-semibold text-primary">Hourly Rate:</span> For
              smaller tasks, consultations, or ongoing support, my standard hourly
              rate is $120/hour.
            </li>
            <li>
              <span className="font-semibold text-primary">Fixed-Price Projects:</span>
              Larger projects like custom website builds or e-commerce solutions
              are typically quoted as fixed-price packages. This ensures clarity
              on the total cost for a defined scope of work.
            </li>
            <li>
              <span className="font-semibold text-primary">Project-Based Quotes:</span>
              For complex web applications or highly customized solutions, I
              provide a detailed project-based quote after a thorough discovery
              phase to accurately assess the scope and requirements.
            </li>
            <li>
              <span className="font-semibold text-primary">Custom Solutions:</span>
              Pricing for unique requirements or advanced features will be
              determined based on complexity, required technologies, and estimated
              development time.
            </li>
          </ul>
        </motion.section>

        {/* Payment Terms */}
        <motion.section
          className="bg-cardBg p-8 rounded-xl shadow-xl border border-primary-darker mt-8 max-w-4xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-secondary font-headline mb-6 text-center">
            Payment Terms
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lighterText text-lg">
            <li>
              <span className="font-semibold text-primary">Upfront Deposit:</span>
              A 50% deposit is required to commence work on all fixed-price and
              project-based engagements.
            </li>
            <li>
              <span className="font-semibold text-primary">Milestone Payments:</span>
              For larger projects, the remaining balance may be broken into
              milestone payments, due upon completion of agreed-upon project
              phases.
            </li>
            <li>
              <span className="font-semibold text-primary">Final Payment:</span> The
              final balance is due upon project completion and client approval,
              prior to final deployment or handover.
            </li>
            <li>
              <span className="font-semibold text-primary">Preferred Methods:</span>
              Bank Transfer, PayPal, or other mutually agreed-upon secure payment
              gateways.
            </li>
            <li>
              <span className="font-semibold text-primary">Discounts:</span>
              Long-term retainers or bundled service packages may be eligible for
              negotiated discounts.
            </li>
          </ul>
        </motion.section>

        {/* Additional Costs */}
        <motion.section
          className="bg-cardBg p-8 rounded-xl shadow-xl border border-primary-darker mt-8 max-w-4xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-secondary font-headline mb-6 text-center">
            Additional Costs
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lighterText text-lg">
            <li>
              <span className="font-semibold text-primary">Third-Party Licenses:</span>
              Costs for premium themes, plugins, stock photography, or specific
              software licenses will be quoted separately and require client
              approval.
            </li>
            <li>
              <span className="font-semibold text-primary">Hosting & Domain:</span>
              Clients are responsible for their own hosting and domain registration
              fees, though I can provide recommendations and setup assistance.
            </li>
            <li>
              <span className="font-semibold text-primary">Rush Fees:</span> Projects
              requiring expedited delivery outside of standard timelines may incur
              an additional rush fee (typically 25-50% of the project cost).
            </li>
            <li>
              <span className="font-semibold text-primary">Travel Expenses:</span>
              On-site meetings or travel outside of Lagos will be billed for
              reasonable travel and accommodation expenses.
            </li>
          </ul>
        </motion.section>

        {/* Terms and Conditions Note */}
        <motion.section
          className="bg-cardBg p-8 rounded-xl shadow-xl border border-primary-darker mt-8 max-w-4xl mx-auto text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-secondary font-headline mb-4">
            Important Notes & Terms
          </h2>
          <p className="text-lighterText text-lg leading-relaxed">
            All projects are subject to a detailed agreement outlining the scope
            of work, deliverables, and specific terms and conditions. Any changes
            to the project scope after agreement may result in additional costs.
            For full terms, please request a detailed proposal.
          </p>
        </motion.section>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <p className="text-xl text-lighterText mb-8 max-w-2xl mx-auto">
            Ready to discuss your web project or need a custom solution?
          </p>
          {/* Updated href to mailto link */}
          <a href="mailto:your.email@example.com?subject=Inquiry%20from%20Rate%20Card" className="btn-primary">
            Get a Custom Quote <ArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RateCard;
