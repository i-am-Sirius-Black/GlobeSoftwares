import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-100 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-blue-200 rounded-full animate-ping"></div>
          </div>
          <div className="relative z-10 bg-white p-6 rounded-full">
            <Code2 className="w-12 h-12 text-blue-600 animate-pulse" />
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-bold text-gray-900">GlobeSoftwares</h2>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
