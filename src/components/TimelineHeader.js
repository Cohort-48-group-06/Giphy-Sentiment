import { Link } from "react-router-dom";
const TimelineHeader = () => {
  return (
    <>
      <header>
        <section className="header">
          <div className="wrapper headerWrapper">
            <h1>Giphy Sentiment</h1>
            <h3>Timeline</h3>
            <Link to="/">
              <button type="button" className="returnButton">Return</button>
            </Link>
          </div>
        </section>
      </header>
    </>
  );
};

export default TimelineHeader;
