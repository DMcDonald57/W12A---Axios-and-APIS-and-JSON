function goodButton(response) {
    console.log(`success`);
}

function badButton(error) {
    document.body.insertAdjacentHTML(`afterend`,`<p>Nice Try.</p>`)
    console.log("failure");
}

axios.request({
    url : "https://api.disneyapi.dev/characters"
}).then(goodButton).catch(badButton);