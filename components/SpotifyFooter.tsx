import React, {useEffect, useState} from "react";
import { Spotify } from '@icons-pack/react-simple-icons';
import getNowPlayingItem from "../js/spotifyAPI";
import Link from "next/link";

const SpotifyNowPlayingFooter = (props: { client_id: any; client_secret: any; refresh_token: any; }) => {
    type Result = {
        albumImageUrl: string;
        artist: string;
        isPlaying: boolean;
        songUrl: string;
        title: string;
    }
    
    const [result, setResult] = useState<Result>();

    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
        });
    }, []);
    
        if(result!==undefined) {
            return result.isPlaying ? (
                <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                    <span className="py-1 text-neutral-500">
                            <span><Link href={result.songUrl}>{result.title} by {result.artist} </Link> </span>
                    </span>
                    <Spotify className="inline-flex align-center" color='#1DB954' size={20} />
                </div>
            ) : (
                    <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                        <span className="py-1 text-neutral-500">
                            <span>Not Playing Anything </span>
                        </span>
                        <Spotify className="inline-flex align-center" color='#1DB954' size={20} />
                    </div>
            );
        }
        return (
            <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                <span className="py-1 text-neutral-500">
                    <span>Not Playing Anything </span>
                </span>
                <Spotify className="inline-flex align-center" color='#1DB954' size={20} />
            </div>
        )
    
}

export default SpotifyNowPlayingFooter;