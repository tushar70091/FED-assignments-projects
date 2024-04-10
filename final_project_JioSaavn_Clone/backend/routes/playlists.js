const express = require("express");
const mongoose = require("mongoose");
const app = express()
const router = express.Router()
const requireLogin = require('../middlewares/requireLogin');
const PLAYLIST = mongoose.model("PLAYLIST");
const USER = mongoose.model("USER");

router.post('/', () => {
    console.log("hello");
})


router.post('/uploadplaylist1', (req, res) => {
    const newPlaylist = new PLAYLIST({
        name: "Street Dreams",
        artist: "DIVINE, Karan Aujla",
        cover_image: "https://res.cloudinary.com/wittywebcloud/image/upload/v1712506963/album_cover_mn2991.jpg",
        songs: [
            {
                song_name: "100 Million",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712506969/100_Million_qlkrex.mp3",
                totalTime: '192'
            },
            {
                song_name: "Hisaab",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712506967/Hisaab_ybm2rw.mp3",
                totalTime: '207'
            },
            {
                song_name: "Nothing Lasts",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712506966/Nothing_Lasts_h7bhyn.mp3",
                totalTime: '176'
            },
            {
                song_name: "Straight Ballin",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712506971/Straight_Ballin_vpc4a8.mp3",
                totalTime: '211'
            },
            {
                song_name: "Tareefan",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712506967/Tareefan_kim8lh.mp3",
                totalTime: '174'
            },
            {
                song_name: "Top Class / Overseas",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712506972/Top_Class_Overseas_n3ghrw.mp3",
                totalTime: '288'
            }
        ]
    });

    newPlaylist.save()
        .then((playlist) => {
            res.send(playlist);
            console.log("Playlist saved successfully:", playlist);
        })
        .catch((err) => {
            console.error("Error saving playlist:", err);
        });
})

router.post('/uploadplaylist2', (req, res) => {
    const newPlaylist = new PLAYLIST({
        name: "Chobar",
        artist: "Arjan Dhillon",
        cover_image: "https://res.cloudinary.com/wittywebcloud/image/upload/v1712507497/album_cover_jedp77.jpg",
        songs: [
            {
                song_name: "Glorious",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507499/Glorious_e7uewr.mp3",
                totalTime: "163"
            },
            {
                song_name: "Suits You",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507499/Suits_You_dwdwz7.mp3",
                totalTime: "172"
            },
            {
                song_name: "Woah",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507507/Woah_f6d73d.mp3",
                totalTime: "174"
            }
        ]
    });
    newPlaylist.save()
        .then((playlist) => {
            res.send(playlist);
            console.log("Playlist saved successfully:", playlist);
        })
        .catch((err) => {
            console.error("Error saving playlist:", err);
        });
})

router.post('/uploadplaylist3', (req, res) => {
    const newPlaylist = new PLAYLIST({
        name: "G.O.A.T.",
        artist: "Diljit Dosanjh",
        cover_image: "https://res.cloudinary.com/wittywebcloud/image/upload/v1712507629/album_cover_rujrnc.jpg",
        songs: [
            {
                song_name: "Born To Shine",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507632/Born_To_Shine_y3hk8o.mp3",
                totalTime: "213"
            },
            {
                song_name: "Clash",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507632/Clash_rdwwq5.mp3",
                totalTime: "176"
            },
            {
                song_name: "G.O.A.T.",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507641/Goat_svw2cq.mp3",
                totalTime: "223"
            }
        ]
    });
    newPlaylist.save()
        .then((playlist) => {
            res.send(playlist);
            console.log("Playlist saved successfully:", playlist);
        })
        .catch((err) => {
            console.error("Error saving playlist:", err);
        });
})

router.post("/uploadplaylist4", (req, res) => {
    const newPlaylist = new PLAYLIST({
        name: "International Villager",
        artist: "Yo Yo Honey Singh",
        cover_image: "https://res.cloudinary.com/wittywebcloud/image/upload/v1712507762/album_cover_p8cyuy.jpg",
        songs: [
            {
                song_name: "Brown Rang",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507763/Brown_Rang_drxcc8.mp3",
                totalTime: "179"
            },
            {
                song_name: "Dope Shope",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507764/Dope_Shope_leyb89.mp3",
                totalTime: "188"
            },
            {
                song_name: "Gabru",
                audio: "https://res.cloudinary.com/wittywebcloud/video/upload/v1712507764/Gabru_bv3sdn.mp3",
                totalTime: "206"
            }
        ]
    });
    newPlaylist.save()
        .then((playlist) => {
            res.send(playlist);
            console.log("Playlist saved successfully:", playlist);
        })
        .catch((err) => {
            console.error("Error saving playlist:", err);
        });
})

router.post("/getallplaylists", (req, res) => {
    PLAYLIST.find()
        .then((playlists) => {
            res.send(playlists);
            console.log("All playlists fetched successfully:");
        })
        .catch((err) => {
            console.error("Error saving playlist:", err);
        });
})

router.post("/getsongs", (req, res) => {
    const playlistid = req.body.playlistid;
    PLAYLIST.findById(playlistid)
        .then((playlist) => {
            res.send(playlist);
            console.log("Playlist fetched successfully:");
        })
        .catch((err) => {
            console.error("Error saving playlist:", err);
        });
})


module.exports = router;
