import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI/ML Engineer with 3+ years of experience building and evaluating GenAI and Agentic AI systems across fintech and healthcare. Currently building LLM evaluation infrastructure for an AI health coaching agent — designing ground-truth datasets, per-field accuracy metrics, LLM-as-judge frameworks, and CI-integrated regression suites. Prior production experience spans LangGraph agentic workflows, RAG pipelines, and ML systems at scale.
        </p>
      </div>
    </div>
  );
};

export default About;
