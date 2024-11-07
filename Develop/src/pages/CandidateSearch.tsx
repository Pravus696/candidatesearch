import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../types/Candidate";

const CandidateSearch = () => {
  const [candidate, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      searchGithub().then((data) => {
        setCandidates(data);
        setIsLoading(false);
      });
    }
    catch (err) {
      console.log('an error occurred', err);
    }
  }
);

  if (isLoading) {
    return (
      <section>
        <h1>Candidate Search</h1>
        <div>
          <p>Loading...</p>
        </div>
      </section>
    );
  }
  return (
    <section>
      <h1>Candidate Search</h1>
        <p>Your Candidates Here</p>
      </section>
    
  );
};

export default CandidateSearch;
