// ==UserScript==
// @name         Media Archival Site Pre-filtering
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Preselects a language/type filtering on a media archival site
// @include      https://nyaa.si/
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
        setTimeout(function() {
            const dropdown_highlevel_element = document.getElementById("navFilter-category") // drill down to close to where we want to be
            const category_button = dropdown_highlevel_element.getElementsByClassName("btn dropdown-toggle btn-default")

            // Open the menu (note: click doesn't work, must dispatchevent)
            category_button[0].dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            }));
            
            const select_element = dropdown_highlevel_element.getElementsByClassName("selectpicker show-tick") // drill down a little farther
            const option_element = select_element[0].querySelector('option[value="1_2"]')

            // Set the value of the select element to "option_element" value to select the list item. But, until change event is done, it won't update.
            select_element[0].value = option_element.value

            // Push the change that we made prior with dispatchevent "change"
            select_element[0].dispatchEvent(new MouseEvent('change', {
                bubbles: true,
                cancelable: true,
                view: window
            }));
            
            // Close the menu
            category_button[0].dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            }));
        }, 1000);
})();