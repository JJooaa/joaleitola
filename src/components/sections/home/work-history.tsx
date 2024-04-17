import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function WorkHistory() {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-normal">Work History.</h3>
      <div className="space-y-4">
        <Card className="space-y-2 rounded-none border-0 p-0 shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="p-0 text-base font-normal">
              CEO | Founder
            </CardTitle>
            <CardDescription className="text-foreground">
              Sisu Video Oy
              <br />
              2024 - Current
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground">
            Founded a web widget company that helps businesses increase their
            sales. Instead of using traditional chatbots, where text is the main
            way of communication, we use video to communicate with customers.
          </CardContent>
        </Card>
        <Card className="space-y-2 rounded-none border-0 p-0 shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="p-0 text-base font-normal">
              Full Stack Software Developer
            </CardTitle>
            <CardDescription className="text-foreground">
              Vertics Oy
              <br />
              2022 - Current
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground">
            Develop and maintain web applications for clients. Each project is
            different with its own tools and technologies.
          </CardContent>
        </Card>
        <Card className="space-y-2 rounded-none border-0 p-0 shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="p-0 text-base font-normal">
              Assistant Teacher for Web Development
            </CardTitle>
            <CardDescription className="text-foreground">
              Digitalents Academy
              <br />
              2021 - 2022
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground">
            Teach and assist 18-29 year olds in web development.
          </CardContent>
        </Card>
        <Card className="space-y-2 rounded-none border-0 p-0 shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="p-0 text-base font-normal">
              Web Developer Internship
            </CardTitle>
            <CardDescription className="text-foreground">
              Digitalents Academy
              <br />
              2021 - 2021
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground">
            Enviroment where I was able to learn and grow as a web developer.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
