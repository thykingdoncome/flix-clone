const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show-tab-content'))
}

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show-tab-content');
    // console.log(tabContentItem)
}

//listener for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
