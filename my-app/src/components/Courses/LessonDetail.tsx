import React, { useState } from 'react';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
  description?: string;
  videoUrl?: string;
}

interface LessonDetailProps {
  lessons: Lesson[];
  initialLessonId: number;
  onBack: () => void;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lessons, initialLessonId, onBack }) => {
  const initialIndex = lessons.findIndex((l) => l.id === initialLessonId);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentLesson = lessons[currentIndex];

  const goNext = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isLastLesson = currentIndex === lessons.length - 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 font-semibold hover:underline transition-all"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Course
          </button>
          <span className="text-gray-500">{currentLesson.title}</span>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Video */}
        <div className="mb-8 relative">
          {currentLesson.videoUrl ? (
            <video
              src={currentLesson.videoUrl}
              controls
              className="w-full h-64 md:h-96 rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-semibold">
              <Play size={50} className="mr-2" /> Video Placeholder
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {currentLesson.description ||
              `This is the description for lesson "${currentLesson.title}". You can write more details about the lesson content here.`}
          </p>
        </div>

        {/* Navigation Button */}
        <div className="flex justify-end">
          {!isLastLesson ? (
            <button
              onClick={goNext}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Next Lesson →
            </button>
          ) : (
            <button
              onClick={onBack}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center space-x-2"
            >
              <CheckCircle size={20} /> Finish Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
