
import travelImg from "../../../../public/servicesImg/Travel-Services-copy.jpg";
import {
  AttachMoney,
  People,
  AccessTime,
  School,
  RocketLaunch,
  Storefront,
} from "@mui/icons-material";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import dmtImage1Banner from "../../../../public/newImages/dm1.jpg";
import dmtImage2Banner from "../../../../public/newImages/dmt2.jpg";
import bbpsImage1 from "../../../../public/newImages/bbps1.jpg";
import bbpsImage2 from "../../../../public/newImages/bbps2.jpg";
import bbpsImage3 from "../../../../public/newImages/bbps3.jpg";
import panCardImage1 from "../../../../public/newImages/pancard1.jpg";
import panCardImage2 from "../../../../public/new-improved/pan card banner improved.png";
import insuranceBannerImage1 from "../../../../public/newImages/insurance1.jpg";
import insuranceBannerImage2 from "../../../../public/newImages/insurance2.png";
import matmBanner1 from "../../../../public/newImages/matm1.jpg";
import travelBanner1 from "../../../../public/new-improved/bus & flight booking banner 2.svg";
import travelBanner2 from "../../../../public/newImages/travel2.png";
import travelBanner3 from "../../../../public/new-improved/hotel booking banner 2.png";
import travelBanner4 from "../../../../public/new-improved/travel services banner.svg";
import matm1 from "../../../../public/new-improved/Untitled design.svg";
// Main Menu
import aeps1 from "../../../../public/newImages/home/aeps1.png";
import aeps3 from "../../../../public/new-improved/mini statement - aeps 1  matm 3 improved.svg";
import aeps4 from "../../../../public/new-improved/Balance Enquiry - matm 2 improved.svg";
import aeps2 from "../../../../public/new-improved/Cash_Withdrawal-_matm_1[2] (1).svg";

import panCard1 from "../../../../public/new-improved/pan 1 improved.svg";
import panCard2 from "../../../../public/improved/pan 2.svg";
import panCard3 from "../../../../public/new-improved/pan 4 improved (1).svg";
import panCard4 from "../../../../public/improved/pan improved.png";

import billPayment1 from "../../../../public/newImages/home/bbps1.png";
import billPayment2 from "../../../../public/newImages/home/bbps2.png";
import billPayment3 from "../../../../public/newImages/home/bbps3.png";
import billPayment5 from "../../../../public/newImages/home/bbps5.png";
import dmtImage1 from "../../../../public/improved/dmt.svg";
import dmtImage2 from "../../../../public/newImages/new-banners/dmt 2 (1).svg";
import dmtImage3 from "../../../../public/newImages/new-banners/dmt 3.svg";
import insuranceImg1 from "../../../../public/improved/life Insurance.svg";
import insuranceImg2 from "../../../../public/improved/health Insurance.svg";
import insuranceImg3 from "../../../../public/improved/travel Insurance.svg";
import insuranceImg4 from "../../../../public/improved/general Insurance.svg";
import travelImage1 from "../../../../public/new-improved/bus booking 2.svg";
import travelImage2 from "../../../../public/improved/Air Ticket.svg";
import travelImage3 from "../../../../public/new-improved/flight booking 2.svg";
import travelImage4 from "../../../../public/improved/travel Insurance.svg";
import aepsBanner1 from "../../../../public/newImages/new-banners/aeps 1.png";
import aepsBanner2 from "../../../../public/newImages/new-banners/aeps 2.png";
import aepsBanner3 from "../../../../public/new-improved/mini statement banner improved.png";
import matm2 from "../../../../public/new-improved/matm 1.svg";
import matm3 from "../../../../public/new-improved/matm 2.svg";
import matm4 from "../../../../public/new-improved/matm 3.svg";

