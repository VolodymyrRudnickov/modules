function tabs(tabsSelector,tabsContentSelector,tabsParentSelector,activeClass) {
    // ! Табы !**********************************
    // Получаем нужные элементы
    const navBtn = document.querySelectorAll(tabsSelector); // Кнопка меню
    const tabContent = document.querySelectorAll(tabsContentSelector); // Все табы
    const navParent = document.querySelector(tabsParentSelector); // Родительский элемент меню для делегирования

    function hideTabContent() { // скрываем все табы
        tabContent.forEach(item => {
           item.classList.add('hide');
        });
        navBtn.forEach(item => {
            item.classList.remove(activeClass); // удаляем класс у всех кнопок меню
        })
    };

    function showTabContent(i = 0) { // показываем нужный блок
        tabContent[i].classList.add('show');
        tabContent[i].classList.remove('hide');

        navBtn[i].classList.add(activeClass); // добавляем класс нужной кнопке меню

    };

    navParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains(tabsSelector.slice(1))) {
            navBtn.forEach((btn, i) => {
                if (target == btn) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
    
        };
      
    });
    hideTabContent();
    showTabContent();
}

export default tabs;