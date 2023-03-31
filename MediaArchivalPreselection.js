// ==UserScript==
// @name         Media Archival Site Pre-filtering
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Preselects a language/type filtering on a media archival site
// @include      https://nyaa.si/
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  setTimeout(function() {
    const dropdown_highlevel_element = document.getElementById("navFilter-category")
    const category_button = dropdown_highlevel_element.getElementsByClassName("btn dropdown-toggle btn-default")
    const select_element = dropdown_highlevel_element.getElementsByClassName("selectpicker show-tick")
    const option_element = select_element[0].querySelector('option[value="1_2"]')
    const search_highlevel_element = document.getElementById("navbar")
    const search_element = search_highlevel_element.getElementsByClassName("btn btn-primary")
    const search_form = document.getElementById("searchform")

    click_event(category_button[0])  // open menu
    select_option(select_element[0], option_element.value)
    push_option_change(select_element[0])
    click_event(category_button[0])  // close menu

    setTimeout(() => {
      console.log('searching');
      search(option_element.value);
    }, 200);

  }, 500);

  function click_event(button) {
    button.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }))
  }

  function select_option(select, value) {
    select.value = value
  }

  function push_option_change(select) {
    select.dispatchEvent(new MouseEvent('change', {
      bubbles: true,
      cancelable: true,
      view: window
    }))
  }

  function search(category_value) {
    const baseURL = 'https://nyaa.si/?f=0&c=';
    const query = '&q=';
    window.location.href = baseURL + category_value + query;
  }
})();
