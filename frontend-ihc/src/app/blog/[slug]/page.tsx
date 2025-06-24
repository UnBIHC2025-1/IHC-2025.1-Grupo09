"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import PostClient from "./post-client";

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return <PostClient post={post} />;
}
