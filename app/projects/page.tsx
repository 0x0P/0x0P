import styles from "./projects.module.css";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    title: "0x0P",
    description: "개인 포트폴리오 웹사이트.",
    tags: ["TypeScript", "Next.js"],
    year: "2025",
    link: "https://github.com/0x0p/0x0p",
  },
  {
    title: "hikari",
    description:
      "멀티테넌트 아키텍처를 지원하는 백엔드 애플리케이션. NestJS와 Prisma ORM을 활용한 확장 가능한 서버 구조를 구현했습니다.",
    tags: ["TypeScript", "NestJS", "Prisma"],
    year: "2025",
    link: "https://github.com/0x0p/hikari",
  },
  {
    title: "mu",
    description:
      "경량화된 WebSocket 프레임워크. 실시간 양방향 통신을 위한 간결하고 효율적인 인터페이스를 제공합니다.",
    tags: ["TypeScript", "WebSocket"],
    year: "2025",
    link: "https://github.com/0x0p/mu",
  },
  {
    title: "omok",
    description:
      "웹 기반 오목 게임. 실시간 대전 기능과 직관적인 UI를 제공하며, Biome을 사용한 코드 린팅을 적용했습니다.",
    tags: ["TypeScript", "Websocket", "CSS"],
    year: "2025",
    link: "https://github.com/0x0p/omok",
  },
  {
    title: "relay",
    description: "Redis를 활용한 임시 메일 서비스",
    tags: ["JavaScript", "Redis"],
    year: "2025",
    link: "https://github.com/0x0p/relay",
  },
  {
    title: "trave",
    description:
      "시계열 데이터 수집 및 처리 시스템. InfluxDB와 Telegraf를 통해 수집한 메트릭을 NestJS로 처리합니다.",
    tags: ["TypeScript", "NestJS"],
    year: "2025",
    link: "https://github.com/0x0p/trave",
  },
  {
    title: "MakePepero\nYourself",
    description:
      "다양한 토핑과 디자인 옵션을 선택하여 나만의 빼빼로를 만들어보세요!",
    tags: ["TypeScript", "Next.js", "CSS"],
    year: "2024",
    link: "https://github.com/0x0p/trave",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            year={project.year}
            link={project.link}
          />
        ))}
      </div>
      <div className={styles.backTitle}>
        <h1>Projects</h1>
      </div>
    </div>
  );
}
