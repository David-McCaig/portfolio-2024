import React from "react";
import { TechCardProps } from "@/lib/definitions";

export function TechCard({ icon: Icon, title }: TechCardProps) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl bg-gray-100 p-2 dark:bg-gray-800 sm:p-4">
      <Icon className="flex-shrink-0 text-3xl text-gray-800 dark:text-gray-200" />
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
    </div>
  );
}
