const SVG_ICON_SELECTOR = "img[data-dropdown-icon]"; 
const LINK_ELEMENT_SELECTOR = ".category__item > a"; 
const DROPDOWN_BUTTON_SELECTOR = "[data-dropdown-button], svg[data-dropdown-icon]"; 
const CURRENT_DROPDOWN_SELECTOR = "[data-dropdown]"; 

const ROTATION_ACTIVE = 180; 
const ROTATION_INACTIVE = 0; 


const toggleDropdown = (currentDropdown) => {
  currentDropdown.classList.toggle("active");
  const rotation = currentDropdown.classList.contains("active") ?  ROTATION_ACTIVE :  ROTATION_INACTIVE;
  const svgIcon = currentDropdown.querySelector(SVG_ICON_SELECTOR);
  if (svgIcon) {
    svgIcon.style.transform = `rotate(${rotation}deg)`;
  }
  const linkElement = currentDropdown.querySelector(LINK_ELEMENT_SELECTOR);
  if (linkElement) {
    linkElement.classList.toggle("active");
  }
};

document.querySelectorAll(DROPDOWN_BUTTON_SELECTOR).forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentDropdown = e.target.closest(CURRENT_DROPDOWN_SELECTOR);
    if (!currentDropdown) return;
    toggleDropdown(currentDropdown);

    document.querySelectorAll(`${CURRENT_DROPDOWN_SELECTOR}.active`).forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        toggleDropdown(dropdown);
      }
    });
  });
});

document.addEventListener("click", (e) => {
  const currentDropdown = document.querySelector(`${CURRENT_DROPDOWN_SELECTOR}.active`);
  const isClickInsideDropdown = currentDropdown && currentDropdown.contains(e.target);
  if (!isClickInsideDropdown && currentDropdown) {
    toggleDropdown(currentDropdown);
  }
});
