const CommentsService = require('../services/comments.service');


class CommentsController {
  commentService = new CommentsService(); 

  getCommentsById = async (req, res, next) => {
    const comments = await this.commentService.getCommentsById();

    res.status(200).json({ data: comments })
  }

  createComment = async (req, res, next) => { 
    const { content } = req.body;
    const { postId } = req.params;
    const { nickname,userId } = res.locals.user;
 
    const createCommentsData = await this.commentService.createComment(userId,postId,content,nickname);

    res.status(201).json({ data: createCommentsData });
  }

  updateComment = async (req, res, next) => {

      const {commentId} = req.params;
      const {content} = req.body;

    const updateCommentsData = await this.commentService.updateComment(commentId, content);
      
    res.status(200).send({ comments: updateCommentsData });
      
    }

    deleteComment = async (req, res, next) => {
      const {commentId} = req.params

    const removeComments = await this.commentService.deleteComment(commentId);

    res.status(200).send({ comments: removeComments });
    }

  }

module.exports = CommentsController;