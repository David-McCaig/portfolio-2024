import React from 'react';
import { TechCard } from './TechCard';
import { technologies } from '../data/technologies';

export function TechStack() {
  return (
    <div className=" py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className=" title text-2xl sm:text-3xl mb-8 text-left">My Skills</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {technologies.map((tech) => (
            <TechCard
              key={tech.title}
              {...tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
}