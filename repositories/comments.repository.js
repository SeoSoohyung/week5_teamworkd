const { Comments } = require('../models');

class CommentsRepository {
    getCommentsById = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const comments = await Comments.findAll();

    return comments;
  }
  
   CommentById = async (commentId) => {
    const comment = await Comments.findByPk(commentId)

    return comment;
  }

  createComment = async (userId,postId,content,nickname) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createCommentsData = await Comments.create({ userId,postId,content,nickname });
    return createCommentsData;
  }

  updateComment = async (commentId,content) => {
    const updateCommentsData = await Comments.update({content},{where: {commentId}});
    console.log(content)
    return updateCommentsData;
  }
 

  deleteComment = async (commentId) => {
    const deleteCommentsData = await Comments.destroy({ where: {commentId}});

    return deleteCommentsData;
  }

}

module.exports = CommentsRepository;
