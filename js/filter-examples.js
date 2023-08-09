(() => {
  document.addEventListener('DOMContentLoaded', onFilter);

  function onFilter() {
    const filterButtons = document.querySelectorAll('.filters__item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => onFilterButtonClick(button));
    });
  }

  function onFilterButtonClick(button) {
    const exampleItems = document.querySelectorAll('.examples__item');
    const filterValue = button.getAttribute('data-filter');

    exampleItems.forEach(item => {
      item.style.display = 'none';
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      }
    });
  }
})();
