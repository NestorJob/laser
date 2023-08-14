export const scrollSection = (idSection: string) => {
  const element = document.getElementById(idSection);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
