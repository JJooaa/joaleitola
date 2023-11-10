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
      url: baseUrl + "/my-services",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: baseUrl + "/maximizing-results",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: baseUrl + "/projects-and-tools",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: baseUrl + "/contact",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: baseUrl + "/projects-and-tools/projects" + "/automotive-industry",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: baseUrl + "/projects-and-tools/projects" + "/property-management",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url:
        baseUrl +
        "/projects-and-tools/projects" +
        "/service-information-system",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url:
        baseUrl + "/projects-and-tools/projects" + "/current-personal-website",
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}
