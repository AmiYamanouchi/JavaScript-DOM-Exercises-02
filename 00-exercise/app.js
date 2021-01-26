const list = document.getElementById('tweets');
// const inputText= document.querySelector('#tweetForm');
const btn = document.querySelector('button');
const inputName = document.querySelector('input[name="username"]')
const inputText = document.querySelector('input[name="tweet"]')


btn.addEventListener('click', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `${inputName.value} - ${inputText.value}`
    list.appendChild(li);

    inputName.value = "";
    inputText.value = "";

})