import { Link } from "react-router-dom";
import "./Activity1.css";

function Activity1() {
  const members = [
    { name: "Jeary Mae Calderon", role: "Leader" },
    { name: "Leonilo Conarco", role: "Developer" },
    { name: "Jhudiel Corpenio", role: "Designer" },
    { name: "Jedia Vic Luise Boctoy", role: "Researcher" },
    { name: "Genesis Paul Sorio", role: "Researcher" },
  ];

  return (
    <div className="Activity-container">
      {/* Header */}
      <header className="header">
        <h1>ITE6 - Group Mikmik</h1>
        <p>Welcome to our ReactJS Group Landing Page</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Our Group</h2>
        <p>
          We are BSIT students collaborating to build innovative and
          user-friendly web applications using modern technologies like React.
        </p>
      </section>

      {/* Members Section */}
      <section className="members">
        <h2>Group Members</h2>
        <div className="card-container">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* <link to="/Activity2">
          <button>Go to Activity 2</button>
        </link> */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ITE6 - Group Mikmik. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Activity1;
