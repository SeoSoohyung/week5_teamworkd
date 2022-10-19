const authMiddleware = require("./auth-middleware");
jest.mock("../models");
const { Users } = require("../models");

test("정상적인 토큰을 넣은 경우 User.findByPk가 실행된다.", () => {
  Users.findByPk = jest.fn();

  authMiddleware(
    {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjA3MjM2Nn0.AAL5fxrJE5MZimSz0WSizPEbaql9Olum66_cPKMZKsQ",
      },
    },
    {
      status: () => ({
        send: () => {},
      }),
      locals: {},
    }
  );

  expect(Users.findByPk).toHaveBeenCalledTimes(1);
});

test("변조된 토큰으로 요청한 경우 로그인 후 사용하세요 라는 에러 메세지가 뜬다.", () => {
  const mockedSend = jest.fn();

  authMiddleware(
    {
      headers: {
        authorization: "Bearer ",
      },
    },
    {
      status: () => ({
        send: mockedSend,
      }),
      locals: {},
    }
  );

  expect(mockedSend).toHaveBeenCalledWith({
    errorMessage: "로그인 후 이용 가능한 기능입니다.",
  });
});
