import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote / Beirut, Lebanon",
    type: "Full-time",
    description: "Build amazing user interfaces for our learning platform using React & TypeScript.",
  },
  {
    title: "Backend Developer",
    location: "Remote / Beirut, Lebanon",
    type: "Full-time",
    description: "Develop and maintain APIs and database services for our platform.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / Beirut, Lebanon",
    type: "Contract",
    description: "Design intuitive and engaging experiences for our learners.",
  },
];

const Careers: React.FC = () => {
  return (
    <div className="space-y-20 container mx-auto px-6 py-24">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Careers at <span className="gradient-text">EduHub</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Join our team and help us build the future of online learning.
        </p>
      </section>

      {/* Open Positions */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Current <span className="gradient-text">Open Positions</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-xl mb-2">{job.title}</h3>
                <p className="text-muted-foreground mb-1">{job.location}</p>
                <p className="text-primary font-semibold mb-3">{job.type}</p>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
              <button className="mt-6 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Why <span className="gradient-text">Work With Us</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We value innovation, collaboration, and personal growth. Our team enjoys flexible working hours, remote options, and opportunities to make a real impact.
        </p>
      </section>

     
    </div>
  );
};

export default Careers;
