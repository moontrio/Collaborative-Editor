import React, { useRef, useEffect } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import * as Y from 'yjs';
import { MonacoBinding } from 'y-monaco';
import { WebsocketProvider } from 'y-websocket';
import { editor } from 'monaco-editor';
import { editorOptions, typeScriptConfig } from '../utils/editor-config';
import { WEBSOCKET_URL, ROOM_NAME, DEFAULT_TYPESCRIPT_CODE } from '../utils/constants';
import { randomColor } from '../utils/colors';

interface MonacoEditorProps {
  username: string;
}

export default function MonacoEditor({ username }: MonacoEditorProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<any>(null);

  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;

    const yDoc = new Y.Doc();
    const yText = yDoc.getText('monaco');
    const provider = new WebsocketProvider(WEBSOCKET_URL, ROOM_NAME, yDoc);
    
    provider.awareness.setLocalStateField('user', {
      name: username,
      color: randomColor(),
    });

    const binding = new MonacoBinding(
      yText,
      editorRef.current.getModel()!,
      new Set([editorRef.current]),
      provider.awareness
    );

    if (yText.toString() === '') {
      yText.insert(0, DEFAULT_TYPESCRIPT_CODE);
    }

    // Configure TypeScript
    monacoRef.current.languages.typescript.typescriptDefaults.setCompilerOptions(
      typeScriptConfig.compilerOptions
    );

    return () => {
      binding.destroy();
      provider.destroy();
      yDoc.destroy();
    };
  }, [username]);

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="typescript"
      defaultValue={DEFAULT_TYPESCRIPT_CODE}
      theme="vs-dark"
      options={editorOptions}
      onMount={handleEditorMount}
    />
  );
}