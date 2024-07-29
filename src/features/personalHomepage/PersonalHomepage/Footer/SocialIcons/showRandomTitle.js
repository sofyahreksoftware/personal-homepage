export const showRandomTitle = () => {
  const linkTitles = [
    "Connect with me on",
    "Visit my",
    "Follow me on",
    "Check out my",
    "Join me on",
    "Explore my",
    "Find me on",
    "See my",
  ];

  const randomIndex = Math.floor(Math.random() * linkTitles.length);

  return linkTitles[randomIndex];
};
