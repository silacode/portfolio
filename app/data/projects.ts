export const projects = [
  {
    title: "Research Agent",
    description:
      "A production-grade reflective research agent that creates comprehensive markdown reports using multi-agent orchestration. Features specialized agents for planning, research, writing, and editing with ReAct prompting, human-in-the-loop plan approval, Tavily-first search with conditional ArXiv/Wikipedia enrichment, a quality-threshold loop between writer and editor agents, and state persistence with resume capabilities for long-running research tasks.",
    year: "2025",
    githubLink: "https://github.com/silacode/research-agent",
  },
  {
    title: "Customer Support Agent",
    description:
      "A CLI-based customer support agent powered by OpenAI with SQL database and RAG tools. Features order management, product lookup, and policy search using a reflection agent pattern with generator and reviewer agents for accurate SQL queries. Built with ReAct prompting, ChromaDB for semantic policy search, and robust error handling.",
    year: "2026",
    imageSrc: "/customer-support.png",
    githubLink: "https://github.com/silacode/customer-support-agent",
  },
  {
    title: "ReAct Agent",
    description:
      "A minimal implementation of an AI agent using the ReAct (Reasoning + Acting) pattern with prompt-based tool calling. Demonstrates prompt-based tool definitions, multi-tool handling, and intelligent tool reasoning for independent and dependent queries. Built for educational purposes to understand agent fundamentals before using higher-level SDKs.",
    year: "2025",
    imageSrc: "/AGENT.png",
    githubLink: "https://github.com/silacode/agent",
  },
  {
    title: "Agentic Trading Floor",
    description:
      "Built a multi-agent trading system where four LLM-powered agents analyze live marketdata, execute trades, and rebalance portfolios in real time. Powered by MCP-based tool integration for seamless orchestration across market, account, and notification services, with a live dashboard for strategy insights.",
    year: "2025",
    imageSrc: "/project1.jpg", // Optional
    imageAlt: "Project 1",
    githubLink: "https://github.com/silacode/AgenticTradingFloor", // Optional
    //websiteLink: "https://project1.example.com", // Optional
  },
  {
    title: "Autonomous Engineering Team",
    description:
      "Developed a dynamic multi-agent system where AI agents (Team Lead, Backend, Frontend, and Test Engineer) collaborate to plan, assign, and solve engineering tasks autonomously. Built with CrewAI to model emergent teamwork, adaptive task generation, and end-to-end problem solving.",
    year: "2025",
    // imageSrc: "/project2.jpg",
    githubLink: "https://github.com/silacode/AgenticEngineer",
    // websiteLink: "https://project2.example.com",
  },
];
