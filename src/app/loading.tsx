import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <LoaderCircle color="black" className="h-8 w-8 animate-spin" />
      <p>Loading...</p>
    </div>
  )
}
