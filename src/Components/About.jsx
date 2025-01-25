// src/pages/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import rohtash from "../assest/images/rohtash.jpg";
import gautom from "../assest/images/nana.jpg";
import writer from "../assest/images/writer.jpg";
// Container for the whole About page
const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Header Section
const Header = styled(motion.header)`
  width: 100%;
  padding: 2rem 0;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 0;
  color: #ccc;
`;

// Mission Section
const Section = styled(motion.section)`
  width: 100%;
  padding: 4rem 0;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  color: ${({ textColor }) => textColor || "#333"};
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SectionContent = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  
`;

// Team Section
const TeamContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TeamMember = styled(motion.div)`
  width: 250px;
  margin: 1rem;
  text-align: center;
`;

const MemberImage = styled(motion.img)`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const MemberName = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled(motion.p)`
  font-size: 1rem;
  color: #666;
`;

// Contact Section
const ContactSection = styled(motion.section)`
  width: 100%;
  padding: 4rem 0;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 1rem;
  background-color: #f05a28;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.25rem;

  &:hover {
    background-color: #d04e20;
  }
`;

const About = () => {
  return (
    <>
      <AboutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <Header>
          <Title
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </Title>
          <Subtitle
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Who We Are & What We Do
          </Subtitle>
        </Header>

        {/* Mission Section */}
        <Section
          bgColor="#fff"
          textColor="#333"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
          At Reliza, we are a forward-thinking IT solutions provider specializing in cutting-edge technology and innovative software development. Founded in [Year], our mission is to empower businesses with the tools they need to succeed in an increasingly digital world. We pride ourselves on delivering customized IT services that drive efficiency, innovation, and growth.<br></br>
            <strong> Software Development:</strong> Tailor-made applications and
            platforms that enhance business processes and user experiences.
            <br></br>
            <strong>Cloud Solutions:</strong> Scalable and secure cloud
            infrastructures to boost business agility and data accessibility.
            <br></br>
            <strong>Cybersecurity:</strong> Advanced security measures to
            protect your data and infrastructure from modern threats.
            <br></br>
            <strong>Data Analytics:</strong> Transform data into actionable
            insights with our intelligent analytics services.
          </SectionContent>
        </Section>

        {/* Team Section */}
        <Section
          bgColor="#f4f4f4"
          textColor="#333"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <SectionTitle>Meet the Team</SectionTitle>
          <TeamContainer className="p-0">
            <TeamMember className="p-0">
              <MemberImage
                src={rohtash}
                alt="Team Member"
                height={250}
                width={250}
                style={{
                  objectFit: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <MemberName>Rohtash Verma</MemberName>
              <MemberRole>Founder & CEO</MemberRole>
            </TeamMember>
            <TeamMember>
              <MemberImage
                src={writer}
                alt="Team Member"
                height={250}
                width={250}
                style={{
                  objectFit: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <MemberName>Priya sharma </MemberName>
              <MemberRole>Content Manager</MemberRole>
            </TeamMember>
            <TeamMember>
              <MemberImage
                src={gautom}
                alt="Team Member"
                height={250}
                width={250}
                style={{
                  objectFit: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <MemberName>Gautom Sharma</MemberName>
              <MemberRole>Developer</MemberRole>
            </TeamMember>
          </TeamContainer>
        </Section>

        {/* Contact Section */}
        <ContactSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SectionTitle>Get in Touch</SectionTitle>
          <SectionContent>
            We would love to hear from you! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out.
          </SectionContent>
          <Link to="/Abouts/Contact">
            {" "}
            <ContactButton> Contact Us</ContactButton>
          </Link>
        </ContactSection>
      </AboutContainer>
    </>
  );
};

export default About;
