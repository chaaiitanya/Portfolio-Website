import "./styles/TechStack.css";

const categories = [
  {
    title: "ML & AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "HuggingFace Transformers", "Scikit-learn", "NVIDIA Triton", "TorchServe", "OpenCV"],
  },
  {
    title: "GenAI & LLM Systems",
    skills: ["LangGraph", "LangChain", "RAG", "Prompt Engineering", "Qdrant", "Chroma", "Multi-Agent Orchestration", "Tool Use / Function Calling"],
  },
  {
    title: "Agent Evaluation & QA",
    skills: ["LangSmith", "LLM-as-Judge", "KPI Design", "Benchmarking Pipelines", "Failure Mode Analysis", "TDD", "Pytest", "ROUGE / F1 / Hallucination Rate"],
  },
  {
    title: "MLOps & Cloud Infrastructure",
    skills: ["AWS", "Docker", "Kubernetes", "Kafka", "Redis", "GitHub Actions", "Prometheus", "Grafana"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-categories">
        {categories.map((cat) => (
          <div key={cat.title} className="techstack-category">
            <div className="category-title">{cat.title}</div>
            <div className="category-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="category-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
