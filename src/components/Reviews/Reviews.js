import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const { id } = useParams();
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetchMovieReviews(id).then(data => {
            //console.log(data.results);
            setReview(data.results)
        });
    }, [id])

    return (
        <div>
            {review.length > 0 ? (
                <ul>
                    {review.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>{author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : ("We don`t have any reviews for this movie")}
        </div>
    )
};

export default Reviews;