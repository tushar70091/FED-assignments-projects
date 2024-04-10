const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
const playlistSchema = mongoose.Schema({
    name: {
        type: String,
        default:"Liked Playlist"
    },
    artist: {
        type: String,
        default:""
    },
    cover_image: {
        type: String,
        default:""
    },
    songs: [{
        song_name: {
            type: String
        },
        audio: {
            type: String
        },
        totalTime:{
            type:String
        }
    }]
})

mongoose.model('PLAYLIST', playlistSchema);