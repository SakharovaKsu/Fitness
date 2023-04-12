const tabs = document.querySelector('.tab');
const tabsBtn = document.querySelectorAll('[data-tab-button]'); const tabsContent = document.querySelectorAll('[data-tab-content]');

export const initTabs = (e) => {
  tabsContent.forEach((container) => {
    container.classList.add('tab__list--close');
  });

  tabsBtn.forEach = ((tab) => {
    tab.classList.remove('tab__button--active');
  });

  e.currentTarget.classList.add('tab__button--active');

  const id = e.currentTarget.id;
  const activeTab = tabs.querySelector(`[aria-label="${id}"`);

  activeTab.classList.remove('tab__list--close');
};

tabsBtn.forEach((button) => button.addEventListener('click', initTabs));
