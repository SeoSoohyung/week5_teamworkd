const CommentsRepository = require("./comments.repository");
const express = require("express");
// const Comments = require("../routes/comments.routes");
const request = require("supertest");
const app = require("../app"); 

const commentsRepository = new CommentsRepository();
const commentTest = commentsRepository.CommentById



test("댓글 조회가 되는지 !", async() => {
    const commentsId = 1;
    const comment = "테스트코드용";

    const findComment = await commentsRepository.CommentById(commentsId);
    expect(comment).toEqual(findComment.comment)
})

test("댓글 조회가 안되면 null 반환!", async() => {
    const commentsId = 2;
    const comment = "테스트코드";

    const findComment = await commentsRepository.CommentById(commentsId);
    const res = await request(app).get('/comments/100');
    console.log(res.body)
    expect(res.body).toBeNull();
    expect(res.status).toBe(200)
})

test("댓글 조회테스트", async() => {
    const commentsId = 2;
    const comment = "테스트코드";

    // const findComment = await commentsRepository.CommentById(commentsId);
    const res = await request(app).get('/comments/100');
    console.log(res.body)
    expect(res.body.data).toStrictEqual([]);
    expect(res.status).toBe(200)
})

