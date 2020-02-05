// replaceText is a recursive function that calls itself until its conditional logic is no longer truthy

replaceText(document.body, "coronavirus")

function replaceText(element, phrase) {
    // let regex = new RegExp(phrase, "gi")
    if (element.hasChildNodes()) {
        // loop until we get through all the text based child elements
        element.childNodes.forEach(replaceText, phrase)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
        newEl = document.createElement('span');
        newEl.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
        element.replaceWith(newEl)
        }
    }
}