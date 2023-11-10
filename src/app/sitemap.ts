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
      url: baseUrl + "/projects-and-tools",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/projects-and-tools/projects" + "/automotive-industry",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/projects-and-tools/projects" + "/property-management",
      lastModified: new Date(),
    },
    {
      url:
        baseUrl +
        "/projects-and-tools/projects" +
        "/service-information-system",
      lastModified: new Date(),
    },
    {
      url:
        baseUrl + "/projects-and-tools/projects" + "/current-personal-website",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/my-services",
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
