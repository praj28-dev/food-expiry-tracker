function switchTab(tabName) {

  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  const allPages = document.querySelectorAll('.page');
  allPages.forEach(function(page) {
    page.classList.remove('active');
  });

  event.target.classList.add('active');

  const activePage = document.getElementById(tabName);
  activePage.classList.add('active');

}