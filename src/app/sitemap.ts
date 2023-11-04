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
      url: baseUrl + "/projects",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/projects" + "/automotive-industry-web-app",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/projects" + "/property-management-platform",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/projects" + "/service-information-systems-application",
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
