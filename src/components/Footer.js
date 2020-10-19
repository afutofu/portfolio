import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;

  @media only screen and (max-width: 450px) {
    height: 50px;
  }
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;

  @media only screen and (min-width: 992px) {
    margin: 0px 15%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Credits = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;

  @media only screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const Socials = styled.div`
  color: #ff350d;
  display: flex;
  /* width: 100%; */
  max-width: 200px;
  font-size: 24px;
  justify-content: space-between;
  align-items: center;

  a {
    color: #ff350d;
  }

  i {
    margin-left: 20px;
    cursor: pointer;

    @media only screen and (max-width: 450px) {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterComp>
      <Container>
        <Content>
          <Credits>Developed by Muhammad Afuzarahman</Credits>
          <Socials>
            <i className="fa fa-envelope"></i>
            <a
              href="https://github.com/afutofu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </Socials>
        </Content>
      </Container>
    </FooterComp>
  );
};

export default Footer;