import { PortfolioWithBase64, Project, ProjectWithBase64 } from "../types/Portfolio.types";


export const convertFileToBase64 = (file: File): Promise<string> =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

export const downloadPortfolioAsFile = (portfolio: PortfolioWithBase64) => {
  const dataStr = JSON.stringify(portfolio, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "portfolio.json";
  link.click();

  URL.revokeObjectURL(url);
};

export const transformProjectMediaToBase64 = async (project: Project): Promise<ProjectWithBase64> => {
  const mediaBase64 = await Promise.all(project.media.map(file => convertFileToBase64(file)));

  return {
    ...project,
    media: mediaBase64,
  } as ProjectWithBase64;
};