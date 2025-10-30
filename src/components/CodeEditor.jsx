// src/components/CodeEditor.jsx
import { Editor } from "@monaco-editor/react";
import { useStore } from "../store/useStore";
import { useEffect, useState } from "react";
import { registerTailwindCompletion } from "../utils/registerTailwindCompletion";

const CodeEditor = () => {
  const selectedComponent = useStore((state) => state.selectedComponent);
  const setSelectedComponent = useStore((state) => state.setSelectedComponent);
  const [code, setCode] = useState(selectedComponent?.code || "");

  useEffect(() => {
    setCode(selectedComponent?.code || "");
  }, [selectedComponent]);

  const handleChange = (value) => {
    setCode(value);
    setSelectedComponent({ ...selectedComponent, code: value });
  };

  const handleEditorMount = (editor, monaco) => {
    registerTailwindCompletion(monaco);
  };

  return (
    <div className="w-full h-115 overflow-hidden">
      <Editor
        height="90%"
        language="html"
        theme="vs-dark"
        value={code}
        onMount={handleEditorMount}
        onChange={handleChange}
        className="rounded-lg overflow-hidden border w-full h-full"
        options={{
          fontSize: 15,
          wordWrap: "on",
          minimap: { enabled: false },
          padding: { top: 20 },
        }}
      />
    </div>
  );
};

export default CodeEditor;
