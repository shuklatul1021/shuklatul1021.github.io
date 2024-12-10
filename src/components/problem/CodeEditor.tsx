import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';

interface CodeEditorProps {
  code: string;
  language: 'cpp' | 'java' | 'python';
  onChange: (value: string) => void;
}

const languageExtensions = {
  cpp: cpp(),
  java: java(),
  python: python()
};

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, language, onChange }) => {
  return (
    <CodeMirror
      value={code}
      height="400px"
      theme={vscodeDark}
      extensions={[languageExtensions[language]]}
      onChange={onChange}
      className="text-sm border border-gray-300 rounded-md overflow-hidden"
    />
  );
};