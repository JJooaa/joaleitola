import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ProsCard({ icon, title, description }: Props) {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle className="flex gap-4 md:text-2xl text-xl">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
