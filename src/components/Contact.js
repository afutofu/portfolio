import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactComp = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  box-sizing: border-box;
  padding: 150px 0;
  padding-bottom: calc(150px + 100px);
`;

const Content = styled.div`
  position: relative;
  /* top: 50%;
  transform: translateY(-50%); */
  width: 90%;
  max-width: 700px;
  text-align: left;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding: 0 20px;

  @media only screen and (min-width: 992px) {
    font-size: 28px;
  }
`;

const TitleHighlight = styled.span`
  color: ${(props) => props.theme.color};
`;

const TitleLineWrapper = styled.div`
  overflow: hidden;
  flex: 1;
  height: 20px;
  padding: 0;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const Text = styled.p`
  max-width: 80%;
  color: #222;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5rem;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;

  @media only screen and (min-width: 992px) {
    max-width: 70%;
    font-size: 19px;
    line-height: 1.7rem;
  }
`;

const Button = styled.button`
  font-family: "Quicksand", "san-serif";
  font-weight: 600;
  color: ${(props) => props.theme.color};
  background-color: unset;
  padding: 10px 40px;
  border-radius: 5px;
  outline: none;
  border: 3px solid ${(props) => props.theme.color};
  font-size: 18px;
  margin-bottom: 50px;

  :hover {
    cursor: pointer;
  }
`;

const theme = {
  color: "#ff350d",
};

const Contact = (props) => {
  let titleText = useRef(null);
  let titleLineLeft = useRef(null);
  let titleLineRight = useRef(null);
  let text = useRef(null);
  let button = useRef(null);

  const titleEnter = () => {
    let tl = new TimelineLite();

    tl.from(titleText, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    })
      .fromTo(
        titleLineLeft,
        {
          x: "100%",
          y: 13,
        },
        {
          x: 0,
          y: 13,
          duration: 1.2,
          ease: Power3.easeInOut,
        },
        "-=0.2"
      )
      .fromTo(
        titleLineRight,
        {
          x: "-100%",
          y: 13,
        },
        {
          x: 0,
          y: 13,
          duration: 1.2,
          ease: Power3.easeInOut,
        },
        "-=1.2"
      );

    return tl;
  };

  const textEnter = () => {
    let tl = new TimelineLite();

    tl.from(text, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });

    return tl;
  };

  const buttonEnter = () => {
    let tl = new TimelineLite();

    tl.from(button, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: titleText,
        start: "top+=200 center+=200",
        toggleActions: "play none none none",
      },
    });
    master.add(titleEnter());
    master.add(textEnter(), "-=0.45");
    master.add(buttonEnter(), "-=0.2");
  }, []);

  return (
    <ContactComp>
      <ThemeProvider theme={theme}>
        <Content>
          <TitleArea>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineLeft = el)} />
            </TitleLineWrapper>
            <Title ref={(el) => (titleText = el)}>
              Feel Free To <TitleHighlight>Contact</TitleHighlight> Me!
            </Title>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineRight = el)} />
            </TitleLineWrapper>
          </TitleArea>
          <Text ref={(el) => (text = el)}>
            I'm looking forward to working as a full time web developer -
            frontent, backend, or full-stack. So feel free to let me know if
            you're interested in hiring, want to ask some questions, or just
            want to say hi!
          </Text>
          <Button ref={(el) => (button = el)}>Contact Me</Button>
        </Content>
      </ThemeProvider>
    </ContactComp>
  );
};

export default Contact;