(() => {
  document.addEventListener('DOMContentLoaded', onFilter);

  function onFilter() {
    const filterButtons = document.querySelectorAll('.filters__item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        setActiveButton(button.children[0]);
        onFilterButtonClick(button);
      });
    });
  }

  function setActiveButton(button) {
    const activeButton = document.querySelector('.active-button');

    if (activeButton) {
      activeButton.classList.remove('active-button');
    }
    button.classList.add('active-button');
  }

  function onFilterButtonClick(button) {
    const exampleItems = document.querySelectorAll('.examples__item');
    const filterValue = button.getAttribute('data-filter');

    exampleItems.forEach(item => {
      item.classList.add('visually-hidden');
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.classList.remove('visually-hidden');
      }
    });
  }
})();
