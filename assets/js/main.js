let h1 = document.getElementById('headline');
let div = document.getElementById('list');
let button = document.getElementById('btn');

function myBucket() {
    console.log("head");
    h1.classList.add('buckethead');
    h1.classList.add('newheadlineA');
    document.getElementById("headline").innerHTML = "myBucketList";
    console.log("list");
    div.classList.add('bucketlist');
    btn.classList.add('btncss');
    document.getElementById("btn").innerHTML = "Headline stylen";
};
myBucket();



function changeHeadline() {
    console.log("btn works");
    h1.classList.toggle('newheadlineA');
};
changeHeadline();




