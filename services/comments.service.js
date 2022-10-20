const CommentsRepository = require("../repositories/comments.repository");

class CommentsService {
  commentsRepository = new CommentsRepository();

  getCommentsById = async (postId) => {
    const findeComments = await this.commentsRepository.getCommentsById(postId);
    return findeComments;
  };

  createComment = async (userId, postId, content, nickname) => {
    const createCommentsData = await this.commentsRepository.createComment(
      userId,
      postId,
      content,
      nickname
    );

    return {
      commentId: createCommentsData.null,
      userId: createCommentsData.userId,
      postId: createCommentsData.postId,
      content: createCommentsData.content,
      nickname: createCommentsData.nickname,
      createdAt: createCommentsData.createdAt,
      updatedAt: createCommentsData.updatedAt,
    };
  };

  updateComment = async (commentId, content) => {
    try {
      await this.commentsRepository.updateComment(commentId, content);
      const updateCommentsData = await this.commentsRepository.CommentById(
        commentId
      );
      if (!updateCommentsData) throw { message: "해당 댓글이 없습니다." };

      return {
        commentId: updateCommentsData.null,
        userId: updateCommentsData.userId,
        postId: updateCommentsData.postId,
        content: updateCommentsData.content,
        nickname: updateCommentsData.nickname,
        createdAt: updateCommentsData.createdAt,
        updatedAt: updateCommentsData.updatedAt,
      };
    } catch (e) {
      return;
    }
  };

  deleteComment = async (commentId) => {
    await this.commentsRepository.deleteComment(commentId);
    const destroyCommentsData = await this.commentsRepository.CommentById(
      commentId
    );

    return destroyCommentsData;
  };
}

module.exports = CommentsService;
