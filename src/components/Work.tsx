import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "Multi-Agent AI Automation Platform", category: "LLM Agents & RAG", tools: "LangGraph, Python, RAG, SQLite, Docker", img: "/images/multi_agent.png" },
            { name: "High-Throughput ML Inference Microservice", category: "MLOps & GPU Inference", tools: "NVIDIA Triton, Kubernetes, Kafka, Redis, Prometheus/Grafana", img: "/images/ml_inference.png" },
            { name: "Financial Churn & Risk Prediction", category: "Predictive Modeling", tools: "Python, Scikit-learn, Pandas, MySQL, SQL", img: "/images/churn_prediction.png" },
            { name: "Fintech Anomaly Detection", category: "Machine Learning", tools: "Python, LangChain, Docker, CI/CD", img: "/images/fintech_anomaly.png" },
            { name: "Text-to-SQL Interface", category: "NLP & LLMs", tools: "Python, LangChain, LLM, SQL", img: "/images/text_to_sql.png" },
            { name: "Document Ingestion Pipeline", category: "Data Engineering", tools: "Apache Kafka, Vector Embeddings, Python", img: "/images/document_ingestion.png" },
            { name: "MCP Audit", category: "Security & CLI Tools", tools: "Python, Typer, Pydantic, SARIF", img: "/images/mcp_audit.png", link: "https://github.com/chaaiitanya/mcp-audit" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.img} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
