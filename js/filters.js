export function popOverFilterMenu(e) {
  const filterTitle = e.currentTarget;
  filterTitle.parentElement.classList.toggle("filter-bar__filter--active");
}
