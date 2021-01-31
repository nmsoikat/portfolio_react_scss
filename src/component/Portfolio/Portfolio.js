import react from "react";
import PortfolioData from "./PortfolioData";
import PortfolioMenu from "./PortfolioMenu/PortfolioMenu";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

class Portfolio extends react.Component {
  state = {
    projects: PortfolioData(),
  };

  render() {
    let { category } = this.props;
    // console.log(category, category === 'react');
    return (
      <section className="portfolio-area">
        <section className="my-projects">
          <section className="projects">
            {this.state.projects.map((item, index) => {
              console.log("includes", item.categories.includes(category));
              if (item.categories.includes(category)) {
                return (
                  <PortfolioItem
                    key={index}
                    link={item.link}
                    imgPath={item.image}
                    description={item.description}
                  />
                );
              }
            })}
          </section>
        </section>

        <aside className="project-menu-wrap">
          <PortfolioMenu />
        </aside>
      </section>
    );
  }
}

export default Portfolio;
