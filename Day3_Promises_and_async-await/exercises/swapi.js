const fetch = require('node-fetch');

const getPlanetforFirstSpeciesInFirstMovieForPerson = (id) => new Promise((resolve, reject) => {
  const result = {
    name: '',
    firstFilm: '',
    firstSpecie: '',
    homeworldForSpecie: ''
  };

  fetch(`https://swapi.dev/api/people/${id}/`)
    .then(res => res.json())
    .then(peopleJson => {
      result.name = peopleJson.name;
      fetch(peopleJson.films[0])
        .then(res => res.json())
        .then(filmJson => {
          result.firstFilm = filmJson.title;
          fetch(filmJson.species[0])
            .then(res => res.json())
            .then(specieJson => {
              result.firstSpecie = specieJson.name;
              fetch(specieJson.homeworld)
                .then(res => res.json())
                .then(worldJson => result.homeworldForSpecie = worldJson.name)
                .then(() => resolve(result))
                .catch(err => reject(err));
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    })
    .catch(err => reject(err));
});

const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async (id) => {
  try {
    const personJson = await fetch(`https://swapi.dev/api/people/${id}/`).then(res => res.json());
    const filmJson = await fetch(personJson.films[0]).then(res => res.json());
    const specieJson = await fetch(filmJson.species[0]).then(res => res.json());
    const worldJson = await fetch(specieJson.homeworld).then(res => res.json());
    return {
      name: personJson.name,
      firstFilm: filmJson.title,
      firstSpecies: specieJson.name,
      homeworldForSpecies: worldJson.name
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = [getPlanetforFirstSpeciesInFirstMovieForPerson, getPlanetforFirstSpeciesInFirstMovieForPersonAsync];