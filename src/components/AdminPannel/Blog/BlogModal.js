"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import dynamic from 'next/dynamic';
import "@toast-ui/editor/dist/toastui-editor.css";
import {
  saveBlog,
  updateBlog,
} from "../../../lib/services/BlogService/BlogsService";

// Dynamically import the Editor component with SSR disabled
const Editor = dynamic(
  () => import('./ToastUIEditorWrapper'),
  { ssr: false }
);

const BlogModal = ({ onCloseModal, onBlogSave, editBlog }) => {
  const editorRef = useRef();
  const [blogData, setBlogData] = useState({
    blogTopic: editBlog?.blogTopic || "",
    blogCategory: editBlog?.blogCategory || "",
    keywords: editBlog?.keywords  || "",
    uploadImage: editBlog?.uploadImage || null,
    videoUrl: "",
    blogDescription: editBlog?.blogDescription || "",
    status: "Draft",
  });

  const handleDescriptionChange = () => {
    if (editorRef.current && typeof editorRef.current.getInstance === 'function') {
      const editorInstance = editorRef.current.getInstance();
      if (editorInstance && typeof editorInstance.getHTML === 'function') {
        const description = editorInstance.getHTML();
        setBlogData({ ...blogData, blogDescription: description });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "uploadImage") {
      setBlogData({ ...blogData, uploadImage: e.target.files[0] });
    } else {
      setBlogData({ ...blogData, [name]: value });
    }
  };

  useEffect(() => {
    if (editBlog && Object.keys(editBlog).length > 0) {
      const initialData = {
        blogTopic: editBlog.blogTopic || "",
        blogCategory: editBlog.blogCategory || "",
        keywords: editBlog.keywords?.join(", ") || "",
        uploadImage: null,
        videoUrl: editBlog.videoUrl || "",
        blogDescription: editBlog.blogDescription || "",
        status: editBlog.status || "Draft",
      };
      setBlogData(initialData);
      
      // Delay setting HTML to ensure editor is loaded
      setTimeout(() => {
        if (editorRef.current && typeof editorRef.current.getInstance === 'function') {
          try {
            editorRef.current.getInstance().setHTML(editBlog.blogDescription || "");
          } catch (error) {
            console.warn('Could not set editor content:', error);
          }
        }
      }, 100);
    }
  }, [editBlog]);

  const handleSubmit = async (status) => {
    try {
      const updatedBlogData = { ...blogData, status };
      // updatedBlogData.keywords = updatedBlogData.keywords
      //   .split(",")
      //   .map((keyword) => keyword.trim());

      updatedBlogData.keywords =
        typeof updatedBlogData.keywords === "string"
          ? updatedBlogData.keywords.split(",").map((keyword) => keyword.trim())
          : updatedBlogData.keywords;

          
      let newBlog;
      if (editBlog?.slug) {
        newBlog = await updateBlog(editBlog.slug, updatedBlogData);
        onBlogSave(updated);
        onCloseModal();
      }else{
        newBlog = await saveBlog(blogData, status);
        console.log(newBlog, "blogData");
        onBlogSave(newBlog);
        onCloseModal();
      }
    } catch (error) {
      console.error("Error saving blog:", error.message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blog-modal-wrapper">
      <div className="modal-container">
        
          <button onClick={onCloseModal} className="close-modal-btn">
            <IoMdClose size={25} style={{ color: "black" }} />
          </button>
        
        <h2 className="modal-heading">{editBlog ? "Edit Blog" : "Add Blog"}</h2>
        <form className="modal-form" onSubmit={handleFormSubmit}>
          <input
            placeholder="Blog Topic"
            id="blogtopic"
            className="modal-input"
            name="blogTopic"
            value={blogData.blogTopic}
            onChange={handleChange}
          />
          <select
            id="blogcategory"
            name="blogCategory"
            className="modal-input"
            value={blogData.blogCategory}
            onChange={handleChange}
          >
            <option value="AllCategories">Select Category</option>
            <option value="Artifical Intelligence">
              Artifical Intelligence
            </option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Onsite SEO">Onsite SEO</option>
            <option value="Social Media">Social Media</option>
          </select>
          <input
            placeholder="Blog keywords"
            id="keywords"
            className="modal-input"
            name="keywords"
            value={blogData.keywords}
            onChange={handleChange}
          />

          <input
            placeholder="Upload Image"
            type="file"
            id="uploadimage"
            name="uploadImage"
            className="modal-input"
            onChange={handleChange}
          />

          <Editor
            ref={editorRef}
            previewStyle="vertical"
            height="200px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            value={blogData.blogDescription}
            onChange={handleDescriptionChange}
          />

          <div className="button-group">
            <button
              className="action-button"
              onClick={() => handleSubmit("Draft")}
            >
              Save as Draft
            </button>
            <button
              className=" action-button "
              onClick={() => handleSubmit("Published")}
            >
              Save & Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
