export default function setEntranceObserver(
  elements: NodeListOf<Element> | undefined
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrance-animation");
        return;
      }
    });
  });

  if (elements) {
    if (elements.length > 0) {
      elements.forEach((item) => {
        observer.observe(item!);
      });
    }
  }

  //   return observer.disconnect();
}
