export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://drylicious.vercel.app/sitemap.xml",
  };
}