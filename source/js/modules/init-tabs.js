const tab = document.querySelector('.tab');
const tabsBtn = document.querySelectorAll('[data-tab-button]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

export const initTabs = (e) => {
  if (!tab) {
    return;
  }

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

tabsBtn.forEach((button) => button.addEventListener('click', initTabs));
