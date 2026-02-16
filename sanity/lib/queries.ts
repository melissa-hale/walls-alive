import { groq } from "next-sanity";
import { client } from "./client";
import { HomePageData, AboutPageData, ServicesPageData } from "../types";

// A helper to ensure all fetches are tagged
async function sanityFetch<T>(query: string): Promise<T> {
  return client.fetch(query, {}, {
    // This tag is the key. We will target this tag when we want to purge the cache.
    next: { tags: ["content"] }, 
  });
}

export async function getHomeData() {
  return sanityFetch<HomePageData>(
    groq`*[_type == "homePage"][0]{
      heroTitle,
      heroDescription,
      "heroImageUrl": heroImage.asset->url,
      stats,
      services,
      serviceArea
    }`,
  );
}

export async function getAboutData() {
  return sanityFetch<AboutPageData>(
    groq`*[_type == "aboutPage"][0]{
      title,
      bio, 
      "portraitUrl": portraitImage.asset->url,
      values,
      processSteps
    }`,
  );
}

export async function getServicesData() {
  return sanityFetch<ServicesPageData>(
    groq`*[_type == "servicesPage"][0]{
      heroTitle,
      heroDescription,
      mainServices,
      materialsTitle,
      materialsBody,
      designersList
    }`,
  );
}