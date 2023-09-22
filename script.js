

// writing valina javascript 

// when user click the navbar link in the navbar it has to heilight the currunt page that user is using 

function nav_bar() {
    const service = document.getElementsByClassName("hidden-service-tag");
    
    // check the condition 
    if (service.style.display === "none" || service.style.display === "") {
        // if it's hidden display it
        service.style.display = "block";
    } else {
        // if it displays, hide it
        service.style.display = "none";
        
    }
};