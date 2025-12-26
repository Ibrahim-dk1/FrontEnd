import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  type: "mcq" | "truefalse";
  question: string;
  options?: string[]; // for MCQ
  answer: string;
}

interface QuizProps {
  courseTitle: string;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ courseTitle, onBack }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 min

  // Key per course
  const QUIZ_KEY = `quiz-${courseTitle}`;

  // Load questions for this course
  useEffect(() => {
    const stored = localStorage.getItem(QUIZ_KEY);
    if (stored) {
      setQuestions(JSON.parse(stored));
    } else {
      // Default 10 questions per course
      const defaultQuestions: Question[] = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        type: i % 2 === 0 ? "mcq" : "truefalse",
        question:
          i % 2 === 0
            ? `Sample MCQ question ${i + 1} for ${courseTitle}`
            : `Sample True/False question ${i + 1} for ${courseTitle}`,
        options: i % 2 === 0 ? ["Option 1", "Option 2", "Option 3"] : undefined,
        answer: i % 2 === 0 ? "Option 2" : "true",
      }));
      localStorage.setItem(QUIZ_KEY, JSON.stringify(defaultQuestions));
      setQuestions(defaultQuestions);
    }
  }, [QUIZ_KEY, courseTitle]);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (id: number, value: string) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) score += 1;
    });
    alert(`You scored ${score} out of ${questions.length}`);
    onBack();
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{courseTitle} Quiz</h2>
        <span className="font-mono bg-gray-200 px-3 py-1 rounded">{formatTime(timeLeft)}</span>
      </div>

      <form>
        {questions.map((q) => (
          <div key={q.id} className="mb-6 p-4 border rounded-lg">
            <p className="font-medium mb-2">{q.id}. {q.question}</p>

            {q.type === "mcq" && q.options?.map((opt) => (
              <label key={opt} className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  checked={answers[q.id] === opt}
                  onChange={() => handleChange(q.id, opt)}
                  className="form-radio"
                />
                {opt}
              </label>
            ))}

            {q.type === "truefalse" && ["true", "false"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  checked={answers[q.id] === opt}
                  onChange={() => handleChange(q.id, opt)}
                  className="form-radio"
                />
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            ))}
          </div>
        ))}

        <div className="flex justify-center gap-4 mt-6">
          <Button type="button" onClick={onBack} variant="secondary">
            Back
          </Button>
          <Button type="button" onClick={handleSubmit} variant="gradient">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
