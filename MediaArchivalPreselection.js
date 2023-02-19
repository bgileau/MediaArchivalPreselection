// ==UserScript==
// @name         Media Archival Site Pre-filtering
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Preselects a language/type filtering on a media archival site
// @include      https://nyaa.si/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function open_category_menu() {
        const dropdown_highlevel_element = document.getElementById("navFilter-category");
        const category_button = dropdown_highlevel_element.getElementsByClassName("btn dropdown-toggle btn-default");

        category_button[0].dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    }

    function select_category_option() {
        const dropdown_highlevel_element = document.getElementById("navFilter-category");
        const select_element = dropdown_highlevel_element.getElementsByClassName("selectpicker show-tick");
        const option_element = select_element[0].querySelector('option[value="1_2"]');

        select_element[0].value = option_element.value;
        select_element[0].dispatchEvent(new MouseEvent('change', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    }

    function close_category_menu() {
        const dropdown_highlevel_element = document.getElementById("navFilter-category");
        const category_button = dropdown_highlevel_element.getElementsByClassName("btn dropdown-toggle btn-default");

        category_button[0].dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    }

    function search(){
        const search_highlevel_element = document.getElementById("navbar");
        console.log(search_highlevel_element)
        const search_button = search_highlevel_element.getElementsByClassName("btn btn-primary")[0];
        console.log(search_button)

        search_button.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          }));
    }

    setTimeout(function() {
        open_category_menu();
        select_category_option();
        close_category_menu();
        console.log("search");
        // search();
        // setTimeout(function() {
        //     search();
        // }, 2000);
    }, 1000);
})();
