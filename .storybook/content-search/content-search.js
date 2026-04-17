/* global PagefindUI */

const container = document.getElementById('pagefind-search-container');

if (container) {
  try {
    new PagefindUI({
      element: '#pagefind-ui',
      showSubResults: true,
      showImages: false,
      showEmptyFilters: false,
    });
  } catch {
    // PagefindUI may not be available in dev mode (index only exists after build)
  }

  container.addEventListener('click', (e) => {
    if (e.target === container) container.close();
  });
}
