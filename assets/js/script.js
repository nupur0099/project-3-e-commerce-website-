{/* <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> */}

document.addEventListener("DOMContentLoaded", function() {
  var grid = document.querySelector('.product-grid');
  var iso = new Isotope(grid, {
    itemSelector: '.col-md-3',
    layoutMode: 'fitRows'
  });

  var filtersElem = document.querySelector('#shop-filters');
  var checkboxes = filtersElem.querySelectorAll('input[type="checkbox"]');

  filtersElem.addEventListener('click', function(event) {
    event.preventDefault();
    var link = event.target.closest('a');
    if (!link) return;

    var filterValue = link.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    // reset all checkboxes
    checkboxes.forEach(cb => {
      cb.checked = false;
      cb.classList.remove('active');
    });

    // set the clicked checkbox active + checked
    var clickedCheckbox = link.querySelector('input[type="checkbox"]');
    if (clickedCheckbox) {
      clickedCheckbox.checked = true;
      clickedCheckbox.classList.add('active');
    }
  });
});

