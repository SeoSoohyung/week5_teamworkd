
const CommentsRepository = require("../repositories/comments.repository")

class CommentsService {
    commentsRepository = new CommentsRepository();
  
    getCommentsById = async () => {
      const allComments = await this.commentsRepository.getCommentsById();
  
      allComments.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })

      return allComments.map(comment => {
        return {
          userId: comment.userId,
          commentId: comment.commentId,
          nickname: comment.nickname,
          content: comment.content, 
          createdAt: comment.createdAt
        }
      });
    }
  
    createComment = async (userId,postId,content,nickname) => {
      const createCommentsData = await this.commentsRepository.createComment(userId,postId,content,nickname);

      return {
        commentId: createCommentsData.null,
        userId: createCommentsData.userId,
        postId: createCommentsData.postId,
        content: createCommentsData.content,
        nickname: createCommentsData.nickname,
        createdAt: createCommentsData.createdAt,
        updatedAt: createCommentsData.updatedAt
      };
    }

    updateComment = async (commentId, content) => {
      await this.commentsRepository.updateComment(commentId, content);
      const updateCommentsData = await this.commentsRepository.CommentById(commentId);

      return {
        commentId: updateCommentsData.null,
        userId: updateCommentsData.userId,
        postId: updateCommentsData.postId,
        content: updateCommentsData.content,
        nickname: updateCommentsData.nickname,
        createdAt: updateCommentsData.createdAt,
        updatedAt: updateCommentsData.updatedAt
      };
    }

    deleteComment = async (commentId) => {
      await this.commentsRepository.deleteComment(commentId);
      const destroyCommentsData = await this.commentsRepository.CommentById(commentId);

      return destroyCommentsData;
      
    }

  }
  
  module.exports = CommentsService;