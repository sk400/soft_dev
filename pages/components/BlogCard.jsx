import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <Box>
      <Card>
        {/* <CardMedia
          component="img"
          image={blog?.image}
          alt="blog-card"
          height="200"
        /> */}
        <img
          src={blog?.image}
          alt="blog-card"
          height="200px"
          width="100%"
          style={{
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            height: "100px",
          }}
        >
          <Typography
            variant="subtitle1"
            fontFamily="Merriweather"
            gutterBottom
          >
            {blog?.title}
          </Typography>
          <Typography variant="body2">
            {blog?.content?.substring(0, 60)} ...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogCard;
