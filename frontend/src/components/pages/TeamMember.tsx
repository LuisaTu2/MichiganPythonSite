import "./TeamMember.css";

interface TeamMemberProps {
  firstName: string;
  lastName: string;
  picture: string;
  blurb: string;
  contact: string;
  swap?: boolean;
}

const TeamMember = ({
  firstName,
  lastName,
  picture,
  blurb,
  contact,
  swap = false,
}: TeamMemberProps) => {
  return (
    <div className={`team-member-container ${swap ? "swap" : ""}`}>
      <div className="team-member-info">
        <div className="team-member-name">
          {firstName} {lastName}
        </div>
        <div className="team-member-blurb">{blurb}</div>
        <br />
        {contact && (
          <div className="team-member-contact">Contact: {contact}</div>
        )}
      </div>
      <div className="team-member-photo-container">
        <img src={picture} className="team-member-photo" />
      </div>
    </div>
  );
};

export default TeamMember;
