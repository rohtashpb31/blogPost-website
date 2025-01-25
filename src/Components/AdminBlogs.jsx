import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1); // Current page
  const [windowSize, setWindowSize] = useState(8); // Number of blogs per page
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = () => {
    fetch("http://localhost:80/post/all", {
      method: "post", // Add method POST to send the body
      headers: {
        "Content-Type": "application/json", // Set headers to indicate JSON body
      },
      body: JSON.stringify(
        // Convert the body to a JSON string
        {
          windowSize: windowSize,
          page: page,
        }
      ),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data.posts);
        setTotalPages(data.totalPages || 1);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
      });
  };
  const handleNextPage = () => {
   
    if (page < totalPages) {
     
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle moving to the previous page
  const handlePreviousPage = () => {
   
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this blog permanently?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:80/article/delete/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Blog post deleted successfully") {
              console.log("Deleted:", id);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // Refresh the blog list
              fetchBlogs();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="features-container m-0 p-0">
      <Row className="search-row mb-3">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Blogs"
          />
          <button className="search-button">Search</button>
        </div>
      </Row>
      <Row>
        {blogs ? (
          blogs
            .slice()
            .reverse()
            .filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )
            .map((item) => (
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                key={item._id}
                className="mb-4"
              >
                <div className="blog-card">
                  <p className="blog-date">
                    PublishTime:{" "}
                    {new Date(item.publishTime).toLocaleDateString()}
                  </p>
                  <Image
                    src={item.images[0]?.path}
                    fluid
                    className="blog-image"
                  />
                  <h5 className="blog-title">{item.title}</h5>
                  <p className="lorem">
                    <span style={{ color: "#0078b5" }}>Views:</span>
                    {item.views}
                  </p>
                  <Link to={`/blog/${item._id}`}>
                    <button className="read-more-button">Read more</button>
                  </Link>
                  <Button
                    variant="danger"
                    className="delete-button"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Col>
            ))
        ) : (
          <p className="mt-3x">No blogs available to display</p>
        )}
      </Row>
      <Row className="pagination-controls mt-4">
        <Col className="text-center">
          <Button
            variant="primary"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="mx-3">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="primary"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
}
