export function scrollToSection(event, id) {
  event.preventDefault(); // Prevent default anchor behavior

  const section = document.getElementById(id);
  const headerOffset = 60; // Height of your header or offset
  const sectionPosition = section?.offsetTop;
  const offsetPosition = sectionPosition ? sectionPosition - headerOffset : 0;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
