const express = require("express");
const upload = require("../middlewares/uploads");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const {
  addSong,
  getAllSongs,
  getSongById,
  deleteSongById,
} = require("../controller/songController");
const router = express.Router();

router.route("/songs").post(isAuthenticated, upload, addSong);
router.route("/songs").get(isAuthenticated, getAllSongs);
router.route("/songs/:id").get(isAuthenticated, getSongById);
router.route("/songs/:id").delete(isAuthenticated, deleteSongById);

module.exports = router;
