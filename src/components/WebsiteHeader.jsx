import "../css/websiteHeader.css";

export default function WebsiteHeader() {
  return (
    <div className="website-header__container">
      <div className="website-header__text">
        <h1 className="website-header__text__title">
          MetExp : The Met Museum Explorer
        </h1>
        <p className="website-header__text__descr">
          Welcome to <strong>MetExp</strong>, a React-based project designed to
          serve as both a study exercise and portfolio showcase. This digital
          gallery highlights the potential of modern web development
          technologies while offering an engaging platform to display artistic
          content.
        </p>
        <p className="website-header__text__descr">
          <strong>MetExp</strong> is a learning-oriented project, aiming to:
        </p>
        <ul className="website-header__text__list">
          <li>Demonstrate skills in <span>front-end</span> web development using <span>React</span> and <span>Redux</span>.</li>
          <li>Showcase the ability to create dynamic, visually appealing web applications.</li>
          <li>Provide a practical example of <span>state management</span> and <span>responsive design</span> implementation.</li>
        </ul>
        <p className="website-header__text__descr">
          Explore <strong>MetExp</strong> and experience the beauty of combining <strong>art</strong> with <strong>technology</strong>! 🎨💻📱
        </p>
      </div>
    </div>
  );
}
