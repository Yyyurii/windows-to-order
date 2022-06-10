const tabs = () => {

  const bindModal = (tabHeaderSelector, tabSelector, tabContantSelector, activeClass) => {

    const tabHeader = document.querySelector(tabHeaderSelector);
    const tab = document.querySelectorAll(tabSelector);
    const tabContant = document.querySelectorAll(tabContantSelector);

    const hideContent = () => {
      tabContant.forEach(item => {
        item.style.display = 'none';
      });

      tab.forEach(item => {
        item.classList.remove(activeClass);
    });
    }

    const showContent = (i = 0) => {
      tabContant[i].style.display = 'block';
      tab[i].classList.add(activeClass);
    }

    tabHeader.addEventListener('click', (e) => {
      const target = e.target;

      if (target &&
        (target.classList.contains(tabSelector.replace(/\./, "")) ||
          target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideContent();
            showContent(i);
          }
        });
      }
    })

    hideContent();
    showContent();
  }

  bindModal('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  bindModal('.decoration_slider ', '.no_click', '.decoration_content > div > div', 'after_click');

};

export default tabs;