import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import FAQ from "../components/faq.";
import Heading from "../components/News/Heading";
import ArticlesGallery from "../components/News/ArticlesGallery";

const StyledText = styled(Typography)({
  fontSize: "1rem",
  marginTop: "3rem",
});
const data = [
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_7_ict8n7.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_2_svfsql.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_1_1_wrsupq.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_7_ict8n7.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_2_svfsql.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_1_1_wrsupq.png",
    des: "How I eat healthy meals ",
  },
];
const SingleNews = ({ hero }) => {
  return (
    <>
      <img src={hero} alt="harvesta_hero_image" />
      <Container>
        <Box fontFamily={"Plus Jakarta Sans"} my={10}>
          <Typography mb fontWeight={700} fontSize={"1.2rem"}>
            Introduction
          </Typography>
          <StyledText>
            {" "}
            Harvesta is a dedicated logistics company with a passion for
            supporting local agriculture and enhancing the well-being of our
            communities. We understand that in today’s fast-paced world, finding
            the time to visit the market can be challenging. why we’ve
            created a seamless solution to bring the farm to your table, saving
            you time and effort while promoting healthy living.
          </StyledText>
          <StyledText>
            {" "}
            Our team works closely with local farmers to source the freshest
            produce, ensuring that every item we deliver meets our high
            standards of quality and freshness. We handle the logistics, from
            farm to doorstep, so you can enjoy the best that nature has to offer
            without leaving your home. Our team works closely with local farmers
            to source the freshest produce, ensuring that every item we deliver
            meets our high standards of quality and freshness. We handle the
            logistics, from farm to doorstep, so you can enjoy the best that
            nature has to offer without leaving your home. Our team works
            closely with local farmers to source the freshest produce, ensuring
            that every item we deliver meets our high standards of quality and
            freshness. We handle the logistics, from farm to doorstep, so you
            can enjoy the best that nature has to offer without leaving your
            home.
          </StyledText>
          <StyledText>
            {" "}
            Our team works closely with local farmers to source the freshest
            produce, ensuring that every item we deliver meets our high
            standards of quality and freshness. We handle the logistics, from
            farm to doorstep, so you can enjoy the best that nature has to offer
            without leaving your home. Our team works closely with local farmers
            to source the freshest produce, ensuring that every item we deliver
            meets our high standards of quality and freshness. We handle the
            logistics, from farm to doorstep, so you can enjoy the best that
            nature has to offer without leaving your home. Our team works
            closely with local farmers to source the freshest produce, ensuring
            that every item we deliver meets our high standards of quality and
            freshness. We handle the logistics, from farm to doorstep, so you
            can enjoy the best that nature has to offer without leaving your
            home.
          </StyledText>
          <StyledText>
            {" "}
            Our team works closely with local farmers to source the freshest
            produce, ensuring that every item we deliver meets our high
            standards of quality and freshness. We handle the logistics, from
            farm to doorstep, so you can enjoy the best that nature has to offer
            without leaving your home.
          </StyledText>
        </Box>
        <Box marginTop={8} mb={"250px"}>
          <Heading title="Other News" Talign="left" x="0" PX="0" />
          <ArticlesGallery data={data} gridWidth="300px" />
        </Box>
      </Container>
      <FAQ />
    </>
  );
};

export default SingleNews;
