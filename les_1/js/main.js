window.addEventListener("load", function(){

    /** we halen het HTML element op waar we iets mee willen doen */
    var notificationBar = document.querySelector(".notification-bar");

    /** we luisteren of er op de webpagina wordt geklikt */
    document.addEventListener("click", toggleNotificationBar);

    /** als er op de pagina wordt geklikt: toggle de class enabled */
    function toggleNotificationBar(){
        notificationBar.classList.toggle("enabled");
    }

});