import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ArtworkItem({
  work: {
    title,
    primaryImage,
    primaryImageSmall,
    objectDate,
    artistDisplayName,
    objectID,
  },
}) {
  return (
    <div>
      <figure className="px-10 pt-10">
        <Link
          className="text-base-content text-opacity-40"
          to={`/artwork/${objectID}`}
        >
          <img
            src={primaryImage ? primaryImage : primaryImageSmall}
            alt="Artwork"
            className="rounded-xl"
          />
        </Link>
      </figure>
    </div>
  );
}

ArtworkItem.propTypes = {
  work: PropTypes.object.isRequired,
};

export default ArtworkItem;
