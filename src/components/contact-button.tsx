import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { buttonVariants } from "./ui/button";

type ContactButtonProps = {
  icon: React.ReactNode;
  href: string;
  text: string;
};

export function ContactButton({ icon, href, text }: ContactButtonProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex gap-2 justify-between"
      )}
      href={href}
      target="_blank"
    >
      {icon}
      {text}
    </Link>
  );
}
