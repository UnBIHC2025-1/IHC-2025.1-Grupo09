import React from "react";
import Title from "../ui/title";
import { Card } from "../ui/card";
import { MdArrowOutward } from "react-icons/md";
import { posts } from "@/data/posts";
import Link from "next/link";

function Blog() {
  return (
    <section id="blog">
      <div className="flex flex-col gap-6 mt-10">
        <Title word1="VEJA O NOSSO" word2="BLOG" />
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card.Root
              className="relative justify-between group"
              key={post.slug}
            >
              <Card.Header>
                <Card.Title className="font-bold">{post.name}</Card.Title>
                <Card.Description>{post.description}</Card.Description>
                <Card.Description>{post.date}</Card.Description>
              </Card.Header>
              <MdArrowOutward className="absolute text-xl text-pink-400 transition-transform duration-300 ease-out right-4 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1" />
              <Card.Description className="absolute bottom-6 right-4">
                {post.readTime}min read
              </Card.Description>
            </Card.Root>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
