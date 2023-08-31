// app/sitemap.js

const URL = "https://unmcss.com";

export default async function sitemap() {

  const routes = ["", "/about-us", "/contact-us","/events"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