const servicesContent = {
  aeps: {
    images: [aepsBanner1.src, aepsBanner2.src, aepsBanner3.src], // Images Array For Top Slider
    services: [
      {
        title: "Aadhaar Banking",
        subtitle:
          "Offer One-Stop Aadhaar Banking Solutions in Rural Areas with Rizing Pay",
        description: `Are you a retailer looking to expand your business by offering Aadhaar banking services in small towns? With Rizing Pay, you can provide seamless Aadhaar-enabled banking solutions, including cash withdrawals, AePS services, mini statements, and balance inquiries—all in one place.`,
        image: aeps1.src,
        reverse: false,
      },

      {
        title: "Mini Statement",
        subtitle:
          "Mini Statement Print Via Aadhaar Card Through Rizing Pay Merchant",
        description: `In small towns, people often struggle with limited access to financial services `,
        image: aeps3.src,
        reverse: false,
      },
      {
        title: "Balance Enquiry",
        subtitle: "Offer Balance Inquiry Services Through Rizing Pay",
        description: `In small towns, people often struggle with limited access to financial services. With Rizing Pay, you can provide balance inquiry services to customers through Aadhaar card authentication, enabling them to check their account balance easily and securely.`,
        image: aeps2.src,
        reverse: true,
      },
      {
        title: "AePS",
        subtitle:
          "Mini Statement Print Via Aadhaar Card Through Rizing Pay Merchant",
        description: `In small towns, people often struggle with limited access to financial services `,
        image: aeps4.src,
        reverse: false,
      },
    ],
    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Outstanding incentives on every transaction",
      },
      {
        icon: <People fontSize="large" />,
        text: "Transform the lives of people in rural areas",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "Round-the-clock customer service and support",
      },
      {
        icon: <LegendToggleIcon fontSize="large" />,
        text: "Increase in customer footfall",
      },
      {
        icon: <School fontSize="large" />,
        text: "Frequent and professional product training",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Expand your offerings and boost your business",
      },
    ],
    benefitsTitle: "Benefits Of Offering AePS Services Through",
  },
  dmt: {
    images: [
      // "https://finkeda.com/wp-content/uploads/2025/01/DMT-page-banner-copy.jpg",
      dmtImage1Banner.src,
      dmtImage2Banner.src,
    ],
    services: [
      {
        title: "Domestic Money Transfer",
        subtitle:
          "Transfer Funds Instantly to Any Bank Across India with Rizing Pay’s Domestic Money Transfer Service",
        description: `Domestic money transfer is a cash-to-bank-account remittance service that allows you to help customers transfer money from rural locations to any bank account across India. With Rizing Pay, you can offer fast, secure, and reliable fund transfers through NEFT/IMPS. Whether it's a nationalised or private bank, customers can remit funds instantly to their loved ones or businesses in any IMPS/NEFT-supported bank across India. This service is available 24/7, even during non-banking hours and holidays.`,
        image: dmtImage1.src,
        reverse: true,
      },

      {
        title: "Money Transfer Tracking",
        subtitle:
          "Track Domestic Money Transfers with Rizing Pay’s Real-Time Updates",
        description: `With Rizing Pay, customers can easily track their domestic money transfers through real-time updates. Whether sending money for personal needs or business purposes, the entire process is secure, transparent, and hassle-free. Customers can see exactly when their funds will be credited to the receiver’s account, ensuring peace of mind with every transaction.`,
        image: dmtImage2.src,
        reverse: false,
      },
      {
        title: "Instant Domestic Money Transfer",
        subtitle:
          "Enable Instant Fund Transfers to Any IMPS/NEFT Supported Bank Account Across India Through Rizing Pay",
        description: `With Rizing Pay, you can offer customers the ability to send money instantly to any bank in India, 24/7, including on banking holidays and outside traditional banking hours. This service is perfect for migrants, laborers, and underbanked populations who need to send money quickly and easily. Rizing Pay ensures that recipients will get the funds credited to their bank accounts within seconds, providing convenience and security with every transaction.`,
        image: dmtImage3.src,
        reverse: true,
      },
    ],
    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Attractive commissions on every money transfer transaction",
      },
      {
        icon: <People fontSize="large" />,
        text: "Empower the underbanked and rural populations with easy access to financial services",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "24/7 access to Domestic Money Transfer services, including on holidays",
      },
      {
        icon: <LegendToggleIcon fontSize="large" />,
        text: "Increase in customer footfall by offering essential financial services",
      },
      {
        icon: <School fontSize="large" />,
        text: "Regular, professional training to ensure smooth service delivery",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business by offering instant and reliable money transfer solutions",
      },
    ],

    benefitsTitle:
      "Benefits Of Offering DMT (Domestic Money Transfer Services) Through",
  },
  mAtm: {
    images: [matmBanner1.src],
    services: [
      {
        title: "Discover Lucrative Business Opportunities",
        subtitle:
          "Unlock Your Path to Financial Success with Our Products and Services",
        description: `Step into a world of lucrative opportunities as an M-Atm agent. By partnering with us, you’ll gain access to a wide range of essential banking services such as cash withdrawals, balance inquiries, mini-statements, and much more. With the backing of a proven business model and attractive income potential, you can empower your business while contributing to financial inclusion in underserved areas.`,
        image: matm1.src,
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle: "Kickstart Your Business Journey with a Simple Registration",
        description: `Starting as an M-ATM agent is easy! Simply fill out a quick form with your contact information and desired services, and you’ll be on your way to becoming a part of our thriving network. Submitting your interest today will fast-track your journey toward business ownership and open the door to an exciting new opportunity.`,
        image: matm2.src,
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Team for Expert Guidance and Clarity",
        description: `Once we receive your interest, our team will personally reach out for an initial discussion. We’ll provide in-depth answers to your questions and walk you through the process, from understanding the role and responsibilities to the exciting benefits you'll receive. Plus, we’ll discuss the earning potential and the support you’ll get to grow your business successfully.`,
        image: matm4.src,
        reverse: false,
      },
      {
        title: "Seamless, Paperless Onboarding",
        subtitle:
          "Become an M-ATM Agent with Effortless and Efficient Onboarding",
        description: `Becoming an M-ATM agent is quick, easy, and entirely paperless. Once you complete the Aadhaar Enabled Payment System (AePS) registration, our team will ensure you have all the necessary documentation, training, and business tools to thrive. With marketing support, continuous business development, and hands-on guidance, you’ll feel confident launching your business and making an impact in your community.`,
        image: matm3.src,
        reverse: true,
      },
    ],

    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Earn attractive commissions on every successful money transfer and transaction.",
      },
      {
        icon: <People fontSize="large" />,
        text: "Help empower the underbanked and rural communities by providing them easy access to essential financial services.",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "Enjoy 24/7 access to domestic money transfer services, even during holidays, ensuring convenience for your customers.",
      },
      {
        icon: <Storefront fontSize="large" />,
        text: "Increase footfall and expand your customer base by offering essential banking and financial services.",
      },
      {
        icon: <School fontSize="large" />,
        text: "Receive regular, professional training to ensure efficient service delivery and enhance customer experience.",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business growth by offering instant, reliable, and secure money transfer solutions.",
      },
    ],
    benefitsTitle:
      "Benefits of Offering Micro ATM (M-ATM) Services Through Our Platform",
  },
  travel: {
    images: [
      ,
      travelBanner3.src,
      travelBanner1.src,
      travelBanner2.src,
      travelBanner4.src,
    ],
    services: [
      {
        title: "Discover Profitable Travel Booking Opportunities",
        subtitle:
          "Unlock Your Path to Earnings with Rizing Pay's Travel Services",
        description: `Step into a world of profitable opportunities as a Rizing Pay travel agent. By partnering with us, you’ll gain access to a comprehensive platform that allows you to book both bus and flight tickets from multiple merchants and platforms. Maximize your earnings with competitive commissions while providing your customers with the best travel deals and a seamless booking experience. Empower your business and become a key player in the thriving travel industry.`,
        image: travelImage1.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle:
          "Start Your Travel Booking Business with a Simple Registration",
        description: `Getting started as a Rizing Pay travel agent is quick and easy! Just fill out a short form with your contact details and desired services, and you’re on your way to joining our network. Whether you're new to the travel industry or looking to expand your existing business, submitting your interest will fast-track your journey toward becoming a successful travel merchant with access to incredible savings and benefits.`,
        image: travelImage2.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Team for Expert Guidance and Support",
        description: `After we receive your interest, our team will personally reach out to you for an in-depth consultation. We'll guide you through the entire process of becoming a travel agent, explaining the benefits, the tools you'll use, and the earning potential you can achieve. You'll also receive insights on how to maximize your commissions while providing top-notch customer service in the travel booking space.`,
        image: travelImage3.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Effortless, Paperless Onboarding",
        subtitle:
          "Become a Rizing Pay Travel Agent with a Smooth Onboarding Process",
        description: `Joining the Rizing Pay family is hassle-free! Our paperless onboarding process ensures you get up and running in no time. After completing a quick registration, we’ll provide you with all the necessary tools, training, and support to get started. With access to the best deals in flight and bus ticket bookings, plus continuous marketing support, you'll be ready to grow your business and serve your customers efficiently.`,
        image: travelImage4.src, // Replace with appropriate image source
        reverse: true,
      },
    ],

    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Earn attractive commissions on every successful flight and bus ticket booking transaction.",
      },
      {
        icon: <People fontSize="large" />,
        text: "Empower travelers and customers by offering them easy access to affordable travel booking services.",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "Enjoy 24/7 access to flight and bus ticket booking services, ensuring convenience for your customers at any time.",
      },
      {
        icon: <Storefront fontSize="large" />,
        text: "Increase footfall and expand your customer base by offering essential travel services such as bus and flight ticket bookings.",
      },
      {
        icon: <School fontSize="large" />,
        text: "Receive regular, professional training on booking platforms and customer service to ensure efficient service delivery and an enhanced customer experience.",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business growth by offering instant, reliable, and competitive ticket booking services for your customers.",
      },
    ],

    benefitsTitle:
      "Why Become a Rizing Pay Travel Agent? Unlock the Potential with",
  },
  insurance: {
    images: [insuranceBannerImage1.src, insuranceBannerImage2.src],
    services: [
      {
        title: "Discover Easy Insurance Plans for a Secure Tomorrow",
        subtitle: "Unlock Hassle-Free Insurance Solutions with Rizing Pay",
        description: `Step into a world of simple and affordable insurance services as a Rizing Pay Insurance agent. By partnering with us, you’ll gain access to a variety of insurance plans, including term plans, life insurance, health insurance, and more. Maximize your earnings with competitive commissions while providing your customers with personalized, cost-efficient, and comprehensive insurance coverage. Empower your business and become a trusted advisor in the growing insurance industry.`,
        image: insuranceImg1.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle: "Start Your Insurance Business with a Simple Registration",
        description: `Getting started as a Rizing Pay Insurance agent is quick and easy! Simply fill out a short form with your contact details and the types of insurance services you’d like to offer, and you’re on your way to becoming part of our network. Whether you're new to the insurance industry or looking to expand your existing business, submitting your interest today will fast-track your journey toward offering reliable and personalized insurance solutions.`,
        image: insuranceImg2.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Experts for Tailored Insurance Solutions",
        description: `Once we receive your interest, our team will personally reach out to you for an in-depth consultation. We'll guide you through the process of becoming an insurance agent, explaining the benefits of the different types of insurance plans available, including term plans, health insurance, and more. You’ll also gain valuable insights on how to maximize your commissions while delivering top-notch customer service in the insurance space.`,
        image: insuranceImg3.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Effortless, Paperless Onboarding",
        subtitle:
          "Become a Rizing Pay Insurance Agent with a Smooth Onboarding Process",
        description: `Joining Rizing Pay is quick and simple! Our paperless onboarding process ensures you can get started right away. After completing a fast registration, we’ll provide you with all the tools, training, and support you need to succeed. With access to a range of insurance options, including term plans and health coverage, plus ongoing marketing support, you’ll be ready to grow your business and provide essential services to your customers.`,
        image: insuranceImg4.src, // Replace with appropriate image source
        reverse: true,
      },
    ],

    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Earn attractive commissions on every insurance policy sold, including term plans, health, and life insurance.",
      },
      {
        icon: <People fontSize="large" />,
        text: "Empower customers by offering easy access to personalized, cost-efficient insurance coverage for a secure tomorrow.",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "24/7 access to insurance services, making it easier for customers to apply for and update their policies at any time.",
      },
      {
        icon: <LegendToggleIcon fontSize="large" />,
        text: "Increase customer footfall and expand your customer base by offering essential insurance products such as life, health, and term insurance.",
      },
      {
        icon: <School fontSize="large" />,
        text: "Receive regular, professional training on insurance products and customer service to ensure efficient service delivery.",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business growth by offering a wide range of reliable and competitive insurance solutions for your customers.",
      },
    ],

    benefitsTitle: "",
  },
  pg: {
    images: [
      "https://finkeda.com/wp-content/uploads/2024/12/insurance-page-banner-copy.jpg",
    ],
    services: [
      {
        title: "Seamless Payment Solutions for Every Business",
        subtitle: "Unlock Easy, Secure, and Scalable Payments with Rizing Pay",
        description: `With Rizing Pay, businesses can accept a wide array of payment methods, including domestic and international credit & debit cards, EMIs (Credit/Debit Cards & Cardless), PayLater, Netbanking from 58 banks, UPI, and 8 mobile wallets. Our robust platform makes it easy to accept payments from anywhere in the world while ensuring a smooth and secure checkout experience for your customers.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Global Payment Acceptance, Local Convenience",
        subtitle: "Integrate Rizing Pay's Payment Gateway with Ease",
        description: `Rizing Pay makes integrating payment solutions simple with a developer-friendly approach. Whether you're using APIs, plugins, or libraries, our platform supports all major languages and platforms. Accept payments seamlessly from your customers worldwide with the same ease as you would locally.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Advanced Analytics for Better Business Decisions",
        subtitle: "Gain Insight with Rizing Pay’s Powerful Dashboard",
        description: `Rizing Pay offers a comprehensive, easy-to-use dashboard that gives you access to detailed statistics on payments, settlements, refunds, and more. This data-driven approach allows you to make more informed business decisions, enhance your operational efficiency, and grow your revenue.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Secure, Reliable, and Scalable Payment Infrastructure",
        subtitle: "Trust Rizing Pay’s Robust Security for Peace of Mind",
        description: `We take security seriously. Rizing Pay is PCI DSS Level 1 compliant and undergoes frequent third-party audits to ensure your data is always safe. With dedicated internal security teams and advanced fraud protection measures, you can trust us to handle your payments securely, leaving you free to focus on growing your business.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: true,
      },
    ],

    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Earn attractive commissions on every payment processed through Rizing Pay, with competitive transaction fees and incentives for high-volume businesses.",
      },
      {
        icon: <People fontSize="large" />,
        text: "Empower customers by offering them a wide range of payment options, including credit/debit cards, UPI, mobile wallets, and more, ensuring a seamless checkout experience.",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "24/7 access to the Rizing Pay dashboard, enabling you to track payments, settlements, refunds, and more, ensuring real-time visibility of your financial transactions.",
      },
      {
        icon: <LegendToggleIcon fontSize="large" />,
        text: "Increase your customer base by offering secure and scalable payment solutions, allowing you to accept payments globally while offering a local feel.",
      },
      {
        icon: <School fontSize="large" />,
        text: "Access regular, professional training and support to help you effectively use Rizing Pay’s tools, APIs, and integrations for a smooth payment experience.",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business growth with Rizing Pay’s robust, developer-friendly platform and a range of payment methods that help drive more conversions and revenue.",
      },
    ],

    benefitsTitle:
      "Why Rizing Pay is the Perfect Payment Solution for Your Business – Unlock the Benefits of Seamless Payment Processing with",
  },
  utilityBills: {
    images: [bbpsImage1.src, bbpsImage2.src, bbpsImage3.src],
    services: [
      {
        title: "Utility Bill Payments Made Easy",
        subtitle:
          "Offer Instant, Secure, and Easy Utility Bill Payment Services with Rizing Pay",
        description: `Are you looking to start a small business or a one-stop recharge bill payment center to offer your customers in rural areas easy, secure, and instant utility bill payment services? Rizing Pay is your answer. With our utility bill payment services, you can offer customers in small towns and remote areas the ease of paying utility bills without waiting in long queues. Our platform empowers merchants to manage bill payments efficiently while offering outstanding discounts, rewards, and commissions.`,
        image: billPayment1.src, // Replace with appropriate image source for utility payments
        reverse: false,
      },
      {
        title: "Benefits of Offering Utility Bill Payments with Rizing Pay",
        subtitle: "Maximize Earnings and Serve Your Customers Better",
        description: `With Rizing Pay's BBPS services, merchants can manage diverse customer utility bills with ease while earning impressive commissions. It's a one-stop solution for utility bill payments and recharges, designed to increase footfall, provide exceptional customer support, and maximize ROI. This service is an excellent way to grow your business and bring convenience to small towns and rural areas. Join us today and start offering your customers an easy, secure, and instant way to pay utility bills.`,
        image: billPayment2.src, // Replace with appropriate image source for utility payments
        reverse: true,
      },
      {
        title: "Join Rizing Pay as a Utility Bill Payment Merchant",
        subtitle:
          "Start Earning Commissions with Rizing Pay's Secure and Instant Services",
        description: `Becoming a Rizing Pay utility bill payment merchant is simple and rewarding! Offer your customers in rural areas a secure and instant way to pay their utility bills through our platform. By partnering with us, you’ll benefit from competitive commissions, a seamless bill payment system, and unmatched customer support. Start earning today and become an essential service provider in your community.`,
        image: billPayment3.src, // Replace with appropriate image source for utility payments
        reverse: false,
      },
      {
        title: "Easy Bill Payments with Rizing Pay",
        subtitle: "Quick Setup for Utility Bill Payment Services",
        description: `Getting started with Rizing Pay is fast and easy! Our streamlined onboarding process ensures that you can begin offering utility bill payments to your customers without delay. We provide you with all the tools, training, and support necessary to succeed. Join Rizing Pay today and become a key player in delivering instant, secure, and efficient bill payment services to your community.`,
        image: billPayment5.src, // Replace with appropriate image source for utility payments
        reverse: true,
      },
    ],
    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Earn attractive commissions on every utility bill payment processed through Rizing Pay, with competitive transaction fees and incentives for high-volume bill payment businesses.",
      },
      {
        icon: <People fontSize="large" />,
        text: "Empower customers by offering them a wide range of payment options for utility bills, including credit/debit cards, UPI, mobile wallets, and more, ensuring a seamless payment experience.",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "24/7 access to the Rizing Pay dashboard, enabling you to track bill payments, settlements, refunds, and more, ensuring real-time visibility of your transactions and earnings.",
      },
      {
        icon: <LegendToggleIcon fontSize="large" />,
        text: "Increase your customer base by offering secure and scalable utility bill payment solutions, allowing you to accept payments for various utility services globally while maintaining a local presence.",
      },
      {
        icon: <School fontSize="large" />,
        text: "Access regular, professional training and support to help you effectively use Rizing Pay’s tools, APIs, and integrations for a smooth and efficient utility bill payment experience.",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business growth with Rizing Pay’s robust, developer-friendly platform and a range of payment methods that help drive more bill payments and increase revenue.",
      },
    ],
    benefitsTitle:
      "Why Become a Rizing Pay Utility Bill Payment Merchant? Unlock the Benefits of Seamless and Secure Bill Payment Services with",
  },
  creditCard: {
    images: [],
    services: [],
    benefitsData: [],
    benefitsTitle: "",
  },
  panCard: {
    images: [panCardImage2.src, panCardImage1.src],
    services: [
      {
        title: "Discover Easy PAN Card Application and Update Services",
        subtitle: "Unlock Convenient PAN Card Solutions with Rizing Pay",
        description: `Step into a world of hassle-free PAN card services as a Rizing Pay PAN Card agent. By partnering with us, you’ll gain access to a user-friendly platform where customers can easily apply for new PAN cards or update their details. Maximize your earnings with competitive commissions while providing a streamlined, efficient service to your customers. Empower your business and become an essential resource for those in need of PAN card services.`,
        image: panCard1.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle:
          "Start Your PAN Card Application Business with a Simple Registration",
        description: `Becoming a Rizing Pay PAN Card agent is quick and easy! Just fill out a simple registration form with your contact details and desired services, and you’ll be on your way to joining our network. Whether you’re new to providing financial services or looking to expand your business, submitting your interest today will fast-track your journey toward becoming a successful PAN Card merchant with access to exclusive benefits.`,
        image: panCard2.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Team for Expert Guidance and Support",
        description: `After we receive your interest, our team will personally reach out to you for an in-depth consultation. We’ll guide you through the entire process of becoming a PAN Card agent, explaining the benefits, the tools you'll use, and the earning potential you can achieve. You’ll also receive insights on how to maximize your commissions while offering excellent customer service in the PAN card application and update space.`,
        image: panCard3.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Effortless, Paperless Onboarding",
        subtitle:
          "Become a Rizing Pay PAN Card Agent with a Smooth Onboarding Process",
        description: `Joining the Rizing Pay family is effortless! Our paperless onboarding process ensures that you can get started quickly and easily. After completing a fast registration, we’ll provide you with all the necessary tools, training, and support to succeed. With access to our seamless PAN card application and update platform, plus ongoing marketing support, you’ll be ready to grow your business and serve your customers efficiently.`,
        image: panCard4.src, // Replace with appropriate image source
        reverse: true,
      },
    ],

    benefitsData: [
      {
        icon: <AttachMoney fontSize="large" />,
        text: "Earn attractive commissions on every successful PAN card application and update transaction.",
      },
      {
        icon: <People fontSize="large" />,
        text: "Empower customers by offering easy access to PAN card services, including new applications and updates.",
      },
      {
        icon: <AccessTime fontSize="large" />,
        text: "Enjoy 24/7 access to PAN card application and update services, providing convenience for your customers anytime.",
      },
      {
        icon: <Storefront fontSize="large" />,
        text: "Increase footfall and expand your customer base by offering essential financial services",
      },
      {
        icon: <School fontSize="large" />,
        text: "Receive regular, professional training on PAN card application processes service delivery customer experience.",
      },
      {
        icon: <RocketLaunch fontSize="large" />,
        text: "Boost your business growth by offering instant, reliable, and secure PAN card application services for your customers.",
      },
    ],
    benefitsTitle:
      "Why Become a Rizing Pay PAN Card Agent? Unlock the Benefits of Hassle-Free PAN Card Service with",
  },
};
export default servicesContent;
