const elementClose = document.getElementsByClassName('overlay');

for (let i = 0; i < elementClose.length; i++) {
    console.log(i);
    elementClose[i].addEventListener('click', function () {
        let url = window.location.href.substr(0, window.location.href.indexOf('#'));
        console.log(url);
        window.location = url;
    });
}