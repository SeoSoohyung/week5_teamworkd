const UsersRepository = require("../../repositories/signup.repository");

const mockUserModel = () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  findByPk: jest.fn(),
});

describe("naver-users Repository Layer Test", () => {
  let UserRepository = new UsersRepository();
  UserRepository.Users = mockUserModel();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Method findAllUser", async () => {
    const getAllUsersResult = [];

    UserRepository.Users.findAll = jest.fn(() => {
      return getAllUsersResult;
    });

    const AllUsers = await UserRepository.findAllUser({});
    //findAll을 몇번 실행했는지
    expect(UserRepository.Users.findAll).toHaveBeenCalledTimes(1);

    //findAll 의 결과값이 return과 동일한가
    expect(AllUsers).toEqual(getAllUsersResult);
  });
});
