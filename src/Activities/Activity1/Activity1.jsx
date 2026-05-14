import { Link } from "react-router-dom";
import "./Activity1.css";

function Activity1() {
  const members = [
    { name: "Jeary Mae Calderon", role: "Leader" },
    { name: "Leonilo Conarco", role: "Developer" },
    { name: "Jhudiel Corpenio", role: "Designer" },
    { name: "Jedia Vic Luise Boctoy", role: "Researcher" },
    { name: "Genesis Paul Sorio", role: "Presenter" },
  ];

  return (
    <div className="Activity1-container">
      <header className="header">
        <h1>ITE6 – Group Mikmik</h1>
        <p>Welcome to our ReactJS Group Landing Page</p>
      </header>

      <section className="about">
        <h2>About Our Group</h2>
        <p>
          We are BSIT students collaborating to build innovative and
          user-friendly web applications using modern technologies like React.
        </p>
      </section>

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
      </section>

      <footer className="footer">
        <p>© 2026 ITE6 – Group Mikmik. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Activity1;
