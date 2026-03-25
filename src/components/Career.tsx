import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>GD Research Pvt Ltd</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Architected AI-powered data enrichment services leveraging NLP entity extraction, improving downstream analytics by 35%. Designed high-throughput async ML inference APIs handling 500+ requests with sub-100ms latency on Kubernetes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>3 Pillars Equity</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and productionized ML-based credit risk scoring and anomaly detection models, reducing false positives by 30%. Developed a natural language text-to-SQL interface for non-technical stakeholders and engineered intelligent data pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>LMES</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and deployed production LLM-powered voice and chat agents using LangGraph and Python. Built RAG-based retrieval pipelines integrating DynamoDB/SQL for automated query resolution across 10+ microservices. Achieved 90% reduction in model-serving costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
