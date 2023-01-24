import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import * as fs from "fs";

const Blogs = ({ blogPosts }) => {
  return (
    <Box sx={{ pt: 13, px: { sm: 3, lg: 4 }, mb: 5 }}>
      <Grid container spacing={3}>
        {blogPosts?.map((blog, index) => (
          <Grid item key={index} xs={12} sm={6} lg={4}>
            <Link
              href={`/blogpost/${blog?.slug}`}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <BlogCard blog={blog} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blogs;

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/blogs");
//   const blogPosts = await res.json();

//   return {
//     props: { blogPosts },
//   };
// }

export async function getStaticProps(context) {
  const data = await fs.promises.readdir("blogdata");

  let blogPosts = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    let myFile = await fs.promises.readFile(`blogdata/${element}`, "utf-8");

    // console.log();
    blogPosts.push(JSON.parse(myFile));
  }

  return {
    props: { blogPosts },
  };
}
