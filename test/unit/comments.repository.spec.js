const CommentsRepository = require("../../repositories/comments.repository");
const express = require("express");
// const Comments = require("../routes/comments.routes");
const request = require("supertest");
const app = require("../../app"); 

const commentsRepository = new CommentsRepository();
commentTest = commentsRepository.CommentById()

test("댓글 조회가 안되면 null 반환!", async() => {
    const commentId = 1;
    const content = "테스트코드";

    const findComment = await commentsRepository.CommentById(content);
    const res = await request(app).get('/comments/100');
    expect(res.status).toBe(200)
})

test("댓글 조회테스트", async() => {
    const commentId = 2;
    const content = "테스트코드";

    // const findComment = await commentsRepository.CommentById(commentsId);
    const res = await request(app).get('/comments/100');
    console.log(res.body)
    expect(res.body.data).toStrictEqual([]);
    expect(res.status).toBe(200)
})

