import { baseUrl } from "@/lib/baseUrl"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: baseUrl + "/sitemap.xml",
  }
}
