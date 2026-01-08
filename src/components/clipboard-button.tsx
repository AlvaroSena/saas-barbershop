"use client";

import { ClipboardCheck, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ClipboardButtonProps {
  text: string;
}

export function ClipboardButton({ text }: ClipboardButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button variant="outline" size="icon" onClick={handleCopyClick}>
      {isCopied ? <ClipboardCheck className="text-green-600" /> : <Copy />}
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  );
}
