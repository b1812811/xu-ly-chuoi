let myEl = document.getElementById('ext-gen1010');
myEl.addEventListener('dblclick',function myFunction1() {
    // click reset
    var click = document.getElementById("reset_pass1e11c20b31a91860619f06163b447d76")
    click.click()
    

    // Click Yes
    var yes = document.getElementById("button-1010")
    yes.click()
    

    setTimeout(function getText() {
        var test = document.getElementById('component-1003').innerText
        console.log(test)
    }, 2000)

    // Close
    setTimeout(function closeX() {
        var Ok = document.getElementById("button-1009")
        Ok.click()
    }, 3000)
});


