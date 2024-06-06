const express = require("express");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const {
  createPlaylist,
  updatePlaylist,
  deletePlaylistById,
  getAllPlaylists,
  getPlaylistById,
} = require("../controller/playlistController");

const router = express.Router();

router
  .route("/playlists")
  .post(isAuthenticated, createPlaylist)
  .get(isAuthenticated, getAllPlaylists);

router
  .route("/playlists/:id")
  .get(isAuthenticated, getPlaylistById)
  .put(isAuthenticated, updatePlaylist)
  .delete(isAuthenticated, deletePlaylistById);

module.exports = router;
