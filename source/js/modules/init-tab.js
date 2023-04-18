const tab = document.querySelector('.tab');
const tabsBtn = document.querySelectorAll('[data-tab-button]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

export const initTab = (e) => {
  tabsContent.forEach((container) => {
    container.classList.add('is-hidden');
  });

  tabsBtn.forEach((button) => {
    button.classList.remove('is-active');
  });

  e.currentTarget.classList.add('is-active');

  const id = e.currentTarget.id;
  const activeTab = tab.querySelector(`[aria-label="${id}"`);

  activeTab.classList.remove('is-hidden');
};

if (tab) {
  tabsBtn.forEach((button) => button.addEventListener('click', initTab));
}
