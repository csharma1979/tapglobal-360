"use client";

import React, { useState, useEffect } from "react";
import Header from "../../layout/Header/Header";

import Link from "next/link";
import Image from "next/image";
import {
  fetchBlogs,
  formatDate,
} from "../../../lib/services/BlogService/BlogsService";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import "./Blog.scss";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);

  const getExcerpt = (html, wordCount) => {
    const plainText = html.replace(/<[^>]+>/g, ""); // Remove HTML tags
    const words = plainText.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : plainText;
  };

  const getBlogs = async () => {
    try {
      const blogsData = await fetchBlogs();
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const categories = [
    "All",
    "Digital Marketing",
    "Technology",
    "Management",
    "Strategy",
    "SEO",
    "Artifical Intelligence",
  ];

  const filteredPosts = blogs.filter((post) => {
    const title = post.blogTopic || "";
    const excerpt = getExcerpt(post.blogDescription || "", 20);
    const category = post.blogCategory || "";

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      <Header />

      <div className="breadcrumb-section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span> / </span>
            <span>Blogs</span>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          <h1 className="page-title">Recent Blog</h1>

          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category.toLowerCase() ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter keywords to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <Link
              href={`/blog-details/${post.slug}`}
                className="blog-card"
                key={post._id}
              >
                <div className="card-image">
                  <Image
                    src={`${BASE_IMAGE_URL}/${post.uploadImage}`}
                    alt={post.blogTopic}
                    width={400}
                    height={240}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                  />
                </div>
                <div className="card-content">
                  <span className="category-tag">{post.blogCategory}</span>
                  <h2>{post.blogTopic}</h2>
                  <p>{getExcerpt(post.blogDescription, 20)}</p>
                  <div className="post-footer">
                    <div className="author-info">
                      <span className="author-name">{post.publishedBy || "Admin"}</span>
                      <span className="date">{formatDate(post.createdAt)}</span>
                    </div>
                    <FaArrowRight className="arrow-icon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Blog;
