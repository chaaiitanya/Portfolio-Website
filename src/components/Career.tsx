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
                <h4>Data Scientist</h4>
                <h5>GD Research Pvt Ltd, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built AI-powered data enrichment services with NLP entity extraction, improving analytics accuracy by 35%. Designed and automated end-to-end data ingestion pipelines using Apache Kafka and vector embeddings, enabling semantic search and faster data discovery for analytics teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer Intern</h4>
                <h5>3 Pillars Equity, Frisco</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Scaled AI anomaly detection models for financial transaction pipelines, reducing false positives by 30%. Productionized ML-based credit risk scoring replacing manual rule logic, improving loan decision throughput by 40%. Built an LLM-backed text-to-SQL natural language query interface, reducing analyst overhead by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Gen-AI Engineer</h4>
                <h5>LMES, Dallas</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and deployed production LLM-powered voice and chat agents using Python and LangGraph. Built RAG-based retrieval pipelines across SQL/DynamoDB and 10+ microservices. Achieved 90% reduction in model-serving costs via hybrid local/cloud execution and Redis-based semantic caching.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Agent Evaluation Engineer</h4>
                <h5>PrimeHealth Technologies, Bay Area</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building LLM evaluation infrastructure for a multi-channel AI health coaching agent. Designed ground-truth datasets across 21 health intent domains, driving domain routing accuracy from 71% to 93%. Deployed an LLM-as-judge framework synthesizing 128 user personas at 15x the throughput of manual annotation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
