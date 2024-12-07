import React from 'react';
import { TechCardProps } from '@/lib/definitions';

export function TechCard({ icon: Icon, title }: TechCardProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex items-center gap-3">
      <Icon className="text-3xl text-gray-800 dark:text-gray-200 flex-shrink-0" />
      <div>
        <h3 className="text-gray-900 dark:text-gray-100 font-semibold">{title}</h3>
      </div>
    </div>
  );
}