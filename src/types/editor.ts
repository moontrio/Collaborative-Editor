export interface Cursor {
  id: string;
  color: string;
  position: { line: number; ch: number };
  username: string;
}

export interface EditorState {
  content: string;
  cursors: Cursor[];
  language: string;
}