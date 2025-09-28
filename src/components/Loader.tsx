"use client";

import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center p-6 w-full h-full">
      <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
      <span className="ml-2 text-sm text-gray-600">Loading...</span>
    </div>
  );
}
