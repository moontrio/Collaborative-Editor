import React from 'react';
import { Users } from 'lucide-react';

interface User {
  id: string;
  name: string;
  color: string;
}

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-gray-400" />
        <h2 className="text-gray-200 font-semibold">Connected Users</h2>
      </div>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: user.color }}
            />
            <span className="text-gray-300">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}