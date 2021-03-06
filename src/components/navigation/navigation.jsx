import { NavLink, Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  const search = (value) => {
    window.location.replace(`/search?query_term=${value}`);
    // window.location.reload();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li className="nav-title">
          <a href="/">
            <img src="https://pngimg.com/uploads/triangle/triangle_PNG30.png" />
          </a>
          <Link to={'/'}>React Movies</Link>
        </li>
        {/* <!-- MAIN TITLE -->
        {/* <!-- SEARCH --> */}
        <li className="nav-search">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="svg-inline--fa fa-search fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="#fed700"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
          <input
            type="text"
            name=""
            placeholder="სწრაფი ძიება"
            onKeyUp={
              ('keyup',
              ({ key, target }) => {
                if (key === 'Enter') {
                  search(target.value);
                }
              })
            }
          />
          {/* <!-- HIDDEN SEARCH RESULTS --> */}
          <ul id="searchResults" className="search-results-ul"></ul>
          {/* <!-- HIDDEN SEARCH RESULTS --> */}
        </li>
        {/* <!-- SEARCH --> */}

        {/* <!-- NAV ITEMS --> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/search">
            ფილმები
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie?id=8462">
            სურვილები
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/auth">
            ავტორიზაცია
          </NavLink>
        </li>
        {/* <!-- NAV ITEMS --> */}

        {/* <!-- RESPONSIVE NAV ITEMS --> */}

        <div className="navbar-responsive">
          <li>
            <a href="/search">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="film"
                className="svg-inline--fa fa-film fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="#fed700"
                  d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="wishlist.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xmlSpace="preserve">
                <metadata>
                  {' '}
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon{' '}
                </metadata>
                <g>
                  <g>
                    <g>
                      <path
                        fill="#fed700"
                        d="M921.9,239.5L692.3,10H78.1v980h843.7V239.5L921.9,239.5z M712.9,129.7l89.3,89.3h-89.3V129.7z M851.7,919.9H148.3V80.1h494.5v209h209V919.9z"
                      />
                      <rect
                        fill="#fed700"
                        x="452.7"
                        y="392"
                        width="340.3"
                        height="70.1"
                      />
                      <polygon
                        fill="#fed700"
                        points="269.3,567.3 241.8,539.7 192.2,589.3 269.3,666.4 396.8,539 347.2,489.4 "
                      />
                      <polygon
                        fill="#fed700"
                        points="269.3,741.9 241.8,714.4 192.2,764 269.3,841.1 396.8,713.7 347.2,664.1 "
                      />
                      <polygon
                        fill="#fed700"
                        points="269.3,392.6 241.8,365 192.2,414.6 269.3,491.8 396.8,364.3 347.2,314.7 "
                      />
                      <rect
                        fill="#fed700"
                        x="452.7"
                        y="566.8"
                        width="340.3"
                        height="70.1"
                      />
                      <rect
                        fill="#fed700"
                        x="452.7"
                        y="741.6"
                        width="340.3"
                        height="70.1"
                      />
                    </g>
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="register.html">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-circle"
                className="svg-inline--fa fa-user-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512">
                <path
                  fill="#fed700"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>
            </a>
          </li>
        </div>
        {/* <!-- RESPONSIVE NAV ITEMS --> */}
      </ul>
    </nav>
  );
}

export default Navigation;
