// write your JS code here

let alphabates = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function initialize() {
    for (let i = 0; i < alphabates.length; i++) {
        document.querySelector('.card-body').innerHTML +=  `<div class="button-image" onclick="keyPress('${alphabates[i]}')">
                                        <p id="letters" >${alphabates[i]}</p>
                                    </div>`
                                     
    }
    document.querySelector('.card-body').innerHTML += ` <div class="space-bar" onclick=" keyPress(' ')" > <p>SPACE</p> </div>
    <div class="massage-key" onclick="messageAlert()">
    <p>
        <i class="fas fa-arrow-circle-right"></i>
    </p>
    </div>`;

}

// alert message when you click arrow button

function messageAlert() {
    alert("message deliverd");
}

function keyPress(key) {
    const textAreaEl = document.querySelector("#input");
    textAreaEl.innerHTML += key;
}