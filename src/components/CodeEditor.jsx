import { Editor } from "@monaco-editor/react";
import { useStore } from "../store/useStore";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { registerTailwindCompletion } from "../utils/registerTailwindCompletion";

const CodeEditor = () => {
  const selectedComponent = useStore((state) => state.selectedComponent);
  const setSelectedComponent = useStore((state) => state.setSelectedComponent);
  const [code, setCode] = useState(selectedComponent?.code || "");

  useEffect(() => {
    if (selectedComponent?.code !== code) {
      setCode(selectedComponent?.code || "");
    }
  }, [selectedComponent]);

    const handleChange = useCallback(debounce((value) => {
    if (!selectedComponent) return;
    setSelectedComponent({ ...selectedComponent, code: value });

    }, 200), [selectedComponent]);

        const handleEditorMount = useCallback(async (editor, monaco) => {
        if (!monaco.__tailwindRegistered) {
            await registerTailwindCompletion(monaco);
            monaco.__tailwindRegistered = true;
        }
        }, []);


  return (
    <div className="w-full h-100 overflow-hidden border border-gray-700 rounded-lg bg-[#1e1e1e]">
      <Editor
        height="100%"
        language="html"
        theme="vs-dark"
        value={code}
        onMount={handleEditorMount}
        onChange={handleChange}
        options={{
          fontSize: 15,
          wordWrap: "on",
          minimap: { enabled: false },
          padding: { top: 20 },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
