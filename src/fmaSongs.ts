// Need export, because we want to import Songs in other files
export interface Song {
  title: string; // Title of the song
  artist: string; // Name of the artist
  duration: string; // Duration in MM:SS format
  file: string; // Link to the audio file
  cover: string; // Link to the cover image
  fmaLink: string; // Link to the Free Music Archive page
  favorite?: boolean; // Jim likes this song
}

// Sample songs data from Free Music Archive (FMA)
export const Songs: Song[] = [
  {
    title: "Dark Ambient",
    artist: "YuraSoop",
    duration: "02:48",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/6WcFNslGH6DmNMzK5yZawwbgKEq43qr5e74ciI29.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/qIEvcaXcFfLlImnWpYC7uoW7Tm3kcs0ZkENBzXOC.jpg&width=290&height=290&type=track",
    fmaLink: "https://freemusicarchive.org/music/yurasoop/single/dark-ambient/",
  },
  {
    title: "Solar Plexus",
    artist: "pat102",
    duration: "06:13",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/tkIAL5Hmaz1wLjCfwgLAdc6QgmX0XgSbwiX8cXdv.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/uVKnZFL4STf5Oe0oJeiGgF9J6v97MvPF2ltpjk91.png&width=290&height=290&type=track",
    fmaLink: "https://freemusicarchive.org/music/pat102/single/solar-plexus/",
    favorite: true,
  },
  {
    title: "Clouds (Ambient Background Music)",
    artist: "Alex Productions",
    duration: "02:45",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/YqAtDTM2Mg7ZNSH6tK8HHHmevFHzjIpz1NxHPrlw.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/hSlrKDPxvoW3vt2iG0A03R1vKzCXicZayjKozjKQ.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/alex-productions/single/ambient-background-music-clouds/",
    favorite: true,
  },
  {
    title: "Beautiful Ambient",
    artist: "YuraSoop",
    duration: "02:10",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2086X7PAohVSnFbkbDvti2CQaGYrWR4WnFL8zX1t.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/2wmEcKY3ZM8y5SphXcZBDCNGs1yG2lDuUvywbjhz.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/yurasoop/single/beautiful-ambient/",
  },
  {
    title: "New Age Beautiful Atmosphere.mp3",
    artist: "YuraSoop",
    duration: "03:48",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/fNTv0RemqERZcw0wauYgwWRGjU48CTrPRlxrC9en.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/sKaeaF48Cac5uDmUjWoY4Hw0CafqxOXcsDBSUfOE.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/yurasoop/single/new-age-beautiful-atmospheremp3/",
  },
  {
    title: "Drone Background Ambient.mp3",
    artist: "YuraSoop",
    duration: "01:58",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/Knj0FLCoVier9I3zWO4viw0EgYE8zslgJRwGbd9l.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/98wghHWpZ0rEh9mfzQSwBaja9Bc89g7ibIrGvQZd.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/yurasoop/single/drone-background-ambientmp3/",
  },
  {
    title: "Rainy Night Hong Kong -T2",
    artist: "Marcelo Bourdieu",
    duration: "13:10",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/xJwpqMsmDInUdFRUIDCzaZCzfWdGi3zkmBzDuo8m.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/hqkTTRPCLVUTWRWiyjqvVOUPcEVvkmegqSblGa8M.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/marcelo-bourdieu/view-of-dream/t2/",
  },
  {
    title: "Soft Inspiring Ambient",
    artist: "YuraSoop",
    duration: "02:03",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/ULBnzDaiK1TVS4A3aTth2osICrduypBsDhDjUgqj.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/IFbVaSZXbZgTMP1TUDCKvdJQFLMyZS3dz7TRpwOu.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/yurasoop/single/soft-inspiring-ambient/",
  },
  {
    title: "Lo-Fi Ambient Vibe.mp3",
    artist: "Sound Of Freedom",
    duration: "02:45",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/RMCJ4YZKaLCK2unISeHksSNiGCvK3VQpQrecSpp0.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/O8MdvTbNDafyA5YFjcNTyEd2RpaaIPkDLQkMtV1t.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/sound-of-freedom/single/lo-fi-ambient-vibemp3/",
  },
  {
    title: "Got 12 Brand New Notebooks",
    artist: "Jangwa",
    duration: "06:57",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/uuTfvDS9o2vigjYGZ8mZdRHgAitBAaEZRxIjSIMs.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=album_image/PkO54URatAUGJxEYWQ9iHBSF2t4gqZnABemPutPO.jpg&width=290&height=290&type=album",
    fmaLink:
      "https://freemusicarchive.org/music/Dilating_Times/celle-ep/got-12-brand-new-notebooks-on-my-shelf/",
  },
  {
    title: "Ad rem (demo)",
    artist: "Iliaque",
    duration: "03:52",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/vlPtnysmixmrRoxqVO4DnMNFRW81jKVaXEZ1kwaP.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/PxImNktQyVthjtvTPEnvgOPKM7m8TgabkS6MKaex.jpg&width=290&height=290&type=track",
    fmaLink: "https://freemusicarchive.org/music/Iliaque/single/ad-rem-demo/",
  },
  {
    title: "Free Yoga Music",
    artist: "Happiness In Music",
    duration: "03:30",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/dsEnxefAdsx7PovifVrC9AM5Zp74A9wOZg3saBtB.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/DdflK8zQwLrNbcnHeslKdJIDrTKxrGuDG6eUpinT.png&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/happiness-in-music/ambient-2/free-yoga-music-1/",
  },
  {
    title: "pentarmonic",
    artist: "Marcelo Bourdieu",
    duration: "02:50",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/wQFDrGlxRLRFv9WBt5cXaXyxKmj3plPYzXRE3wt0.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/jdmUYFUdbKFEW2Y0NwaQhv7UegTioBAsFWLXafmC.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/marcelo-bourdieu/view-of-dream/pentarmonic/",
  },
  {
    title: "Transmission",
    artist: "1000 Handz",
    duration: "02:30",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/EBobTykFjiwYM9QcSnHWXy4F5W6JhuQGrfMZ4aQE.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/ABkSACDcsHpp767VY36jBZENi9m8HlXS7oqJSFCG.png&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/1000-handz/cc-by-free-to-use-melodic-rap-instrumentals/transmission/",
  },
  {
    title: "Rainy Night Hong Kong T1",
    artist: "Marcelo Bourdieu",
    duration: "05:05",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/rqTfVJrgrrEsrfnZT4ZjVpM0XeNyodD13H7VHTyS.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/SrCFxSsy8MSAMWd45jZJPDKcqw4FfBOxSanlCnXM.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/marcelo-bourdieu/view-of-dream/t1/",
  },
  {
    title: "Blurred intent",
    artist: "Mark Lingard",
    duration: "08:00",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/alMHDWf77w3hLzlOXv28IriuBMfRisyIuzUJRtF3.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/7TvnX5VN4AfbwkoXbou34EWjcLbbzKBZPluDZ4Az.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/mark-lingard/single/blurred-intent/",
  },
  {
    title: "Taut",
    artist: "Chad Crouch",
    duration: "03:15",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Ambient_Atmospheres/Chad_Crouch_-_Taut.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=images/tracks/Track_-_20190416143014450&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/Chad_Crouch/Ambient_Atmospheres/Taut/",
  },
  {
    title: "This too shall pass",
    artist: "Mark Lingard",
    duration: "06:49",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/K282ielK77q7Ik0NQoS98FUQfZ3H44nVwOmCsKjl.mp3",
    cover:
      "https://freemusicarchive.org/image/?file=track_image/xdxk8woZSEHWcdZslJPvTMF6tnqhlM5ZwHKH4jRy.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/music/mark-lingard/single/this-too-shall-pass-1/",
  },
  {
    title: "A Better World",
    artist: "Amarent",
    duration: "04:35",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/kM6DxXK3pNKCVqemtvA4p1ZrAou88VKzrhrFnr1W.mp3",
    cover:
      "https://freemusicarchive.org/index.php/image/?file=track_image/DBMPntQYReHwcicBO2mJNfwNm0cnJAdTC5SzzK9d.jpg&width=290&height=290&type=track",
    fmaLink:
      "https://freemusicarchive.org/index.php/music/amarent/free-ambient-music/a-better-world/",
  },
];
