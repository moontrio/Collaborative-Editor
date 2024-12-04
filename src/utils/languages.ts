import { languages as monacoLanguages } from 'monaco-editor';

export interface Language {
  name: string;
  id: string;
  defaultCode: string;
  config?: monacoLanguages.LanguageConfiguration;
}

export const languages: Language[] = [
  {
    name: 'JavaScript',
    id: 'javascript',
    defaultCode: `// JavaScript Example
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Example usage with types
/** @param {string} name */
function validateName(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  return name.trim();
}

console.log(greet(validateName("World")));`,
    config: {
      wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
      comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
      },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: '`', close: '`', notIn: ['string', 'comment'] },
      ]
    }
  },
  {
    name: 'Python',
    id: 'python',
    defaultCode: `# Python Example
from typing import Optional

def greet(name: str, greeting: Optional[str] = None) -> str:
    """
    Greet a person with a custom or default greeting.
    
    Args:
        name (str): The name of the person to greet
        greeting (Optional[str]): Custom greeting message
        
    Returns:
        str: The complete greeting message
    """
    if greeting is None:
        greeting = "Hello"
    return f"{greeting}, {name}!"

# Example usage with type hints
print(greet("World"))
print(greet("Python", greeting="Hi"))`,
    config: {
      comments: {
        lineComment: '#',
      },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: '"""', close: '"""' },
        { open: "'''", close: "'''" },
      ]
    }
  },
  {
    name: 'Rust',
    id: 'rust',
    defaultCode: `// Rust Example
#[derive(Debug)]
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: &str, age: u32) -> Self {
        Person {
            name: name.to_string(),
            age,
        }
    }

    fn greet(&self) -> String {
        format!("Hello, I'm {} and I'm {} years old!", self.name, self.age)
    }
}

fn main() {
    let person = Person::new("Alice", 30);
    println!("{}", person.greet());
    println!("Debug output: {:?}", person);
}`,
    config: {
      comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
      },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
      ]
    }
  },
  {
    name: 'C++',
    id: 'cpp',
    defaultCode: `// C++ Example
#include <iostream>
#include <string>
#include <memory>

template<typename T>
class SmartWrapper {
private:
    std::unique_ptr<T> data;

public:
    SmartWrapper(T value) : data(std::make_unique<T>(std::move(value))) {}
    
    const T& getValue() const { return *data; }
    
    void setValue(T newValue) {
        data = std::make_unique<T>(std::move(newValue));
    }
};

int main() {
    SmartWrapper<std::string> greeting("Hello, World!");
    std::cout << greeting.getValue() << std::endl;
    
    greeting.setValue("Hello, C++!");
    std::cout << greeting.getValue() << std::endl;
    
    return 0;
}`,
    config: {
      comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
      },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>']
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
      ]
    }
  },
];