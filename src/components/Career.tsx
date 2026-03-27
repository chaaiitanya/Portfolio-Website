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
                <h4>Machine Learning Intern</h4>
                <h5>EdGate Tech, Bengaluru</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Orchestrated a production-grade NLP conversational AI chatbot with intent classification and entity extraction, reducing support ticket volume by 30%. Led a computer vision pipeline using CNNs achieving 95% image recognition accuracy.
            </p>
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
              Built AI-powered data enrichment services with NLP entity extraction, improving analytics accuracy by 35%. Operationalized high-throughput ML inference serving 500+ concurrent requests with sub-100ms latency. Led intelligent document ingestion pipelines using Apache Kafka and vector embeddings.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>3 Pillars Equity, Frisco</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Scaled AI anomaly detection models for financial transaction pipelines, reducing false positives by 30%. Productionized ML-based credit risk scoring replacing manual rule logic, improving loan decision throughput by 40%. Built a natural language query interface over financial databases, reducing analyst overhead by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>LMES, Dallas</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering LLM-driven voice and chat agents using Python and LangGraph across customer-facing channels. Orchestrating RAG pipelines integrating SQL/DynamoDB across 10+ microservices. Achieved 90% reduction in model-serving costs via hybrid local/cloud execution and semantic caching. Led monetization engineering unlocking $300K+ in annual contract value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
