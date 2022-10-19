const express = require("express"); // express에서 제공되는 Router 함수를 사용해 Router 생성 **거의 디폴트값으로 쓰는것
const app = express(); 
const router = require("./routes");
const api = require("./routes");


app.use(express.urlencoded({ extended: true })); 
app.use(express.json(), router); 

app.use("/api", api)
const {swaggerUi,specs} = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))


app.listen(3000, () => {
    console.log("서버가 3000포트로 열렸습니다.");
});

module.exports = app;
                    