import MemberCard from "./MemberCard";
import member1 from "./assets/member1.jpg";
import member2 from "./assets/member2.jpg";
import member3 from "./assets/member3.jpg";
import "./Team.css";


function Team() {
  const members = [
    {
      id: 1,
      name: "Abdul Hakim",
      role: "Frontend Developer",
      photo: member1,
      bio: "Passionate about building clean UI with React."
    },
    {
      id: 2,
      name: "Kebede",
      role: "Backend Developer",
      photo: member2,
      bio: "Enjoys designing APIs and working with databases."
    },
    {
      id: 3,
      name: "Abebe",
      role: "UI/UX Designer",
      photo: member3,
      bio: "Focuses on user-centered design and accessibility."
    }
  ];

  return (
    <div>
      <h2>Our Team</h2>

      <div className="team-container">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
