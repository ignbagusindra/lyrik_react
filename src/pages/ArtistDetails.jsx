import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {

    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    // console.log(songid);
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    const handlePauseClick = () => {

        dispatch(playPause(false));
    
      };
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

    if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details.." />;
    if (error) return <Error />; 

    return (
        <div className="flex flex-col mt-5">
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10 mt-10">
                <h2 className="text-white text-3xl font-bold">Lirik</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ?
                    songData?.sections[1].text.map((line, i) => (
                        <p className="text-gray-300 text-base my-1"><i>{line}</i></p>
                    )) : <p className="text-gray-300 text-base my-1">Sorry, lirik tidak tersedia..</p> }
                </div>
            </div>
            <RelatedSongs 
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
        </div>
    );
};
export default ArtistDetails;
