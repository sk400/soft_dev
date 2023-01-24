// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=nextjs-in-a-week

import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");

  let blogPosts = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    let myFile = await fs.promises.readFile(`blogdata/${element}`, "utf-8");
    blogPosts.push(JSON.parse(myFile));
  }

  res.status(200).json(blogPosts);
}
