export const WEBSOCKET_URL = 'wss://demos.yjs.dev';
export const ROOM_NAME = 'monaco-demo';

export const DEFAULT_TYPESCRIPT_CODE = `// TypeScript Example
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return \`Hello, \${person.name}! You are \${person.age} years old.\`;
}

// Example usage
const alice: Person = {
  name: "Alice",
  age: 30
};

console.log(greet(alice));
`;