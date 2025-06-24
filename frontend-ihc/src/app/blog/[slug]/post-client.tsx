"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FaArrowLeft } from "react-icons/fa";
import { Post } from "@/data/posts/types";
import Footer from "@/components/footer/footer";
import MainCard from "@/components/sections/main-card";
import { ThemeToggle } from "@/components/sections/theme-toggle";

export default function PostClient({ post }: { post: Post }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 p-6 lg:justify-start lg:h-screen">
      <Card.Icon
        onClick={() => router.back()}
        className="fixed left-6"
        icon={<FaArrowLeft className="text-lg text-pink-400" />}
      />
      <ThemeToggle />
      <div className="w-full pt-20 xl:items-start items-center flex-col lg:flex-row flex gap-30 max-w-[1280px] h-fit">
        <MainCard />
        <div className="flex flex-col w-full gap-4">
          <Image
            src={post.image}
            alt={post.alt}
            width={800}
            height={400}
            className="object-cover w-full max-h-[400px] rounded-xl"
          />
          <div className="flex justify-between w-full ">
            <Card.Description>{post.date}</Card.Description>
            <Card.Description>Leitura de {post.readTime}min</Card.Description>
          </div>
          <Card.Title className="mt-10 text-xl md:text-4xl">
            {post.name}
          </Card.Title>
          {post.paragraphs.map((paragraph, index) => (
            <Card.Header className="mt-10" key={index}>
              <Card.Title>{paragraph.subtitle}</Card.Title>
              <Card.Description>{paragraph.content}</Card.Description>
            </Card.Header>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
