import React from "react";
import ArtistResults from "../components/artists/ArtistResults";
import ArtSearch from "../components/artists/ArtSearch";

function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="mb-10">
          <strong>
            Browse the Metropolitan Museum of Art's Public Collection
          </strong>
        </h1>
        <p className="mb-5">
          Search by culture or artist name, results limited to public domain
          works of art
        </p>
      </div>
      <ArtSearch />
      <ArtistResults />
    </>
  );
}

export default Home;
