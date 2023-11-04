import { baseUrl } from "@/lib/baseUrl"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: baseUrl + "/about",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/projects",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/contact",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/maximizing-results",
      lastModified: new Date(),
    },
  ]
}
