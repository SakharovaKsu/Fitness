const tabs = document.querySelector('.tab');
const tabsBtn = document.querySelectorAll('[data-tab-button]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

export const initTabs = (e) => {
  tabsContent.forEach((container) => {
    container.classList.add('is-hidden');
  });

  tabsBtn.forEach = ((tab) => {
    tab.classList.remove('is-active');
  });

  e.currentTarget.classList.add('is-active');

  const id = e.currentTarget.id;
  const activeTab = tabs.querySelector(`[aria-label="${id}"`);

  activeTab.classList.remove('is-hidden');
};

tabsBtn.forEach((button) => button.addEventListener('click', initTabs));
