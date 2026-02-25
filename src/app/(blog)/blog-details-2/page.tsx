import React from "react";
import { Metadata } from "next";
import BlogDetailsTwoMain from "@/pages/blog/blog-details-2";

export const metadata: Metadata = {
  title: "Fakhruddin - Blog Details page",
};
const BlogDetailsTwoPage = () => {
  return (
    <BlogDetailsTwoMain />
  );
};

export default BlogDetailsTwoPage;
