const tabs = () => {

  const bindTab = (tabHeaderSelector, tabSelector, tabContantSelector, activeClass, display = 'block') => {

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
      tabContant[i].style.display = display;
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

  bindTab('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
  bindTab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  bindTab('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

};

export default tabs;