function toggleDrawer() {
    var drawer = document.querySelector('.drawer');
    var overlay = document.querySelector('.overlay');

    if (!overlay.classList.contains("active")) {
        drawer.style.right = '0';
        overlay.classList.add('active');
    } else {
        drawer.style.right = '-262px';
        overlay.classList.remove('active');
    }
}

function closeDrawer() {
    var drawer = document.querySelector('.drawer');
    var overlay = document.querySelector('.overlay');

    drawer.style.right = '-262px';
    overlay.classList.remove('active');
}

document.getElementById('toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

var converter = new showdown.Converter();
text = document.getElementById("markdown-area").innerHTML;
html = converter.makeHtml(text);
document.getElementById("markdown-area").innerHTML = html;