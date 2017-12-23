let e1 = document.getElementsByClassName('truncated')[0],
    e2 = document.getElementsByClassName('truncated')[1],
    e3 = document.getElementsByClassName('truncated')[2],
    e4 = document.getElementsByClassName('truncated')[3],
    e5 = document.getElementsByClassName('truncated')[4],
    e6 = document.getElementsByClassName('truncated')[5],
    e7 = document.getElementsByClassName('truncated')[6],
    e8 = document.getElementsByClassName('truncated')[7],
    e9 = document.getElementsByClassName('truncated')[8],
    e10 = document.getElementsByClassName('truncated')[9],
    e11 = document.getElementsByClassName('truncated')[10],
    e12 = document.getElementsByClassName('truncated')[11],
    length = 96,
    t1 = e1.innerHTML.substring(0, length);
t2 = e2.innerHTML.substring(0, length);
t3 = e3.innerHTML.substring(0, length);
t4 = e4.innerHTML.substring(0, length);
t5 = e5.innerHTML.substring(0, length);
t6 = e6.innerHTML.substring(0, length);
t7 = e7.innerHTML.substring(0, length);
t8 = e8.innerHTML.substring(0, length);
t9 = e9.innerHTML.substring(0, length);
t10 = e10.innerHTML.substring(0, length);
t11 = e11.innerHTML.substring(0, length);
t12 = e12.innerHTML.substring(0, length);
document.getElementsByClassName('truncated')[0].innerHTML = t1 + '...';

e1.addEventListener("mouseout", () => {
    let length = 100;
    let trimmedString = e1.innerHTML.substring(0, length);
    document.getElementsByClassName('truncated')[0].innerHTML = t1;
});

e1.addEventListener("mouseover", () => {
    let length = 98;
    let trimmedString = e1.innerHTML.substring(0, length);
    document.getElementsByClassName('truncated')[0].innerHTML = t1 + ', tuesday, etc.) the bot now can learn - if you want to teach him some new phrases, just use a special command and he\'ll remember this (in the near future we will make this learning intelligent: the bot won\'t accept rude words and filter expressions)';

});

e2.addEventListener("mouseout", () => {
    let length = 100;
    let trimmedString = e2.innerHTML.substring(0, length);
    document.getElementsByClassName('truncated')[1].innerHTML = t2;
});

e2.addEventListener("mouseover", () => {
    let length = 98;
    let trimmedString = e2.innerHTML.substring(0, length);
    document.getElementsByClassName('truncated')[1].innerHTML = t2 + ', tuesday, etc.) tuesday, etc.) imagined what will happen if you will see whole solar system in your room?We give you opportunity to see it!Welcome to SolAR System!)';
});


e3.addEventListener("mouseout", () => {
    let length = 100;
    let trimmedString = e3.innerHTML.substring(0, length);
    document.getElementsByClassName('truncated')[2].innerHTML = t3;
});

e3.addEventListener("mouseover", () => {
    let length = 98;
    let trimmedString = e3.innerHTML.substring(0, length);
    document.getElementsByClassName('truncated')[2].innerHTML = t3 + ', tuesday, etc.) the bot now can learn - if you want to teach him some new phrases, just use a special command and he\'ll remember this (in the near future we will make this learning intelligent: the bot won\'t accept rude words and filter expressions)';
});