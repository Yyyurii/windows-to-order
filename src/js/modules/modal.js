const modals = () => {

  function offOverflow(trigger) {
    if (trigger) document.body.style.overflow = "hidden";
    if (!trigger) document.body.style.overflow = "";
  }

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', () => {
        modal.style.display = 'block';
        offOverflow(true)
      });
    })

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      offOverflow(false);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = ""; 
      }
  });
  };

  function showModalByTime(modalSelector, time) {
    setTimeout(() => {
      document.querySelector(modalSelector).style.display = 'block';
    }, time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // showModalByTime('.popup', 60000);
};

export default modals;