
import { Users, BookOpen, Award, Globe, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Active Students', value: '50K+', icon: Users },
    { label: 'Total Courses', value: '1.2K+', icon: BookOpen },
    { label: 'Expert Instructors', value: '450+', icon: Award },
    { label: 'Countries Reached', value: '120+', icon: Globe },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted py-24 lg:py-32">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Empowering the world through <br />
            <span className="gradient-text">Accessible Education</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            EduHub is a leading global marketplace for learning and instruction. We help students reach their goals and pursue their dreams through flexible, high-quality online courses.
          </p>
          <div className="mt-10 flex justify-center gap-4">
           <Button 
  size="lg" 
  className="gradient-bg border-none hover:opacity-90" 
  asChild // <--- Add this prop
>
  <Link to="/register">
    Get Started
  </Link>
</Button>
            <Button size="lg" variant="outline" asChild>
 <Button size="lg" variant="outline" asChild>
  <Link to="/Mission" className="text-blue-600 hover:text-blue-800">
    View Our Mission
  </Link>
</Button>

</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section: Image + Text */}
      <section className="container px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
             {/* Note: Replace with actual image path or placeholder */}
            <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Students learning" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="gradient-bg absolute -bottom-6 -right-6 h-32 w-32 rounded-full opacity-20 blur-3xl" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why We Started <span className="text-primary">EduHub</span>
            </h2>
            <p className="text-muted-foreground">
              We believe that education should be available to everyone, regardless of location or financial status. Our platform connects expert instructors with learners worldwide.
            </p>
            <ul className="space-y-4">
              {[
                "Access to 1,000+ top-rated courses",
                "Learn from industry experts and practitioners",
                "Lifetime access on mobile and desktop",
                "Recognized certificates of completion"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4">
        <div className="gradient-bg flex flex-col items-center gap-6 rounded-3xl p-12 text-center text-primary-foreground shadow-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your journey?</h2>
          <p className="max-w-xl opacity-90">
            Join thousands of students already learning and growing their careers on our platform today.
          </p>
         <Button size="lg" variant="secondary" className="font-bold" asChild>
  <Link to="/register">
    Join as a Student
  </Link>
</Button>
        </div>
      </section>
    </div>
  );
};

export default About;