import React from "react";
import { useContext } from "react";
import Spinner from "../layout/Spinner";
import ArtworkItem from "./ArtworkItem";
import MetContext from "../../context/met/MetContext";

function ArtistResults() {
  const { works, loading } = useContext(MetContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {works.length > 0
          ? works.map((work) => <ArtworkItem key={work.objectID} work={work} />)
          : ""}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default ArtistResults;
