import {
  GraduationCap, Languages, Target, Compass, Laptop, BookOpenCheck,
  UserCheck, CalendarClock, Award, NotebookPen, HeartHandshake, MessagesSquare,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  GraduationCap, Languages, Target, Compass, Laptop, BookOpenCheck,
  UserCheck, CalendarClock, Award, NotebookPen, HeartHandshake, MessagesSquare,
};

export default function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const Cmp = map[name] ?? GraduationCap;
  return <Cmp className={className} aria-hidden="true" />;
}
