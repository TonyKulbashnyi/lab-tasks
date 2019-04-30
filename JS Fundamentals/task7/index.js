var config = {
    apiKey: "AIzaSyCxY-x45M9AgiIlnuTUrrSdn3ADBvC4uqQ",
    authDomain: "task7-2416b.firebaseapp.com",
    databaseURL: "https://task7-2416b.firebaseio.com",
    projectId: "task7-2416b",
    storageBucket: "task7-2416b.appspot.com",
    messagingSenderId: "860090036259"
};
firebase.initializeApp(config);

let database = firebase.database();

const box = document.getElementById('box');

let postCouner = 0;
let postAmount = 5;

getNewPosts(postCouner, postAmount);

database.ref("champions").once("value").then((snapshot) => {
    postAmount = snapshot.val().length;
});


function getNewPosts(first, limit) {
    let count = first;
    while (count < first + 5) {
        if (count >= limit) {
            break;
        }
        database.ref('champions/' + count).once('value').then((snapshot) => {
            render(snapshot.val());
        });
        count++;
    }
    postCouner += 5;
}

function render(node) {
    let year = document.createElement("div");
    year.classList.add('year');
    year.innerHTML = 'year: ' + node.year;

    let stadium = document.createElement("div");
    stadium.classList.add('stadium');
    stadium.innerHTML = 'stadium: ' + node.stadium;

    let champion = document.createElement("div");
    champion.classList.add('champion');
    champion.innerHTML = 'champion: ' + node.champion;

    let text = document.createElement("div");
    text.classList.add('text');
    text.appendChild(year);
    text.appendChild(stadium);
    text.appendChild(champion);
    box.appendChild(text);
}


box.onscroll = function () {
    let scroll = box.scrollTop;
    let height = box.scrollHeight - box.clientHeight;

    if (height - scroll === 0) {
        getNewPosts(postCouner, postAmount);
    }
};