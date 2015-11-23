window.addEventListener("load", function(){

    /** we maken de notificationBar aan, gekoppeld aan het HTML element */
    var notificationBar = new NotificationBar(".notification-bar");

    /** we laten een begin notificatie zien */
    notificationBar.showMessage("Welkom op deze pagina");

    /** we checken of je op de pagina klikt */
    document.addEventListener("click", function(){
        notificationBar.showError("je hebt geklikt");
    });

});