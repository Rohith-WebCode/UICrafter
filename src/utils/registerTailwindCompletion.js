import tailwindClasses from "../data/tailwindClasses.json";

let registered = false;

export function registerTailwindCompletion(monaco) {
  if (!monaco) return;
  if (registered) return; 
  registered = true;

  monaco.languages.registerCompletionItemProvider("html", {
    triggerCharacters: ['"', "'", " ", "-", ":"], 
    provideCompletionItems: (model, position) => {
      try {
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column, 
        });

        const match = textUntilPosition.match(/class(Name)?=["'][^"']*$/);
        if (!match) return { suggestions: [] };

        const attrText = match[0]; 
        const partial = attrText.split(/["'\s]/).pop() || ""; 

        
        const word = model.getWordUntilPosition(position);
        const startColumn = position.column - partial.length;
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn,
          endColumn: position.column,
        };

        const suggestions = tailwindClasses
          .filter((cls) => cls.startsWith(partial))
          .slice(0, 200) 
          .map((cls) => ({
            label: cls,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: cls + " ",
            range,
          }));

        if (suggestions.length === 0) {
          return {
            suggestions: tailwindClasses.slice(0, 80).map((cls) => ({
              label: cls,
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: cls + " ",
              range,
            })),
          };
        }

        return { suggestions };
      } catch (err) {
        console.error("tailwind completion error:", err); 
        return { suggestions: [] };
      }
    },
  });

  
  monaco.languages.registerCompletionItemProvider("javascriptreact", {
    triggerCharacters: ['"', "'", " ", "-", ":"],
    provideCompletionItems: (model, position) => {
     
      try {
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        });

        const match = textUntilPosition.match(/class(Name)?=["'][^"']*$/);
        if (!match) return { suggestions: [] };

        const attrText = match[0];
        const partial = attrText.split(/["'\s]/).pop() || "";
        const startColumn = position.column - partial.length;
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn,
          endColumn: position.column,
        };

        const suggestions = tailwindClasses
          .filter((cls) => cls.startsWith(partial))
          .slice(0, 200)
          .map((cls) => ({
            label: cls,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: cls + " ",
            range,
          }));

        if (suggestions.length === 0) {
          return {
            suggestions: tailwindClasses.slice(0, 80).map((cls) => ({
              label: cls,
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: cls + " ",
              range,
            })),
          };
        }

        return { suggestions };
      } catch (err) {
    
        console.error("tailwind completion error:", err);
        return { suggestions: [] };
      }
    },
  });
}
