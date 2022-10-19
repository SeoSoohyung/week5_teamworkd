// const { PostsController } = require("./posts.controller");
// const { PostService } = require("../services/posts.service");

// describe("postsController", ()=>{
//     const postService = new PostService();
//     const postsController = new PostsController();

//     test('게시물을 잘 받아서 status 200이 잘 떠야함', () =>{
//         const postService.createPost
//     })

// })
const request = require("supertest");
const app = require("../app");
const db = require("../models");

beforeAll(async () => {
  await db.sequelize.sync();
});

describe("POST /posts", () => {
  it("GET status 200", async () => {
    await request(app).get("/posts").expect(200);
  });
});

afterAll(async () => {
  await db.sequelize.sync({ force: true });
});
