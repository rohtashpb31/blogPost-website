import React from "react";
import Writeus2 from '../Components/Writeus2';
import AdminBlogs from "./AdminBlogs";
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { margin, padding } from "@mui/system";
import AdminUser from "./AdminUser";

export default function Dashboard() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
    },
    sidebar: {
      height:"100vh",
      backgroundColor: "#ede6e6",
      color: "black",
      padding: "20px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    },
    sidebarTitle: {
      textAlign: "center",
      marginBottom: "20px",
    },
    mainContent: {
      flex: 1,
      padding: "20px",
    },
    section: {
      marginBottom: "30px",
      backgroundColor: "#fff",
      padding: "20px",
      paddingTop:'0px',
      borderRadius: "8px",
    },
    navLink: {
      color: "black",
      padding: "10px",
      textAlign:'center',
      textDecoration: "none",
    },
    navItem: {
      cursor: "pointer",
      transition: "background-color 0.3s",
      padding: "10px 0",
      listStyle: "none",
    },
  };

  return (
    <div style={styles.container}>
      <Tab.Container id="dashboard-tabs" defaultActiveKey="first">
        <Row className="gx-0">
          {/* Sidebar */}
          <Col md={3} lg={2} xl={2} className="p-0">
            <div style={styles.sidebar} className="sidebar">
              <h3 style={styles.sidebarTitle}>Admin Panel</h3>
              <Nav variant="pills" className="flex-column">
                <Nav.Item style={styles.navItem}>
                  <Nav.Link eventKey="first" style={styles.navLink}><strong>Create Blog</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.navItem}>
                  <Nav.Link eventKey="second" style={styles.navLink}><strong>Blogs Delete</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.navItem}>
                  <Nav.Link eventKey="third" style={styles.navLink}><strong>Users Delete</strong></Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>

          {/* Main content area */}
          <Col md={9} lg={10} xl={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div style={styles.section}>
                  <Writeus2 />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div style={styles.section}>
                  <AdminBlogs />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div style={styles.section}>
                 <AdminUser/>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
