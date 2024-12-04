import { editor } from 'monaco-editor';

export const editorOptions: editor.IStandaloneEditorConstructionOptions = {
  minimap: { enabled: true },
  fontSize: 14,
  wordWrap: 'on',
  automaticLayout: true,
  scrollBeyondLastLine: false,
  padding: { top: 10 },
  formatOnPaste: true,
  formatOnType: true,
  suggestOnTriggerCharacters: true,
  tabCompletion: 'on',
  parameterHints: { enabled: true },
};

export const typeScriptConfig = {
  compilerOptions: {
    target: 'ESNext',
    module: 'ESNext',
    moduleResolution: 'node',
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
  },
};