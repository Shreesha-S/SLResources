function openLang(evt, langName, number) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    var content_name = "tabcontent" + number;
    tabcontent = document.getElementsByClassName(content_name);
    tabcontent.style = "padding: 6px 12px; border: 1px solid green;border-top: none;";
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    var link_name = "tablinks"+number;
    tablinks = document.getElementsByClassName(link_name);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(langName).style = "padding: 6px 12px; border: 1px solid green;width:90%;border-top: none;";
    document.getElementById(langName).style.display = "block";
    evt.currentTarget.className += " active";
}
