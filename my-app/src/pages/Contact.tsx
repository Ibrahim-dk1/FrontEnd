import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="container mx-auto px-6 py-24 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Have questions or need help? We’re here to support you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-card border rounded-lg p-6 text-center">
          <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-muted-foreground">support@eduhub.com</p>
        </div>

        <div className="bg-card border rounded-lg p-6 text-center">
          <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-muted-foreground">+961 81 911 752</p>
        </div>

        <div className="bg-card border rounded-lg p-6 text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-muted-foreground">Beirut, Lebanon</p>
        </div>
      </section>

      {/* Form + Map */}
      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden border">
         <iframe
  title="Google Map - Baabda"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161551.31391786243!2d35.66192345!3d33.841382949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f175b5c2661e9%3A0xd2c394b86eb730d0!2sBaabda!5e1!3m2!1sen!2slb!4v1766954348571!5m2!1sen!2slb"
  className="w-full h-[450px] border-0"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </section>
    </div>
  );
};

export default Contact;
