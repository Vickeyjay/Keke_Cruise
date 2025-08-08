import { useState } from "react";
import "./faq.css";
import { GoArrowDown } from "react-icons/go";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const faqData = [
  {
    question: "How Do I Place An Order Or Request A Delivery?",
    answer:
      "You can place a delivery request directly on our website or through the KekeCruise mobile app. Just enter your pickup and drop-off locations, package details, and preferred time — and we’ll handle the rest.",
  },
  {
    question: "What Types Of Deliveries Do You Handle?",
    answer:
      "We handle a wide range of intra-city deliveries including parcels, documents, food, small electronics, and personal items. If it fits in a Keke, we’ll deliver it!",
  },
  {
    question: "What Are Your Delivery Rates?",
    answer:
      "Our rates are distance-based and start from as low as ₦500. You’ll see a transparent cost breakdown before confirming your order — no hidden fees.",
  },
  {
    question: "How Do I Pay For A Delivery?",
    answer:
      "We accept payments via debit/credit cards, bank transfers, and wallet funding. All transactions are secured and processed instantly through our app or website.",
  },
  {
    question: "Can I Track My Delivery?",
    answer:
      "Yes! As soon as your order is picked up, you can track it in real-time via your dashboard. You’ll see your rider’s live location, ETA, and contact details.",
  },
  {
    question: "What Are Your Operating Hours?",
    answer:
      "We operate every day from 8:00 AM to 8:00 PM. For urgent deliveries outside this window, you can contact support and we’ll try to arrange a solution.",
  },
];


  return (
    <div className="faq-wrapper" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFaq(index)}>
              <p>{item.question}</p>
              <span
                className={`faq-icon ${activeIndex === index ? "open" : ""}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#FEAE00" />
                  <path
                    d="M12 7V17"
                    stroke="#FEAE00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M7 ${activeIndex === index ? "12" : "12"}H17`}
                    stroke="#FEAE00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{
                      opacity: activeIndex === index ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </svg>
              </span>
            </div>

            <div
              className={`faq-body-wrapper ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div className="faq-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="extra-texts">
        <div className="see-more">
          <span>See More Questions <GoArrowDown /></span>
        </div>

        <div className="bottom-container">
          <span className="bottom-text">Still got Questions? <br />
Contact our customer support</span>

        <div className="bottom-btn">
          <button>Contact Us</button>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Faq;
