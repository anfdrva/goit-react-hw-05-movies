import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const Cast = () => {
    const { id } = useParams();
    const [contentCast, setContentCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(id).then(data => {
            //onsole.log(data);
            setContentCast(data.cast);
        });
    }, [id]);

    //console.log(contentCast);

    return (
        <div>
            <ul>
                
                {contentCast && contentCast.map(({ profile_path, name, character, cast_id }) => (
                    <li key={cast_id}>
                        <img src={profile_path && `https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
                        <p>{name}</p>
                        {character && (
                            <p>
                                <span>Character:</span>
                                {character}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Cast;