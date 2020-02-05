// replaceText is a recursive function that calls itself until its conditional logic is no longer truthy

replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        // loop until we get through all the text based child elements
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        // use textContent instead of innerText here becauase we're dealing with a text node, not an element, per se
        element.textContent = element.textContent.replace(/coronavirus/gi, 'REDACTED')
    }
}