import { editor } from 'monaco-editor';

export const editorOptions: editor.IStandaloneEditorConstructionOptions = {
  minimap: { enabled: true },
  fontSize: 14,
  wordWrap: 'on',
  automaticLayout: true,
  scrollBeyondLastLine: false,
  roundedSelection: true,
  padding: { top: 10 },
  cursorBlinking: 'smooth',
  cursorSmoothCaretAnimation: 'on',
  smoothScrolling: true,
  formatOnPaste: true,
  formatOnType: true,
  suggestOnTriggerCharacters: true,
  acceptSuggestionOnEnter: 'on',
  tabCompletion: 'on',
  snippetSuggestions: 'inline',
  wordBasedSuggestions: 'matchingDocuments',
  parameterHints: {
    enabled: true,
    cycle: true,
  },
  suggest: {
    showKeywords: true,
    showSnippets: true,
    showClasses: true,
    showFunctions: true,
    showVariables: true,
    showModules: true,
  },
};