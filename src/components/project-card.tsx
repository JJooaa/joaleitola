import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="max-w-sm relative w-full rounded-lg hover:-translate-y-1 hover:ring-1 dark:ring-slate-700 ring-slate-300 transition-all duration-300">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link className="absolute inset-0" href={href}></Link>
      </CardContent>
      <span className="sr-only">View Project</span>
    </Card>
  );
}
