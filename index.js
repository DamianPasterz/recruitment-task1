document.addEventListener("click", (e) => {

  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest('[data-dropdown') !== null) return;
  

  const toggleDropdown = () => {
    const currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active");

    const rotation = currentDropdown.classList.contains("active") ? 180 : 0;
    const svgIcon = currentDropdown.querySelector("svg[data-dropdown-icon]");

    if (svgIcon) {
      svgIcon.style.transform = `rotate(${rotation}deg)`;
    }

    const linkElement = currentDropdown.querySelector(".category__item > a");

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

  const currentDropdown = e.target.closest("[data-dropdown]");
  if (isDropdownButton) {
    toggleDropdown();
  }

  document
    .querySelectorAll("[data-dropdown].active")
    .forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        closeDropdown(dropdown);
      }
    });
});
