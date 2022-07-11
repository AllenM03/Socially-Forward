const router = require('express').Router;

const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  addReaction,
  modifyThought,
  deleteThought,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/ThoughtId
// /api/Thoughts/:ThoughtId/reactions
// /api/Thoughts/:ThoughtId/reactions/:reactionId
// /api/Thoughts

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:thoughtId')
    .get(getThoughtById);

router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
