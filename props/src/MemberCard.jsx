
import React from "react";

function MemberCard({ name, role, photo, bio }) {
  return (
    <div className="member-card">
      <img src={photo} alt={name} className="member-photo" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}

export default MemberCard;
