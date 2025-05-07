"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { FaCalendar, FaUser, FaTag } from "react-icons/fa";
import "./BlogDetails.scss";
import axios from "axios";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();
  const slug = params?.slug; // Assuming [slug].js routing

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const response = await axios.get(`/api/blog/${slug}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    if (slug) {
      getBlogDetails();
    }
  }, [slug]);

  if (!blog) {
    return <div className="loading">Loading blog...</div>;
  }

  return (
    <div className="blog-detail-page">
      <Header />

      <div className="breadcrumb-section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span> / </span>
            <Link href="/blog">Blog</Link>
            <span> / </span>
            <span>{blog.blogTopic}</span>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <div className="blog-header">
                {blog.uploadImage && (
                  <Image
                    src={`${BASE_IMAGE_URL}/${blog.uploadImage}`}
                    alt={blog.blogTopic}
                    width={1200}
                    height={600}
                    className="blog-hero-image"
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
                <h1>{blog.blogTopic}</h1>
                <div className="meta-info">
                  <span className="date">
                    <FaCalendar /> {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="author">
                    <FaUser /> {blog.publishedBy}
                  </span>
                  <span className="category">
                    <FaTag /> {blog.blogCategory}
                  </span>
                </div>
              </div>

              <div
                className="blog-article"
                dangerouslySetInnerHTML={{ __html: blog.blogDescription }}
              ></div>

              {blog.keywords && blog.keywords.length > 0 && (
                <div className="tags-section">
                  <h3>Tags:</h3>
                  <div className="tags-list">
                    {blog.keywords.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

           
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
