import React, { useEffect, useState } from 'react';


const Movie = ({mov}) => <div className='movie'>
  <h1>{mov.title}</h1>
  <h2>{mov.original_title}</h2>
  <h3>Release year: {mov.release_date}</h3>
  <img src={mov.image} alt="" />
  <p>{mov.description}</p>
</div>

function Movies() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://ghibliapi.dev/films/');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="movies">
      {data && data?.sort((a, b) => a.release_date.localeCompare(b.release_date)).map(mov => <Movie mov={mov} />)}
    </div>
  );
}

export default Movies;
