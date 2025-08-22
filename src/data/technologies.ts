import { 
  SiTypescript, 
  SiReact,
  SiFramer, 
  SiNextdotjs, 
  SiFigma, 
  SiHtml5, 
  SiSass, 
  SiTailwindcss, 
  SiGit, 
  SiNodedotjs, 
  SiExpress, 
  SiMysql 
} from 'react-icons/si';
import { TechItem } from '@/lib/definitions';

export const technologies: TechItem[] = [
  { icon: SiTypescript, title: 'TypeScript', subtitle: 'Programming Language' },
  { icon: SiReact, title: 'React', subtitle: 'JavaScript Library' },
  { icon: SiNextdotjs, title: 'Next.js', subtitle: 'React Framework' },
  { icon: SiFigma, title: 'Figma', subtitle: 'Design Tool' },
  { icon: SiFramer, title: 'Motion', subtitle: 'Markup Language' },
  { icon: SiHtml5, title: 'HTML', subtitle: 'Markup Language' },
  { icon: SiSass, title: 'SASS', subtitle: 'CSS Preprocessor' },
  { icon: SiTailwindcss, title: 'Tailwind', subtitle: 'CSS Framework' },
  { icon: SiGit, title: 'Git', subtitle: 'Version Control' },
  { icon: SiNodedotjs, title: 'Node.js', subtitle: 'JavaScript Runtime' },
  { icon: SiExpress, title: 'Express.js', subtitle: 'Web Framework' },
  { icon: SiMysql, title: 'MySQL', subtitle: 'Database' }
];