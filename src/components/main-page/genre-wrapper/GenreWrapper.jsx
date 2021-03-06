function GenreWrapper({ title, children }) {
  return (
    <div className="genre-wrapper">
      <span>{title}</span>
      <div className="movie-scroll-wrapper"></div>
      <div id="genres" className="genre-list">
        {children}
      </div>
      <div></div>
    </div>
  );
}
export default GenreWrapper;
