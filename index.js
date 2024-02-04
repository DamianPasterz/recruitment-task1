document.addEventListener("click", (e) => {
  const toggleDropdown = (dropdown) => {
    dropdown.classList.toggle("active");
    const rotation = dropdown.classList.contains("active") ? 180 : 0;
    const svgIcon = dropdown.querySelector("svg[data-dropdown-icon]");
    if (svgIcon) {
      svgIcon.style.transform = `rotate(${rotation}deg)`;
    }

    const linkElement = dropdown.querySelector(".category__item > a");
    if (linkElement) {
      linkElement.classList.toggle("active");
    }
  };

  const closeDropdown = (dropdown) => {
    dropdown.classList.remove("active");
    const svgIcon = dropdown.querySelector("svg[data-dropdown-icon]");
    if (svgIcon) {
      svgIcon.style.transform = "rotate(0deg)";
    }

    const linkElement = dropdown.querySelector(".category__item > a");
    if (linkElement) {
      linkElement.classList.remove("active");
    }
  };

  const isDropdownButton = e.target.closest("[data-dropdown]");
  if (!isDropdownButton) return;

  const currentDropdown = e.target.closest("[data-dropdown]");
  toggleDropdown(currentDropdown);

  document
    .querySelectorAll("[data-dropdown].active")
    .forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        closeDropdown(dropdown);
      }
    });
});
