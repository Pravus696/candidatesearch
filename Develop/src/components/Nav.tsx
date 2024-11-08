const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* navigate to the home page */}
            <a href="/">Home</a>
          </li>
          <li>
            {/* navigate to the potential candidate search page */}
            <a href="/Potential Candidate">Search Potential Candidate</a>
          </li>
          <li>
            {/* navigate to the saved candidate page */}
            <a href="/savedCandidates">Saved Potential Candidate</a>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
