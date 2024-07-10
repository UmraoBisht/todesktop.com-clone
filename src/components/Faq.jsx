import React from "react";
import Accordion from "./CustomAccordion";

function Faq() {
  return (
    <section className="px-6 py-4 mx-auto lg:px-8 mt-10 max-w-7xl">
      <h2 className="text-5xl font-semibold mb-[4rem]">FAQs</h2>
      <div className="grid lg:grid-cols-2  gap-6">
    
        {data.map((faq,index) => (
          <Accordion key={index} faq={faq}/>
        ))}
      </div>
      <p className="text-gray-400 mt-8 text-xl">
        More questions? Visit our{" "}
        <a
          href="#"
          className="text-gray-600 border-b border-gray-400 hover:border-gray-800"
        >
          docs
        </a>
        . Or{" "}
        <a
          href="#"
          className="text-gray-600  border-b border-gray-400 hover:border-gray-800"
        >
          send us a message
        </a>
        .
      </p>
    </section>
  );
}

const data = [
  {
    question: "Is ToDesktop For Me?",
    answer:
      "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.",
  },
  {
    question: "Can I try ToDesktop without buying?",
    answer:
      "Yes. You can get started by downloading ToDesktop Builder at no cost. After installing it, you can build your desktop application and preview it by clicking the “Run” button. This allows you to test the app on your own computer to ensure it performs to your expectations.",
  },
  {
    question: "Do you collect or store data about my customers?",
    answer:
      "No. When a ToDesktop app opens it contacts the our servers to check if an update is available. We do not collect or store any user data from these requests.",
  },
  {
    question: "Does ToDesktop work with sites built with ___?",
    answer:
      "Wordpress? Yes. Squarespace? Yup. Wix? Of course. Shopify? Definitely. React? You bet. Vue? Affirmative. PHP? 100%.Go? Absolutely.",
  },
  {
    question: "What features are on the product roadmap?",
    answer:
      "If you have any suggestions, we’d love to hear! Please send us an email at support@todesktop.com or send us a message",
  },
  {
    question: "How does ToDesktop work under the hood?",
    answer:
      "It can help to think of ToDesktop as a custom web browser dedicated to your web app or website. It shows a live version of your site or web app at all times, just like a web browser. There is no toolbar or address bar or refresh buttons but it behaves and functions just like a web browser. This means you don’t need to do anything to your existing site, it will just work. If your site works in Google Chrome then it is compatible with ToDesktop. ToDesktop uses a technology called Electron. You don’t need Electron (or even coding) experience to create a desktop app with ToDesktop. Rest assured, the underlying “browser” engine is updated regularly through auto-updates. So the desktop version of your app will always have the latest web features available.",
  },
  {
    question: "Will my app work offline?",
    answer:
      "Think of ToDesktop as a normal browser that is just for your website. Your website will work exactly as it does in Chrome, or any other browser.If you want to make the app work offline you’ll need to make it into a progressive web app. Include a web manifest, service workers and client-side storage and voila — offline support.Learn more on MDN.",
  },
];

export default Faq;
