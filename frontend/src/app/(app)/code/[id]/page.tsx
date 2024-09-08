import { currentUser } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";
import { notFound, redirect } from "next/navigation";
import CodeEditor from "@/components/editor";
export default async function CodePage() {
  return (
    <div className="overflow-hidden overscroll-none w-screen flex flex-col h-screen bg-background">
      navbar
      <div className="w-screen flex grow">
        <CodeEditor />
      </div>
    </div>
  );
}
