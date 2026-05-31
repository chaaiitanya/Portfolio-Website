import "./styles/TechStack.css";

const techItems = [
  { name: "React", img: "/images/react2.webp" },
  { name: "Next.js", img: "/images/next2.webp" },
  { name: "Node.js", img: "/images/node2.webp" },
  { name: "Express", img: "/images/express.webp" },
  { name: "MongoDB", img: "/images/mongo.webp" },
  { name: "MySQL", img: "/images/mysql.webp" },
  { name: "TypeScript", img: "/images/typescript.webp" },
  { name: "JavaScript", img: "/images/javascript.webp" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-grid">
        {techItems.map((tech) => (
          <div key={tech.name} className="techstack-item">
            <div className="techstack-logo">
              <img src={tech.img} alt={tech.name} />
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
