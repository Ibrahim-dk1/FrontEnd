import React from 'react';
import {
  PlayCircle,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface SyllabusLessonProps {
  lesson: Lesson;
}

const SyllabusLesson: React.FC<SyllabusLessonProps> = ({ lesson }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
      <div className="flex items-center space-x-4">
        {lesson.isCompleted ? (
          <CheckCircle size={24} className="text-green-500" />
        ) : (
          <PlayCircle size={24} className="text-blue-600" />
        )}
        <div>
          <p className="font-semibold text-gray-900">
            {lesson.title}
          </p>
          <p className="text-sm text-gray-500">
            {lesson.duration}
          </p>
        </div>
      </div>
      <ChevronRight size={20} className="text-gray-300" />
    </div>
  );
};

export default SyllabusLesson;
