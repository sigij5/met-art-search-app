import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">MET Artwork Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search The MET API and see Artwork details. Utilizing The
        Met{" "}
        <strong>
          <a
            className="underline"
            href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access"
          >
            Open Access Initiative
          </a>
        </strong>
      </p>
      <p className="text-lg">
        App by:{" "}
        <a className="text-lg" href="https://github.com/sigij5">
          Sigi Jaeckel
        </a>
      </p>
      <p className="text-lg">Version: 1.0.0</p>
    </div>
  );
}

export default About;
