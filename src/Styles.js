export function hasClass(elem, elemClass) {
    return elem.classList.contains(elemClass);
}

export function addClass(elem, elemClass) {
    elem.classList.add(elemClass);
}

export function removeClass(elem, elemClass) {
    elem.classList.remove(elemClass);
}

export function toggleClass(elem, elemClass) {
    if (elem.classList.contains(elemClass)) elem.classList.remove(elemClass);
    else elem.classList.add(elemClass);
}
