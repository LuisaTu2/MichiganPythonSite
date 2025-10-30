import "./Team.css";
import tm1 from "../../assets/tm1.png";
import tm2 from "../../assets/tm2.png";
import TeamMember from "./TeamMember";

const TeamPage = () => {
  const team = [
    {
      firstName: "Dan",
      lastName: "Yeaw",
      photo: tm1,
      blurb: `At a Michigan Python event, you can expect to discuss: Python—Basic and
      advanced techniques, PEPs, new versions, implementations, etc. Web
      Development—Django, Flask, Pyramid, Requests, etc. Data Science —machine
      learning, neural networks, TensorFlow, etc. IoT—Raspberry Pi, Arduino,
      maker culture, etc.`,
      contact: "tm1@gmail.com",
    },
    {
      firstName: "Evan",
      lastName: "Stone",
      photo: tm2,
      blurb: `Plus anything else Python-related! Members of the Michigan Python
      community are open, considerate, and respectful. For more information,
      please see our Code of Conduct.`,
      contact: "tm2@gmail.com",
    },
  ];
  return (
    <div className="team-page">
      {team.map((t, i) => (
        <TeamMember
          key={t.firstName + t.lastName}
          firstName={t.firstName}
          lastName={t.lastName}
          picture={t.photo}
          blurb={t.blurb}
          contact={t.contact}
          swap={i % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default TeamPage;
