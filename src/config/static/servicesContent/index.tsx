import aadhaarBankingImg from "../../../../public/servicesImg/Aadhaar-Banking.jpg";
import balanceInquiryImg from "../../../../public/servicesImg/Balance-Enquiry-copy.jpg";
import miniStatementImg from "../../../../public/servicesImg/Mini-Statement-copy.jpg";
import dmtImg from "../../../../public/servicesImg/Domestic-Money-Transfer.png";
import travelImg from "../../../../public/servicesImg/Travel-Services-copy.jpg";
import panImg from "../../../../public/servicesImg/PAN-Card.png";
import insuranceImg from "../../../../public/servicesImg/Insurance-copy.jpg";

import {
  AttachMoney,
  People,
  AccessTime,
  School,
  RocketLaunch,
  Storefront,
} from "@mui/icons-material";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";

const servicesContent = {
  aeps: {
    images: [
      "https://finkeda.com/wp-content/uploads/2024/12/adhar-cash-withdrawal-copy.jpg",
      "https://finkeda.com/wp-content/uploads/2024/12/adhar-balannce-enquiry-copy.jpg",
      "https://finkeda.com/wp-content/uploads/2024/12/aadhar-banking-page-banner-copy.jpg",
    ], // Images Array For Top Slider
    services: [
      {
        title: "Aadhaar Banking",
        subtitle:
          "Offer One-Stop Aadhaar Banking Solutions in Rural Areas with Rizing Pay",
        description: `Are you a retailer looking to expand your business by offering Aadhaar banking services in small towns? With Rizing Pay, you can provide seamless Aadhaar-enabled banking solutions, including cash withdrawals, AePS services, mini statements, and balance inquiries—all in one place.`,
        image: aadhaarBankingImg.src,
        reverse: false,
      },
      {
        title: "Balance Enquiry",
        subtitle: "Offer Balance Inquiry Services Through Rizing Pay",
        description: `In small towns, people often struggle with limited access to financial services. With Rizing Pay, you can provide balance inquiry services to customers through Aadhaar card authentication, enabling them to check their account balance easily and securely.`,
        image: balanceInquiryImg.src,
        reverse: true,
      },
      {
        title: "Mini Statement",
        subtitle:
          "Mini Statement Print Via Aadhaar Card Through Rizing Pay Merchant",
        description: `In small towns, people often struggle with limited access to financial services `,
        image: miniStatementImg.src,
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
      "https://finkeda.com/wp-content/uploads/2025/01/DMT-page-banner-copy.jpg",
    ],
    services: [
      {
        title: "Domestic Money Transfer",
        subtitle:
          "Transfer Funds Instantly to Any Bank Across India with Rizing Pay’s Domestic Money Transfer Service",
        description: `Domestic money transfer is a cash-to-bank-account remittance service that allows you to help customers transfer money from rural locations to any bank account across India. With Rizing Pay, you can offer fast, secure, and reliable fund transfers through NEFT/IMPS. Whether it's a nationalised or private bank, customers can remit funds instantly to their loved ones or businesses in any IMPS/NEFT-supported bank across India. This service is available 24/7, even during non-banking hours and holidays.`,
        image: dmtImg.src,
        reverse: true,
      },

      {
        title: "Money Transfer Tracking",
        subtitle:
          "Track Domestic Money Transfers with Rizing Pay’s Real-Time Updates",
        description: `With Rizing Pay, customers can easily track their domestic money transfers through real-time updates. Whether sending money for personal needs or business purposes, the entire process is secure, transparent, and hassle-free. Customers can see exactly when their funds will be credited to the receiver’s account, ensuring peace of mind with every transaction.`,
        image: dmtImg.src,
        reverse: false,
      },
      {
        title: "Instant Domestic Money Transfer",
        subtitle:
          "Enable Instant Fund Transfers to Any IMPS/NEFT Supported Bank Account Across India Through Rizing Pay",
        description: `With Rizing Pay, you can offer customers the ability to send money instantly to any bank in India, 24/7, including on banking holidays and outside traditional banking hours. This service is perfect for migrants, laborers, and underbanked populations who need to send money quickly and easily. Rizing Pay ensures that recipients will get the funds credited to their bank accounts within seconds, providing convenience and security with every transaction.`,
        image: dmtImg.src,
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
    images: [
      "https://finkeda.com/wp-content/uploads/2025/01/DMT-page-banner-copy.jpg",
    ],
    services: [
      {
        title: "Discover Lucrative Business Opportunities",
        subtitle:
          "Unlock Your Path to Financial Success with Our Products and Services",
        description: `Step into a world of lucrative opportunities as an M-Atm agent. By partnering with us, you’ll gain access to a wide range of essential banking services such as cash withdrawals, balance inquiries, mini-statements, and much more. With the backing of a proven business model and attractive income potential, you can empower your business while contributing to financial inclusion in underserved areas.`,
        image: dmtImg.src,
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle: "Kickstart Your Business Journey with a Simple Registration",
        description: `Starting as an M-ATM agent is easy! Simply fill out a quick form with your contact information and desired services, and you’ll be on your way to becoming a part of our thriving network. Submitting your interest today will fast-track your journey toward business ownership and open the door to an exciting new opportunity.`,
        image: dmtImg.src,
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Team for Expert Guidance and Clarity",
        description: `Once we receive your interest, our team will personally reach out for an initial discussion. We’ll provide in-depth answers to your questions and walk you through the process, from understanding the role and responsibilities to the exciting benefits you'll receive. Plus, we’ll discuss the earning potential and the support you’ll get to grow your business successfully.`,
        image: dmtImg.src,
        reverse: false,
      },
      {
        title: "Seamless, Paperless Onboarding",
        subtitle:
          "Become an M-ATM Agent with Effortless and Efficient Onboarding",
        description: `Becoming an M-ATM agent is quick, easy, and entirely paperless. Once you complete the Aadhaar Enabled Payment System (AePS) registration, our team will ensure you have all the necessary documentation, training, and business tools to thrive. With marketing support, continuous business development, and hands-on guidance, you’ll feel confident launching your business and making an impact in your community.`,
        image: dmtImg.src,
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
      "https://finkeda.com/wp-content/uploads/2024/12/travel-page-banner-copy.jpg",
    ],
    services: [
      {
        title: "Discover Profitable Travel Booking Opportunities",
        subtitle:
          "Unlock Your Path to Earnings with Rizing Pay's Travel Services",
        description: `Step into a world of profitable opportunities as a Rizing Pay travel agent. By partnering with us, you’ll gain access to a comprehensive platform that allows you to book both bus and flight tickets from multiple merchants and platforms. Maximize your earnings with competitive commissions while providing your customers with the best travel deals and a seamless booking experience. Empower your business and become a key player in the thriving travel industry.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle:
          "Start Your Travel Booking Business with a Simple Registration",
        description: `Getting started as a Rizing Pay travel agent is quick and easy! Just fill out a short form with your contact details and desired services, and you’re on your way to joining our network. Whether you're new to the travel industry or looking to expand your existing business, submitting your interest will fast-track your journey toward becoming a successful travel merchant with access to incredible savings and benefits.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Team for Expert Guidance and Support",
        description: `After we receive your interest, our team will personally reach out to you for an in-depth consultation. We'll guide you through the entire process of becoming a travel agent, explaining the benefits, the tools you'll use, and the earning potential you can achieve. You'll also receive insights on how to maximize your commissions while providing top-notch customer service in the travel booking space.`,
        image: travelImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Effortless, Paperless Onboarding",
        subtitle:
          "Become a Rizing Pay Travel Agent with a Smooth Onboarding Process",
        description: `Joining the Rizing Pay family is hassle-free! Our paperless onboarding process ensures you get up and running in no time. After completing a quick registration, we’ll provide you with all the necessary tools, training, and support to get started. With access to the best deals in flight and bus ticket bookings, plus continuous marketing support, you'll be ready to grow your business and serve your customers efficiently.`,
        image: travelImg.src, // Replace with appropriate image source
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
    images: ['https://finkeda.com/wp-content/uploads/2024/12/insurance-page-banner-copy.jpg'],
    services: [
      {
        title: "Discover Easy Insurance Plans for a Secure Tomorrow",
        subtitle: "Unlock Hassle-Free Insurance Solutions with Rizing Pay",
        description: `Step into a world of simple and affordable insurance services as a Rizing Pay Insurance agent. By partnering with us, you’ll gain access to a variety of insurance plans, including term plans, life insurance, health insurance, and more. Maximize your earnings with competitive commissions while providing your customers with personalized, cost-efficient, and comprehensive insurance coverage. Empower your business and become a trusted advisor in the growing insurance industry.`,
        image: insuranceImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle: "Start Your Insurance Business with a Simple Registration",
        description: `Getting started as a Rizing Pay Insurance agent is quick and easy! Simply fill out a short form with your contact details and the types of insurance services you’d like to offer, and you’re on your way to becoming part of our network. Whether you're new to the insurance industry or looking to expand your existing business, submitting your interest today will fast-track your journey toward offering reliable and personalized insurance solutions.`,
        image: insuranceImg.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Experts for Tailored Insurance Solutions",
        description: `Once we receive your interest, our team will personally reach out to you for an in-depth consultation. We'll guide you through the process of becoming an insurance agent, explaining the benefits of the different types of insurance plans available, including term plans, health insurance, and more. You’ll also gain valuable insights on how to maximize your commissions while delivering top-notch customer service in the insurance space.`,
        image: insuranceImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Effortless, Paperless Onboarding",
        subtitle:
          "Become a Rizing Pay Insurance Agent with a Smooth Onboarding Process",
        description: `Joining Rizing Pay is quick and simple! Our paperless onboarding process ensures you can get started right away. After completing a fast registration, we’ll provide you with all the tools, training, and support you need to succeed. With access to a range of insurance options, including term plans and health coverage, plus ongoing marketing support, you’ll be ready to grow your business and provide essential services to your customers.`,
        image: insuranceImg.src, // Replace with appropriate image source
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
    images: [],
    services: [],
    benefitsData: [],
    benefitsTitle: "",
  },
  utilityBills: {
    images: [],
    services: [],
    benefitsData: [],
    benefitsTitle: "",
  },
  creditCard: {
    images: [],
    services: [],
    benefitsData: [],
    benefitsTitle: "",
  },
  panCard: {
    images: [
      "https://finkeda.com/wp-content/uploads/2024/12/pan-card-page-banner-copy.jpg",
    ],
    services: [
      {
        title: "Discover Easy PAN Card Application and Update Services",
        subtitle: "Unlock Convenient PAN Card Solutions with Rizing Pay",
        description: `Step into a world of hassle-free PAN card services as a Rizing Pay PAN Card agent. By partnering with us, you’ll gain access to a user-friendly platform where customers can easily apply for new PAN cards or update their details. Maximize your earnings with competitive commissions while providing a streamlined, efficient service to your customers. Empower your business and become an essential resource for those in need of PAN card services.`,
        image: panImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Express Your Interest",
        subtitle:
          "Start Your PAN Card Application Business with a Simple Registration",
        description: `Becoming a Rizing Pay PAN Card agent is quick and easy! Just fill out a simple registration form with your contact details and desired services, and you’ll be on your way to joining our network. Whether you’re new to providing financial services or looking to expand your business, submitting your interest today will fast-track your journey toward becoming a successful PAN Card merchant with access to exclusive benefits.`,
        image: panImg.src, // Replace with appropriate image source
        reverse: true,
      },
      {
        title: "Personalized Consultation",
        subtitle: "Speak with Our Team for Expert Guidance and Support",
        description: `After we receive your interest, our team will personally reach out to you for an in-depth consultation. We’ll guide you through the entire process of becoming a PAN Card agent, explaining the benefits, the tools you'll use, and the earning potential you can achieve. You’ll also receive insights on how to maximize your commissions while offering excellent customer service in the PAN card application and update space.`,
        image: panImg.src, // Replace with appropriate image source
        reverse: false,
      },
      {
        title: "Effortless, Paperless Onboarding",
        subtitle:
          "Become a Rizing Pay PAN Card Agent with a Smooth Onboarding Process",
        description: `Joining the Rizing Pay family is effortless! Our paperless onboarding process ensures that you can get started quickly and easily. After completing a fast registration, we’ll provide you with all the necessary tools, training, and support to succeed. With access to our seamless PAN card application and update platform, plus ongoing marketing support, you’ll be ready to grow your business and serve your customers efficiently.`,
        image: panImg.src, // Replace with appropriate image source
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
