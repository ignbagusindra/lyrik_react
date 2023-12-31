import SongBar from './SongBar';

import PlayPause from './PlayPause';

const RelatedSongs = ({ song, i, data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
        key={`${song.key}-${artistId}`}
        song={song}
        i={i}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={() => handlePlayClick(song, i)}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
