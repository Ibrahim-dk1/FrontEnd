import React, { useState } from 'react';
import SyllabusLesson from '@/components/Courses/SyllabusLesson';
import LessonDetail from '@/components/Courses/LessonDetail';
import Quiz from "@/components/Courses/Quiz";
import { ArrowLeft, BookOpen, Clock, Star, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
  description?: string;
  videoUrl?: string;
}

interface Course {
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

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false); // ✅ Show quiz

  // Show Quiz
  if (showQuiz) {
    return <Quiz courseTitle={course.title} onBack={() => setShowQuiz(false)} />;
  }

  // Show LessonDetail if a lesson is selected
  if (selectedLessonId !== null) {
    return (
      <LessonDetail
        lessons={course.syllabus}
        initialLessonId={selectedLessonId}
        onBack={() => setSelectedLessonId(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation / Header */}
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 font-semibold hover:underline transition-all"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Courses
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-500 italic">
              By {course.instructor}
            </span>
            <div className="h-4 w-px bg-gray-300"></div>
            <span className="text-sm font-bold text-gray-900">
              {course.progress}% Complete
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#f2f8ff] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="ml-1 font-bold">{course.rating}.0</span>
              </div>
              <span className="text-gray-600 font-medium">
                | {course.instructor}
              </span>
            </div>
            
          </div>
          <div className="relative">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="rounded-xl shadow-2xl object-cover h-48 w-full border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              About this Course
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {course.fullDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">
              Syllabus - What you will learn
            </h2>
            <div className="space-y-4">
              {course.syllabus.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className="cursor-pointer"
                >
                  <SyllabusLesson lesson={lesson} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Course at a glance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <BookOpen size={18} className="mr-3 text-gray-400" />
                <span className="text-gray-700">{course.lessons} modules</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock size={18} className="mr-3 text-gray-400" />
                <span className="text-gray-700">
                  Approx. {course.hours} hours to complete
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Lock size={18} className="mr-3 text-gray-400" />
                <span className="text-gray-700">Certificate of Completion</span>
              </div>
            </div>

            {/* Start Quiz Button */}
            <div className="mt-6 flex justify-center">
              <Button
                className="px-8 py-3 rounded font-bold shadow-lg"
                onClick={() => setShowQuiz(true)}
              >
                Start Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
