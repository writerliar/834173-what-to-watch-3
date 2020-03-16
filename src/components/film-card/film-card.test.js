import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {MemoryRouter} from "react-router-dom";

const film = {
  id: 1,
  name: `Harry Potter and the Goblet of Fire`,
  posterBig: `https://unsplash.it/280/175/`,
  poster: `https://unsplash.it/280/175/`,
  background: `https://unsplash.it/280/175/`,
  backgroundColor: `#ffffff`,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `Самый увлекательный в мире фильм`,
  genre: `drama`,
  rating: 6.7,
  score: 290,
  director: `Tarantino`,
  starring: [`Donatello`, `Rafael`, `Leonardo`],
  duration: 90,
  year: 2067,
  favorite: false,
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={film}
            onFilmCardHover={() => {}}
            onFilmCardLeave={() => {}}
            renderPlayer={() => {}}
            onTitleOfFilmClick={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
