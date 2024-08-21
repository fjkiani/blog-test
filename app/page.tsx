"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PostWidget from "@/components/hyGraph/PostWidget";
import { getPosts } from './services';
import PostCard from "@/components/hyGraph/PostCard";
import Categories  from "@/components/hyGraph/Categories";

// Define the structure of the post data
interface PostNode {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: { url: string };
  author: { name: string; photo: { url: string } };
  createdAt: string;
}

interface Post {
  node: PostNode;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Use the Post[] type

  // Fetch posts using useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      setPosts(result);
    };
    
    fetchPosts();
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <div className="lg:col-span-8 col-span-1">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
          <Categories />

        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
