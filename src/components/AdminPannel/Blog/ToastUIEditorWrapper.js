"use client";

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Editor component with SSR disabled
const DynamicEditor = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Editor),
  { ssr: false }
);

// Create a wrapper component that forwards refs and props
const ToastUIEditorWrapper = forwardRef(({ onChange, value, ...props }, ref) => {
  const editorRef = useRef();
  
  // Forward the getInstance method to the parent component
  useImperativeHandle(ref, () => ({
    getInstance: () => {
      if (editorRef.current && typeof editorRef.current.getInstance === 'function') {
        return editorRef.current.getInstance();
      }
      return null;
    },
    ...editorRef.current
  }));

  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading editor...</div>; // Render a placeholder during SSR
  }

  return (
    <DynamicEditor
      ref={editorRef}
      {...props}
      initialValue={value || "Write something amazing..."}
      onChange={onChange}
    />
  );
});

ToastUIEditorWrapper.displayName = 'ToastUIEditorWrapper';

export default ToastUIEditorWrapper;