window.addEventListener("load", function(){

    var notificationBar = document.querySelector(".notification-bar");

    console.log(notificationBar.classList);

    document.addEventListener("click", toggleNotificationBar);

    function toggleNotificationBar(){
        notificationBar.classList.toggle("enabled");
    }

});