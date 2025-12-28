import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: "We collect information you provide directly to us, such as when you create an account, enroll in a course, or communicate with our support team. This includes your name, email address, and payment information."
    },
    {
      title: "How We Use Your Data",
      icon: FileText,
      content: "Your data allows us to provide educational content, process transactions, and send you updates about your courses. We also use it to improve our platform's user experience."
    },
    {
      title: "Data Security",
      icon: Lock,
      content: "We implement industry-standard security measures to protect your personal information. This includes encryption for sensitive data and regular security audits of our systems."
    },
    {
      title: "Third-Party Sharing",
      icon: Globe,
      content: "EduHub does not sell your personal data. We only share information with trusted partners (like payment processors) necessary to provide our services."
    }
  ];

  return (
    <div className="container max-w-4xl px-4 py-16 lg:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last Updated: December 28, 2025
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        <section className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At EduHub, we take your privacy seriously. This policy describes how we collect, use, and handle your personal information when you use our websites, software, and services.
          </p>
        </section>

        {/* Dynamic Sections */}
        <div className="grid gap-8 sm:grid-cols-2">
          {sections.map((section, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3 text-primary">
                <section.icon className="h-6 w-6" />
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Text Block */}
        <section className="rounded-3xl bg-muted p-8 lg:p-12">
          <h2 className="mb-6 text-2xl font-bold">Your Rights & Choices</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              You have the right to access, update, or delete your personal information at any time through your <strong>Account Settings</strong>.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Request a copy of the data we hold about you.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Request the permanent deletion of your account.</li>
            </ul>
          </div>
        </section>

        {/* Contact Footer */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Have questions about our Privacy Policy? 
            <a href="mailto:privacy@eduhub.com" className="ml-1 font-bold text-primary hover:underline">
              Contact our Privacy Team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;