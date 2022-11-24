function goodButton(response) {
    let data= response.data.message;
    for (let post of data){
        console.log(post);
        document.body.style.backgroundColor = `aqua`;
        document.body.insertAdjacentHTML(`afterend`,`<img src=${post}>`);
    }
}

function badButton(error) {
    document.body.insertAdjacentHTML(`afterend`,`<p>Nice Try.</p>`)
    console.log("failure");
}

function search() {
axios.request({
    url : "https://dog.ceo/api/breeds/image/random/2"
}).then(goodButton).catch(badButton)
}

document.getElementById(`button`).addEventListener(`click`,search);