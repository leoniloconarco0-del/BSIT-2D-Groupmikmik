import { Link } from "react-router-dom";
import "./FinalMco.css";

function FinalMco() {
  const activities = [
    {
      title: "Activity 1",
      description: "ReactJS Group Landing Page",
      path: "/activity1",
    },
    {
      title: "Activity 2",
      description: "Weather Checker Application",
      path: "/activity2",
    },
    {
      title: "Activity 3",
      description: "Luxury Cars JSON Display",
      path: "/activity3",
    },
    {
      title: "Activity 4",
      description: "Philippines Weather API App",
      path: "/activity4",
    },
  ];

  const members = [
    { name: "Jeary Mae Calderon", role: "Leader" },
    { name: "Leonilo Conarco", role: "Developer" },
    { name: "Jhudiel Corpenio", role: "Designer" },
    { name: "Jedia Vic Luise Boctoy", role: "Researcher" },
    { name: "Genesis Paul Sorio", role: "Presenter" },
  ];

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>ITE6</h2>
        <p>Group Mikmik</p>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Activities</a>
          <a href="#">Members</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* HERO */}
        <div className="hero">
          <h1>Major Course Output (MCO)</h1>
          <p>
            Compilation of Activities <br />
            Application Development and Emerging Technologies
          </p>
        </div>

        {/* MEMBERS */}
        <section className="section">
          <h2>Group Members</h2>

          <div className="members-grid">
            {members.map((member, index) => (
              <div className="member-card" key={index}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="section">
          <h2>Activities</h2>

          <div className="activity-grid">
            {activities.map((activity, index) => (
              <Link to={activity.path} className="activity-card" key={index}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>

                <span>Open Activity →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default FinalMco;
