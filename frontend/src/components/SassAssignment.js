import React, { Component } from "react";
import { Link } from "react-router-dom";
class SassAssignment extends Component {
  tabClick = () => {
    console.log("this is -------------> ", this);
  };
  render() {
    return (
      <div className="container-fluid containerWrap">
        <header>
          <h1>
            <span className="blue-text">Blue</span> Developer Directory
          </h1>
          <h2>
            Find A Developer <span className="white-text">NOW</span>
          </h2>
        </header>

        <nav id="menu">
          <ul>
            <li className="menuitem">
              <Link to="#" onClick={() => this.tabClick()}>
                Home
              </Link>
            </li>
            <li className="menuitem">
              <Link to="about.html">About Us</Link>
            </li>
            <li className="menuitem">
              <Link to="browse.html">Browse Developers</Link>
            </li>
            <li className="menuitem">
              <Link to="contact.html">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <aside id="aside1">
          <nav id="leftmenu">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/empProfile">Add Employees</Link>
              </li>
              <li>
                <Link to="browse.html">SEO</Link>
              </li>
              <li>
                <Link to="browse.html">PHP</Link>
              </li>
              <li>
                <Link to="browse.html">Ajax</Link>
              </li>
              <li>
                <Link to="browse.html">jQuery</Link>
              </li>
              <li>
                <Link to="browse.html">Web design</Link>
              </li>
              <li>
                <Link to="browse.html">Web Programming</Link>
              </li>
              <li>
                <Link to="browse.html">Content Creation</Link>
              </li>
              <li>
                <Link to="browse.html">Internet Marketing</Link>
              </li>
              <li>
                <Link to="browse.html">XHTML Templates</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <section id="content" className="content1">
          <h2>Welcome to Blue Developer Directory! </h2>
          <img
            className="float"
            src="images/web.jpg"
            alt="web developer directory"
          />
          <h4>Who Are We?</h4>
          <p>
            We are a fictional website and service that list top web developers
            around the world. Search and browse fictional web developers on our
            website absolutley FREE!
          </p>
          <h4>What Skills Do Our Developers Have?</h4>
          <p>
            Our listed fictional web developers skill ranges from Graphic design
            with Photoshop, Illustrator and Fireworks to markup languages like
            HTML5, XHTML and XML to programming languages such as Javascript,
            PHP, Python and ASP
          </p>
        </section>

        <section id="content" className="content2">
          <h2>Latest Blue Developers</h2>
          <div className="developer">
            <h4>Adam Sullivan</h4>
            <ul>
              <li>
                <strong>Location: </strong> Boston USA
              </li>
              <li>
                <strong>Skills: </strong> HTML/CSS, PHP, ROR
              </li>
              <li>
                <strong>Availability:</strong> Full-Time
              </li>
            </ul>
            <Link to="#">View Profile</Link>
          </div>

          <div className="developer">
            <h4>Rick Monroe</h4>
            <ul>
              <li>
                <strong>Location: </strong> Boston USA
              </li>
              <li>
                <strong>Skills: </strong> HTML/CSS, PHP, ROR
              </li>
              <li>
                <strong>Availability:</strong> Full-Time{" "}
              </li>
            </ul>
            <Link to="#">View Profile</Link>
          </div>

          <div className="developer">
            <h4>Michael Oliver</h4>
            <ul>
              <li>
                <strong>Location: </strong> Boston USA
              </li>
              <li>
                <strong>Skills: </strong> HTML/CSS, PHP, ROR
              </li>
              <li>
                <strong>Availability:</strong> Full-Time
              </li>
            </ul>
            <Link to="#">View Profile</Link>
          </div>

          <div className="developer">
            <h4>Megan Jennings</h4>
            <ul>
              <li>
                <strong>Location: </strong> Boston USA
              </li>
              <li>
                <strong>Skills: </strong> HTML/CSS, PHP, ROR
              </li>
              <li>
                <strong>Availability:</strong> Full-Time
              </li>
            </ul>
            <Link to="#">View Profile</Link>
          </div>
        </section>
        <footer>
          <p>Posted by: Hege Refsnes</p>
          <p>
            Contact information:{" "}
            <Link to="mailto:someone@example.com">someone@example.com</Link>.
          </p>
        </footer>
      </div>
    );
  }
}

export default SassAssignment;

// import React, { Component } from "react";

// class MyComponent extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//       </div>
//     );
//   }
// }
// class Header extends Component {
//   render() {
//     return 2 + 2 === 5 ? <div>Hello World</div> : <div>ARRRRRRRRRRRRRR...</div>;
//   }
// }

// export default MyComponent;
