"use client"
import {
    FileJson,
    Loader,
    Loader2,
    Plus,
    SquareTerminal,
    TerminalSquare,
    X,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";
  import { BeforeMount, Editor, OnMount } from "@monaco-editor/react";
  import { useEffect, useRef, useState } from "react";
  import monaco from "monaco-editor";
  import { ImperativePanelHandle } from "react-resizable-panels";
  
  export default function CodeEditor() {
    return (
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel
          maxSize={80}
          minSize={30}
          defaultSize={60}
          className="flex flex-col p-2 border-2"
        >
          <div className="h-10 w-full flex gap-2">Tab</div>
          <div className="grow w-full overflow-hidden rounded-lg relative">
            <Editor
              height={"100%"}
              defaultLanguage="typescript"
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false,
                },
                padding: {
                  bottom: 4,
                  top: 4,
                },
                scrollBeyondLastLine: false,
                fixedOverflowWidgets: true,
                fontFamily: "var(--font-geist-mono)",
              }}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              collapsedSize={4}
              defaultSize={4}
              minSize={25}
              collapsible
              className="p-2 flex flex-col border-2"
            >
              Preview
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col border-2"
            >
              <div className="h-10 w-full flex gap-2 shrink-0 overflow-auto tab-scroll">
                Terminal
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
  