import React, {useEffect, useState} from "react";
import { Spotify } from '@icons-pack/react-simple-icons';
import getNowPlayingItem from "../js/spotifyAPI";
import Link from "next/link";

const SpotifyNowPlaying = (props: { client_id: any; client_secret: any; refresh_token: any; }) => {
    type Result = {
        albumImageUrl: string;
        artist: string;
        isPlaying: boolean;
        songUrl: string;
        title: string;
    }
    
    const [result, setResult] = useState<Result>();
    // const [refreshTimer, setRefresh] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            Promise.all([
                getNowPlayingItem(
                    props.client_id,
                    props.client_secret,
                    props.refresh_token
                ),
            ]).then((results) => {
                setResult(results[0]);
            });
        }, 20000);
        return () => clearInterval(interval);
    }, []);
    
        if(result!==undefined) {
            return result.isPlaying ? (
                <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                    <span className="py-1 text-neutral-500">
                            <span><Link href={result.songUrl}>{result.title} by <i>{result.artist}</i> </Link> </span>
                            <Spotify className="inline-flex align-text-bottom" color='#1DB954' size={20} />
                    </span>
                </div>
            ) : (
                    <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                        <span className="py-1 text-neutral-500">
                            <span>Not Playing Anything </span>
                            <Spotify className="inline-flex align-text-bottom" color='#1DB954' size={20} />
                        </span>
                    </div>
            );
        }
        return (
            <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                <span className="py-1 text-neutral-500">
                    <span>Not Playing Anything </span>
                    <Spotify className="inline-flex align-text-bottom" color='#1DB954' size={20} />
                </span>
            </div>
        )
    
}

export default SpotifyNowPlaying;