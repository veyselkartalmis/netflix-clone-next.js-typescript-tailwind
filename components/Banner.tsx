import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../typings";

interface Props {
    netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        
    }, []);

    return (
        <div>

        </div>
    )
}

export default Banner