import React , { useState } from 'react';

const Form = (props) => {
    const {movies, setMovies} = props;

    const [movie, setMovie] = useState({
        name:'',
        year:1920
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, movie]);
        setMovie({
            name:'',
            year:1920
        })
    }

    const handleMovie = (e) => {
        setMovie({...movie, [e.target.name]:e.target.value})
    }
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    {
                        movie.name.length < 1 ?
                        <p>Please Enter a movie </p>:
                        ''
                    }
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name='name' value={movie.name} onChange={handleMovie} />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input type="number" name='year' value={movie.year} onChange={handleMovie}/>
                    {
                        movie.year < 1920 || movie.year >= 2024 ?
                        <p>Are you serious? </p>:
                        ''
                    }
                </div>
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    );
};
export default Form;