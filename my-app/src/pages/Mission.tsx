import React from "react";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven Learning",
    description:
      "We focus on practical, real-world skills that help learners achieve their personal and professional goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our platform and courses to stay aligned with industry trends.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe learning is better together. Collaboration and connection are at the heart of EduHub.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We empower learners to grow confidently, step by step, at their own pace.",
  },
];

const Mission: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="container mx-auto px-6 py-24 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Our mission is to make high-quality education accessible, practical,
            and impactful for learners around the world.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-6">
        <div className="bg-card border rounded-lg p-10 text-center max-w-4xl mx-auto shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Empowering Learners Everywhere
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At EduHub, we aim to bridge the gap between knowledge and real-world
            application. We provide flexible, affordable, and engaging learning
            experiences that help individuals build skills, advance careers,
            and unlock new opportunities.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="gradient-text">Core Values</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition"
            >
              <value.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Learn. Grow. Succeed.
          </h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">
            Join thousands of learners who are transforming their future
            through education.
          </p>
        <button
  onClick={() => {
    window.location.href = "/courses";
  }}
  className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
>
  Start Learning Today
</button>

        </div>
      </section>
    </div>
  );
};

export default Mission;
