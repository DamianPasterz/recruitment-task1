const DROPDOWN_BUTTON_SELECTOR = "[data-dropdown-button], svg[data-dropdown-icon]";
const CURRENT_DROPDOWN_SELECTOR = "[data-dropdown]";
const LINK_ELEMENT_SELECTOR = ".category__item > a";
const SVG_ICON_SELECTOR = "svg[data-dropdown-icon]";

const ROTATION_ACTIVE =  180;
const ROTATION_INACTIVE =  0;


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
    if (!DROPDOWN_BUTTON_SELECTOR && currentDropdown  !== null) return;
    if (!currentDropdown) return;
    toggleDropdown(currentDropdown);

    document.querySelectorAll(`${CURRENT_DROPDOWN_SELECTOR}.active`).forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        toggleDropdown(dropdown);
      }
    });
  });
});
