import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
}) {
  return (
    <Card className="max-w-sm relative w-full rounded-lg hover:-translate-y-1 hover:ring-1 dark:ring-slate-700 ring-slate-300 transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-bold text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link className="absolute inset-0" href={href}></Link>
      </CardContent>
      <CardFooter>
        <span className="sr-only">View Project</span>
      </CardFooter>
    </Card>
  );
}
