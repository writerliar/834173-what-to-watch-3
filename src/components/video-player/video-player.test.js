import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film = {
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `https://unsplash.it/280/175/`,
};

it(`VideoPlayer is renderer correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={false}
        src={film.src}
        poster={film.poster}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});