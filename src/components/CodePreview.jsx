import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';

const   CodePreview = () => {
  const iframeRef = useRef(null);
  const selectedComponent = useStore((state) => state.selectedComponent);

  useEffect(() => {
    if (iframeRef.current && selectedComponent?.code) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow.document;

      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.tailwindcss.com"></script>
            <style>body { margin: 0; padding: 0; }</style>
          </head>
          <body>
            <div id="root"></div>
            <script>
              window.onload = () => {
                const root = document.getElementById('root');
                root.innerHTML = \`<div class=" flex justify-center items-center w-full h-screen">${selectedComponent.code
                  .replace(/`/g, '\\`')
                  .replace(/className=/g, 'class=')}\</div>\`;
              };
            </script>
          </body>
        </html>
      `);
      doc.close();
    }
  }, [selectedComponent]);

  return (
    <div className="w-full h-130">
      <iframe ref={iframeRef} className="w-full h-full bg-[#212121] rounded-lg border-0 flex justify-center items-center" />
    </div>
  );
};

export default CodePreview;
