// replaceText is a recursive function that calls itself until its conditional logic is no longer truthy

replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        // loop until we get through all the text based child elements
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        // use textContent instead of innerText here becauase we're dealing with a text node, not an element, per se
        if (element.textContent.match(/coronavirus/gi)) {
            // this blacks out the entire paragraph
            // element.parentElement.style.color = 'black';
            // element.parentElement.style.backgroundColor = 'black';

            // essentially, we create a new element that captures the redacted text by using interpolation and then use that element to replace the old element
            const newEl = document.createElement('span');
            newEl.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span style="background-color: black; color: black;">$1</span>')
            element.replaceWith(newEl)
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, 'REDACTED')
    }
}