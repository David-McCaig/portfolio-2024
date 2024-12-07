// import { IconType } from 'react-icons';

export interface TechItem {
  icon: any;
  title: string;
  subtitle: string;
}

export interface TechCardProps extends Omit<TechItem, 'subtitle'> {}