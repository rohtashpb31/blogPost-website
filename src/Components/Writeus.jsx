// src/App.js

import React, { useState } from "react";
import BlogPostEditor from "./Writeus2";


function Writeus() {
  const [post, setPost] = useState(null);
 
  const handlePostSubmit = (newPost) => {
    setPost(newPost); // Save the submitted blog post
  };
  const text = {
    textAlign: "center",
    marginTop: "-30px",
    marginBottom:'-30px'
  };
  return (
    <div>
      {/* BlogPostEditor passes the submitted post data to the viewer */}
      <BlogPostEditor onPostSubmit={handlePostSubmit} />
    </div>
  );
}

export default Writeus;
