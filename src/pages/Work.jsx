import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import MetContext from "../context/met/MetContext";
import { useParams } from "react-router-dom";

function Work() {
  const { getWork, work, loading } = useContext(MetContext);

  const params = useParams();

  useEffect(() => {
    getWork(params.objectID);
  }, []);

  const {
    accessionYear,
    primaryImage,
    primaryImageSmall,
    department,
    objectName,
    title,
    culture,
    period,
    artistDisplayName,
    artistBeginDate,
    artistEndDate,
    medium,
    dimensions,
    objectURL,
  } = work;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="w-90">
          <img src={primaryImage} alt="Artwork" />
        </div>
        <div className="text-center mt-5">
          <h3>
            <strong>{title}</strong>
          </h3>
          <h4 className="mb-10">{`${
            artistDisplayName ? artistDisplayName : "Unknown"
          } (${culture} ${artistBeginDate} - ${artistEndDate})`}</h4>
          <p>{medium}</p>
          <p>{dimensions}</p>
        </div>
      </div>
    </>
  );
}

export default Work;
