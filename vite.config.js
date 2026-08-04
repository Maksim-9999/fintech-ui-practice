import { defineConfig } from "vite";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        contact: "contact.html",
        partners: "partners.html",
        solutions: "solutions.html",
        news: "news.html",
        404: "404.html",
        insurance: "insurance.html",
        newsArticle1: "news-article-1.html",
        newsArticle2: "news-article-2.html",
        newsArticle3: "news-article-3.html",
        privacy_policy: "privacy_policy.html",
        security_policy: "security_policy.html",
      },
    },
  },
});
