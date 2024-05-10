// src/components/ContactPage.js
// src/components/ContactPage.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 40px;
  font-family: Arial;
  text-align: center;
  border: 2px solid #000000;
  width: 1920px;
  marginbottom: 200px;
`;

const Title = styled.h2`
  padding: 10px 20px;
  text-align: center;
  color: black;
`;

const Breadcrumb = styled.div`
  display: flex;
  length: 500px;
  justify-content: center;
  align-items: center;
`;

const BreadcrumbLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 0 5px;
`;

const BelowHeader = ({ title, goTo }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <span style={styles.color}>&gt;</span>
        <BreadcrumbLink href={goTo}>{goTo}</BreadcrumbLink>
      </Breadcrumb>
    </Container>
  );
};
const styles = {
  color: {
    color: "black",
  },
};
export default BelowHeader;
