const ACTIVE_SLIDE_CLASSNAME = 'open-slide';

const slidesNodes = Array.from(document.querySelectorAll('.hydra-tech__img'));
console.log(slidesNodes);
const prevButtonNode = document.querySelector('.button-prev');
const nextButtonNode = document.querySelector('.button-next');
let activeId;

init();

function init() {
    activeId = 0;
    
    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });
    
    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0: activeId + 1;
}

document.getElementById("btn-elements").onclick = function(e){
    const target = e.target;
    console.log(target);
};