export const APP_NAME = "Snippy";

export const COLLECTION_COLORS = [
  "#37D043",
  "#ABA036",
  "#9D3A3A",
  "#3C50A6",
  "#A53C5E",
  "#3CA586",
  "#6E36A2",
  "#7E843D",
  "#4252A3",
  "#D07D3C",
  "#5EAD83",
  "#9C437F",
  "#488CAB",
  "#C94C3B",
  "#3C6E6A",
  "#9E4E35",
  "#5969A3",
  "#C19347",
  "#4F8A5D",
  "#D06D9E",
  "#38654A",
  "#B05D3D",
  "#2E497D",
  "#C3A641",
  "#7A3857",
  "#5A9162",
  "#BC4C8A",
  "#3E645B",
  "#A36F3E",
];

export const getRandomCollectionPillColor = () => {
  const randomIndex = Math.floor(Math.random() * COLLECTION_COLORS.length);
  return COLLECTION_COLORS[randomIndex];
};

export const TECH_STACK_ICONS = [
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    value: "nextjs",
  },
  {
    name: "React",
    icon: "devicon:react",
    value: "react",
  },
  {
    name: "Redux",
    icon: "logos:redux",
    value: "redux",
  },
  {
    name: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
    value: "javascript",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    value: "css",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
    value: "html",
  },
  {
    name: "Material-UI",
    icon: "simple-icons:mui",
    value: "mui",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
    value: "firebase",
  },
  {
    name: "Node.js",
    icon: "vscode-icons:file-type-node",
    value: "nodejs",
  },
  {
    name: "Netlify",
    icon: "skill-icons:netlify-dark",
    value: "netlify",
  },
  {
    name: "Vercel",
    icon: "skill-icons:vercel-dark",
    value: "vercel",
  },
  {
    name: "React Query",
    icon: "logos:react-query-icon",
    value: "rtx-query",
  },
  {
    name: "Bootstrap",
    icon: "skill-icons:bootstrap",
    value: "bootstrap",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon:tailwindcss",
    value: "tailwind",
  },
  {
    name: "Angular",
    icon: "devicon:angular",
    value: "angular",
  },
  {
    name: "Vue.js",
    icon: "logos:vue",
    value: "vue",
  },
  {
    name: "Python",
    icon: "logos:python",
    value: "python",
  },
  {
    name: "Django",
    icon: "skill-icons:django",
    value: "django",
  },
  {
    name: "Appwrite",
    icon: "logos:appwrite-icon",
    value: "appwrite",
  },
  {
    name: "TypeScript",
    icon: "skill-icons:typescript",
    value: "typescript",
  },
  {
    name: "Java",
    icon: "devicon:java",
    value: "java",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    value: "git",
  },
  {
    name: "GitHub",
    icon: "skill-icons:github-dark",
    value: "github",
  },
  {
    name: "npm",
    icon: "logos:npm-icon",
    value: "npm",
  },
  {
    name: "Android",
    icon: "devicon:android",
    value: "android",
  },
  {
    name: "PHP",
    icon: "devicon:php",
    value: "php",
  },
  {
    name: "SCSS",
    icon: "vscode-icons:file-type-scss2",
    value: "scss",
  },
  {
    name: "Flutter",
    icon: "logos:flutter",
    value: "flutter",
  },
  {
    name: "Kotlin",
    icon: "logos:kotlin-icon",
    value: "kotlin",
  },
  {
    name: "MongoDB",
    icon: "skill-icons:mongodb",
    value: "mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "devicon:postgresql",
    value: "postgres",
  },
  // {
  //   name: "SSH",
  //   icon: "flat-color-icons:lock",
  //   value: "ssh",
  // },
  {
    name: "DB",
    icon: "vscode-icons:folder-type-db",
    value: "db",
  },
];
