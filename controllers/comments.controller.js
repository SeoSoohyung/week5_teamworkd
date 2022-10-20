const CommentsService = require("../services/comments.service");

class CommentsController {
  commentService = new CommentsService();

  getCommentsById = async (req, res, next) => {
    const {postId} = req.params;
    const comments = await this.commentService.getCommentsById(postId);

    res.status(200).json({ data: comments });
  };

  createComment = async (req, res, next) => {
    const { content } = req.body;
    const { postId } = req.params; 
    const { nickname, userId } = res.locals.user;

    const createCommentsData = await this.commentService.createComment(
      userId,
      postId,
      content,
      nickname
    );

    res.status(201).json({ data: createCommentsData });
  };

  updateComment = async (req, res, next) => {
    try {
      const { commentId } = req.params;
      const { content } = req.body;

      const updateCommentsData = await this.commentService.updateComment(
        commentId,
        content
      );

      res.status(200).send({ comments: updateCommentsData });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  deleteComment = async (req, res, next) => {
    try{
    const { commentId } = req.params;

    const removeComments = await this.commentService.deleteComment(commentId);

    res.status(200).send({ message:"댓글을 삭제하였습니다." });
    }catch(e){
      res.status(400).json({ message: e.message })
    }
  };
}

module.exports = CommentsController;
