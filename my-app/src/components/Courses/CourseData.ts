export interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
}

export interface Course {
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  rating: number;
  lessons: number;
  hours: number;
  progress: number;
  fullDescription: string;
  syllabus: Lesson[];
}

export const allCourses: Course[] = [
  {
    title: 'React for Beginners',
    description: 'Learn React from scratch and build amazing web apps.',
    instructor: 'John Doe',
    imageUrl:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    lessons: 5,
    hours: 4,
    progress: 50,
    fullDescription:
      'This course provides a comprehensive introduction to React, the popular JavaScript library for building user interfaces. You will learn about components, state management, and hooks while building a real-world project.',
    syllabus: [
      { id: 1, title: 'Course Orientation & Setup', duration: '15 min', isCompleted: true },
      { id: 2, title: 'JSX and Rendering Elements', duration: '45 min', isCompleted: true },
      { id: 3, title: 'Components and Props', duration: '60 min', isCompleted: false },
      { id: 4, title: 'Handling State with useState', duration: '50 min', isCompleted: false },
      { id: 5, title: 'Final Project: Task Tracker', duration: '120 min', isCompleted: false },
    ],
  },
  {
    title: 'TypeScript Mastery',
    description: 'Deep dive into TypeScript for modern React development.',
    instructor: 'Jane Smith',
    imageUrl:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    lessons: 4,
    hours: 10,
    progress: 30,
    fullDescription:
      'Master the power of static typing in JavaScript. This course covers everything from basic types to advanced generics and decorators, specifically tailored for React developers.',
    syllabus: [
      { id: 1, title: 'Why TypeScript?', duration: '20 min', isCompleted: true },
      { id: 2, title: 'Basic Types and Interfaces', duration: '90 min', isCompleted: false },
      { id: 3, title: 'Advanced Types & Unions', duration: '75 min', isCompleted: false },
      { id: 4, title: 'Generics in Depth', duration: '110 min', isCompleted: false },
    ],
  },
  {
    title: 'Tailwind CSS Essentials',
    description: 'Learn how to style your apps beautifully with Tailwind CSS.',
    instructor: 'Alice Brown',
    imageUrl:
      'https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    lessons: 6,
    hours: 8,
    progress: 70,
    fullDescription:
      'Tailwind CSS is a utility-first CSS framework. Learn how to build modern, responsive designs without ever leaving your HTML files. We will cover the configuration, customization, and deployment.',
    syllabus: [
      { id: 1, title: 'Installation and Configuration', duration: '30 min', isCompleted: true },
      { id: 2, title: 'The Utility-First Workflow', duration: '45 min', isCompleted: true },
      { id: 3, title: 'Responsive Design with Breakpoints', duration: '60 min', isCompleted: true },
      { id: 4, title: 'Hover, Focus, and Other States', duration: '40 min', isCompleted: true },
      { id: 5, title: 'Building a Portfolio Landing Page', duration: '120 min', isCompleted: false },
      { id: 6, title: 'Optimization for Production', duration: '25 min', isCompleted: false },
    ],
  },
  {
    title: 'Next.js Fundamentals',
    description: 'Master server-side rendering and static site generation with Next.js.',
    instructor: 'Michael Lee',
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    lessons: 4,
    hours: 9,
    progress: 40,
    fullDescription:
      'Learn the production-ready framework for React. Explore the App Router, Server Components, and optimized data fetching to build high-performance web applications.',
    syllabus: [
      { id: 1, title: 'Routing and File System Navigation', duration: '40 min', isCompleted: true },
      { id: 2, title: 'Data Fetching: Server vs Client', duration: '70 min', isCompleted: false },
      { id: 3, title: 'Static Site Generation (SSG)', duration: '55 min', isCompleted: false },
      { id: 4, title: 'Deploying to Vercel', duration: '30 min', isCompleted: false },
    ],
  },
  {
    title: 'Node.js & Express',
    description: 'Build fast and scalable backend applications using Node.js and Express.',
    instructor: 'Sarah Johnson',
    imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    lessons: 5,
    hours: 12,
    progress: 25,
    fullDescription:
      'Go beyond the frontend. Learn to build robust APIs, work with databases, and handle authentication using Node.js and the Express framework.',
    syllabus: [
      { id: 1, title: 'Node.js Architecture and Event Loop', duration: '60 min', isCompleted: true },
      { id: 2, title: 'Express Middleware and Routing', duration: '80 min', isCompleted: false },
      { id: 3, title: 'Database Integration with MongoDB', duration: '120 min', isCompleted: false },
      { id: 4, title: 'JWT Authentication', duration: '90 min', isCompleted: false },
      { id: 5, title: 'Building a REST API', duration: '150 min', isCompleted: false },
    ],
  },
  {
    title: 'GraphQL API Development',
    description: 'Learn to design and implement APIs using GraphQL.',
    instructor: 'David Kim',
    imageUrl: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    lessons: 4,
    hours: 7,
    progress: 60,
    fullDescription:
      'Say goodbye to over-fetching. Learn the GraphQL query language, build schemas with Apollo Server, and connect your frontend with Apollo Client.',
    syllabus: [
      { id: 1, title: 'GraphQL vs REST', duration: '30 min', isCompleted: true },
      { id: 2, title: 'Schemas, Queries, and Mutations', duration: '90 min', isCompleted: true },
      { id: 3, title: 'Resolvers and Context', duration: '60 min', isCompleted: false },
      { id: 4, title: 'Apollo Client Integration', duration: '80 min', isCompleted: false },
    ],
  },
];
