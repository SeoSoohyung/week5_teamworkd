const { Users } = require("../models");

class UserRepository {
  constructor(){
    this.Users = Users;
  }
  findAllUser = async (nickname) => {
    const users = await this.Users.findAll({where: {nickname}});

    return users;
  };

  createUser = async (nickname, password, salt) => {
    const createUserData = await this.Users.create({
      nickname,
      password,
      salt,
    });

    return createUserData
  };
}

module.exports = UserRepository;
