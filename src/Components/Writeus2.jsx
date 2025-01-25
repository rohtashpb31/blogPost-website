import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's CSS for styling

import Swal from "sweetalert2";
import LoginForm from "./LoginFrom";
import { useNavigate } from "react-router-dom";

const BlogPostEditor = ({ onPostSubmit }) => {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [Id, setId] = useState("");
  const [Images, setImages] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true);
      // navigator("writeus");
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const navigate = useNavigate();
  // Update word count whenever content changes
  useEffect(() => {
    const text = content.replace(/<[^>]+>/g, ""); // Strip HTML tags
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  }, [content]);

  // Create a new article on first load
  useEffect(() => {
    const createNewArticle = async () => {
      try {
        const response = await fetch("http://localhost:80/article/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Empty blog",
          }),
        });
        const data = await response.json();
        setId(data.post._id);
      } catch (err) {
        console.log(err);
      }
    };

    createNewArticle();
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Check if file has uploaded.
    if (selectedFile) {
      setImages(selectedFile);
      const formData = new FormData();
      formData.append("media", selectedFile);
      fetch(`http://localhost:80/article/uploadMedia/${Id}`, {
        method: "POST",
        body: formData,
        credentials: "include", // This will send cookies with the request
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          Swal.fire("Update Successful:", data.message);
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire("Update Failed:", error.message);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit({
      title,
      Description,
      content,
      tags,
      date: new Date().toLocaleDateString(),
    });
    // Only update the article if we have the ID
    if (Id) {
      fetch(`http://localhost:80/article/edit/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: [{ Description }],
          content: [{ content: content }],
          likes: [],
          tags: tags, // send the correct tags
          isPublic: true,
          views: 0,
          publishTime: new Date().toISOString(),
          images: [],
          videos: [],
          comments: [],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire("Update Successful:", data.message);
          if (data.message === "Blog post updated successfully!") {
            navigate("/");
            window.scrollTo({top:0 , behavior:'smooth'})
          }
          Swal.fire("Update Successful:", data.message);
          setContent("");
          setTags([]);
        })
        .catch((err) => {
          Swal.fire("Error updating article:", err);
        });
    }
  };

  // Add tag to the list when "Enter" is pressed
  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  // Remove a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  // Custom Quill toolbar configuration with H1 to H5 header options
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      [{ align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  };
  console.log(Images);
  return (
    <>
      {isLoggedIn ? (
        <div style={styles.container}>
          <h2>Post a New Blog</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                style={styles.input}
                maxLength={60}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="title">Description</label>
              <input
                type="text"
                id="description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter 60 Words Description min 40 words"
                style={styles.input}
                maxLength={160}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="title">Images</label>
              <input
                type="file"
                id="title"
                placeholder="images"
                accept="image/*"
                style={styles.input}
                required
                onChange={handleFileChange}
              />

              {/* <input
            type="file"
            id="title"
            placeholder="Upload Video here."
            accept="video/*"
            style={styles.input}
            required
            onChange={handleFileChange}
          /> */}
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="content">Content</label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Wr.  ite your blog post here..."
                style={styles.editor}
                modules={modules}
                required
              />
            </div>

            {/* Tag Input */}
            <div style={styles.formGroup}>
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagInputKeyDown}
                placeholder="Add a tag and press Enter"
                style={styles.input}
              />
              <div style={styles.tagContainer}>
                {tags.map((tag, index) => (
                  <span key={index} style={styles.tag}>
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      style={styles.removeTagButton}
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <p>Word Count: {wordCount}</p>
            <button type="submit" style={styles.button} >
              Submit Post
            </button>
          </form>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "10px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  editor: {
    minHeight: "200px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    border: "1px solid #ccc",
    padding: "10px",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  tag: {
    padding: "5px 10px",
    margin: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "3px",
    display: "inline-flex",
    alignItems: "center",
  },
  removeTagButton: {
    marginLeft: "5px",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default BlogPostEditor;
