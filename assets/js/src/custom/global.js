window.$ = jQuery;

$(() => {
    // Assign RightArrow to Tab key
    $(this).keyup((e) => {
        console.log('Key pressed: ' + e.code);
        if (e.keyCode == 39) {
            e.keyCode = 9;
            e.keyup();
        }
    });
    // Header - variables
    const hasChildren = $("li.has-children");
    const lastChild = $("li.last-child");
    const dropdownToggle = $("button.dropdown-toggle");
    const dropdownLvl1 = $("ul.dropdown-level-1");
    // Header - dropdowns
    hasChildren.click(() => {
        if (dropdownToggle.attr("aria-expanded") == "false") {
            dropdownToggle.attr("aria-expanded", "true");
            dropdownLvl1.css("display", "block");
        } else {
            dropdownToggle.attr("aria-expanded", "false");
            dropdownLvl1.css("display", "none");
        }
    });
    // hasChildren.keydown((e) => {
    //     if (e.code == 'Tab') {
    //         dropdownToggle.attr("aria-expanded", "true");
    //         dropdownLvl1.css("display", "block");
    //     }
    // });
    lastChild.focusout(() => {
        dropdownToggle.attr("aria-expanded", "false");
        dropdownLvl1.css("display", "none");
    });
});