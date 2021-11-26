import React from "react";

function SongLyric ({ lyric }) {
    return (
        lyric && (
    <div className="lyric-box">
    <p>{lyric.lyrics}</p>
    </div>
      )
    );
}

export default SongLyric;