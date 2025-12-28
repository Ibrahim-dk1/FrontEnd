import React from 'react';
import { Scale, UserCheck, BookOpen, AlertCircle, RefreshCcw } from 'lucide-react';

const TermsOfService = () => {
  const terms = [
    {
      title: "Account Responsibilities",
      icon: UserCheck,
      content: "You are responsible for maintaining the confidentiality of your account credentials. You must be at least 13 years old to use EduHub services."
    },
    {
      title: "Content & Enrollment",
      icon: BookOpen,
      content: "When you enroll in a course, you get a license to view it via the EduHub platform. You do not own the content and cannot redistribute or resell it."
    },
    {
      title: "Refund Policy",
      icon: RefreshCcw,
      content: "We offer a 30-day money-back guarantee for most courses. Refund requests must be submitted through our support portal within the specified timeframe."
    },
    {
      title: "Prohibited Conduct",
      icon: AlertCircle,
      content: "Users may not use the platform for any illegal activities, harassment, or uploading malicious code. Violation results in immediate account termination."
    }
  ];

  return (
    <div className="container max-w-4xl px-4 py-16 lg:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Scale className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="mt-4 text-muted-foreground italic">
          Please read these terms carefully before using the EduHub platform.
        </p>
      </div>

      <div className="space-y-12">
        {/* Intro */}
        <section className="rounded-2xl border-l-4 border-primary bg-muted p-6">
          <p className="text-sm leading-relaxed text-foreground">
            By accessing EduHub, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        {/* Core Terms Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {terms.map((term, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3 text-primary">
                <term.icon className="h-5 w-5" />
                <h2 className="font-bold uppercase tracking-wide">{term.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Legal Section */}
        <article className="prose prose-slate max-w-none space-y-6">
          <h2 className="text-2xl font-bold">1. Instructor Terms</h2>
          <p className="text-muted-foreground">
            Instructors are responsible for all content they post. By publishing content on EduHub, you grant us the right to offer that content to students and to use it for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold">2. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            EduHub is not liable for any indirect, incidental, or consequential damages arising out of your use of the platform. The platform is provided "as is" without warranties of any kind.
          </p>

          <h2 className="text-2xl font-bold">3. Modifications</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or platform notifications.
          </p>
        </article>

        {/* Acceptance Footer */}
        <div className="border-t pt-8 text-center text-xs text-muted-foreground">
          <p>© 2025 EduHub Inc. All rights reserved. Last updated: December 28, 2025.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;