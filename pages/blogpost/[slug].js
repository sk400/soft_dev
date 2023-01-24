import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import * as fs from "fs";

const BlogPost = ({ blog }) => {
  return (
    <Box
      pt={14}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 1,
      }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          maxWidth: { sm: "500px", lg: "700px" },
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "24px", sm: "34px" } }}
          fontFamily="Merriweather"
          mb={3}
          alignSelf="left"
        >
          {blog && blog?.title}
        </Typography>
        {/* <CardMedia
          component="img"
          image={blog && blog?.image}
          alt="blog-image"
          height="250"
          sx={{ borderRadius: "8px" }}
        /> */}

        <img
          src={blog && blog?.image}
          alt="blog-card"
          height="250px"
          width="100%"
          style={{
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Typography variant="" paragraph mt={5}>
          {blog && blog?.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogPost;

// export async function getServerSideProps({ params }) {
//   const { slug } = params;

//   const response = await fetch(
//     `http://localhost:3000/api/getblog?slug=${slug}`
//   );
//   const blog = await response.json();

//   // const res =
//   return {
//     props: { blog },
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-web3-in-a-month" } },
      { params: { slug: "nextjs-in-a-week" } },
      { params: { slug: "reactjs-in-5-days" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fs.promises.readFile(
    `blogdata/${params?.slug}.json`,
    "utf-8"
  );

  const blog = JSON.parse(response);

  return {
    props: { blog },
  };
}
