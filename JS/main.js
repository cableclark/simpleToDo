let button= document.querySelector ("header button");
let comButton= document.querySelectorAll(".compelted button");


button.addEventListener('click', function () {
      let text = document.querySelector ("header input").value;
      if (text) {
        let container = document.querySelector ("#tasks");
        let listItem = document.createElement("li");
        let paragraph = document.createElement("p")
        let completedButton  = document.createElement("button");
        let removeButton  = document.createElement("button")


        paragraph.innerText= text;
        completedButton.innerText= "Compelted";
        completedButton.addEventListener ('click', disableButtons);
        removeButton.innerText= "Remove";
        removeButton.addEventListener ('click', removeItem)
        listItem.appendChild(paragraph);
        listItem.appendChild(completedButton);
        listItem.appendChild(removeButton);
        container.appendChild (listItem);
    }


});

function removeItem () {
    let forRemoval = this.parentNode;
    let Parrent = forRemoval.parentNode;
    Parrent.removeChild(forRemoval);

}

function disableButtons () {
      let sosed= this.nextSibling;
      this.setAttribute("disabled", false);
      sosed.setAttribute("disabled", false);

}
