import React from 'react';
import { PowerWord } from '../components/ui/PowerWord';
import { ArrowRight, Code2, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => {
  const powerWords = [
    "Algorithm",
    "Excellence",
    "Innovation",
    "Mastery",
    "Success"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Master DSA with <PowerWord words={powerWords} />
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Elevate your problem-solving skills with our curated collection of DSA challenges
          </p>
          <Link
            to="/problems"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            Start Solving <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
            <p className="text-gray-600">
              Progress through carefully crafted problems designed to build your skills systematically
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Solutions</h3>
            <p className="text-gray-600">
              Learn from detailed explanations and visualizations of solution approaches
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Feedback</h3>
            <p className="text-gray-600">
              Get instant feedback on your solutions and track your progress over time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};