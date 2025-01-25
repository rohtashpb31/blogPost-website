import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
export default function AdminUser() {
  const [New, setNew] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = () => {
    fetch("http://localhost:80/users")
      .then((response) => response.json())
      .then((data) => {
        setNew(data.users);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this blog permanently?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:80/users/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "User deleted successfully") {
              Swal.fire("Deleted!", "Your user has been deleted.", "success");
              fetchBlogs(); // Refresh blog list
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <div className="features-container m-0 p-0">
        <Row>
          {New ? (
          New.map((item) => (
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
                <Image
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R134006824&ga=GA1.1.1430684539.1726610342&semt=ais_hybrid"
                  fluid
                  className="blog-image"
                />
                <h5 className="blog-title">UserName: {item.username}</h5>
                <p className="blog-views">Name: {item.name}</p>
                <p className="blog-date">
                  Date of Birth: {new Date(item.dob).toLocaleDateString()}
                </p>
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
          <p>No blogs available at the moment.</p>
        )}
        </Row>
      </div>
    </div>
  );
}
