import React from 'react';
import MonacoEditor from './MonacoEditor';

interface EditorProps {
  username: string;
}

export default function Editor({ username }: EditorProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-gray-800 p-3 border-b border-gray-700">
        <span className="text-gray-300 text-sm">TypeScript Editor</span>
      </div>
      <div className="flex-1">
        <MonacoEditor username={username} />
      </div>
    </div>
  );
}