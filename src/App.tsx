import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import UserList from './components/UserList';
import { Code2 } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('editor-username');
    if (savedUsername) {
      setUsername(savedUsername);
      setIsJoined(true);
    }
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('editor-username', username);
      setIsJoined(true);
    }
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">Collaborative Editor</h1>
          </div>
          <form onSubmit={handleJoin}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Join Editor
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-semibold text-white">Collaborative Editor</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Logged in as</span>
            <span className="text-white font-medium">{username}</span>
          </div>
        </header>
        <main className="flex-1 p-4">
          <div className="h-full rounded-lg overflow-hidden border border-gray-700">
            <Editor username={username} />
          </div>
        </main>
      </div>
      <aside className="w-64 p-4 border-l border-gray-700">
        <UserList users={[{ id: '1', name: username, color: '#FF6B6B' }]} />
      </aside>
    </div>
  );
}

export default App;