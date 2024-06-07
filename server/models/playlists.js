const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playlistsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  song: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
      required: true,
    },
  ],
});

const Playlist = mongoose.model("Playlist", playlistsSchema);

module.exports = Playlist;
