const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  addFriend,
  modifyUser,
  deleteUser,
  deleteFriend,
} = require("../../controllers/userController");


router.route("/").get(getAllUsers).post(createUser);


router.route("/:userId").get(getSingleUser).put(modifyUser).delete(deleteUser);


router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;