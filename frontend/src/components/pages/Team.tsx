import "./Team.css";
import TeamMember from "./TeamMember";
import { TEAM_MEMBERS } from "./utils";

const TeamPage = () => {
  return (
    <div className="team-page">
      {TEAM_MEMBERS.map((t, i) => (
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
