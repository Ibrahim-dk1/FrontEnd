import React, { useState } from "react";
import { Search, Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, simply create an account, browse courses, and click 'Enroll Now' on the course page.",
  },
  {
    question: "How can I get a refund?",
    answer:
      "Refunds are available within 14 days of purchase according to our refund policy.",
  },
  {
    question: "How do I contact my instructor?",
    answer:
      "Go to your course dashboard, select the instructor, and click 'Message Instructor'.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes! After completing a course, you can download your certificate from the dashboard.",
  },
];

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-20 container mx-auto px-6 py-24">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Help <span className="gradient-text">Center</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Find answers to common questions or contact our support team for help.
        </p>
      </section>

      {/* Search */}
      <section className="text-center">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search the help center..."
            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
      </section>

      {/* FAQ */}
      <section className="grid gap-8 md:grid-cols-2">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground col-span-2">
            No FAQs found for "{searchTerm}".
          </p>
        )}
      </section>

      {/* Contact Support */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need more help? <span className="gradient-text">Contact Us</span>
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Our support team is here to assist you with any issues or questions
          you might have.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-card border rounded-lg p-6 flex items-center gap-3 justify-center">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-muted-foreground">support@eduhub.com</span>
          </div>
          <div className="bg-card border rounded-lg p-6 flex items-center gap-3 justify-center">
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-muted-foreground">+961 70 123 456</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
