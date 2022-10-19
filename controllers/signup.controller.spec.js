const app = require('../app')
const request = reuqire('supertest');
const { USers } = require("../models")

test('닉네임은 3글자 이상 30글자 이하여야 한다', async()=>{
    const res = await request(app).post("/signup").send({nickname:"aa",password:"1234",confirm:"1234"});
    expect(res.status).toEqual(400);
})
test('비밀번호와 비밀번호 확인란이 같지 않으면 status 400', async()=>{
    const res = await request(app).post("/signup").send({nickname:"Seosu2000",password:"1234",confirm:"122334"});
    expect(res.status).toEqual(400);
})
test('비밀번호는 3글자 미만이면 status 400', async()=>{
    const res = await request(app).post("/signup").send({nickname:"aa",password:"14",confirm:"14"});
    expect(res.status).toEqual(201);
})
test('아이디 형식이 다 맞다면 status 201 ', async()=>{
    const res = await request(app).post("/signup").send({nickname:"Seosu2000",password:"1234",confirm:"1234"});
    expect(res.status).toEqual(201);
})