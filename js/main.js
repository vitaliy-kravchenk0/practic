document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const add = document.querySelector(".add"),
        input = document.querySelector(".write"),
        parentItem = document.querySelector(".items-block"),
        toDo = [];

    function clearItems() {
        parentItem.innerHTML = "";
    }

    function addItems() {
        toDo.push(input.value);

        toDo.forEach(item => {
            parentItem.innerHTML += `
                <div class="item">
                    <p class="text">${item}</p>
                    <div class="item__button">
                        <img class="edit" src="img/edit.svg" alt="Редактировать">
                        <img class="delete" src="img/delete.svg" alt="Удалить">
                    </div>
                </div>
            `;
        });

        input.value = "";
    }

    function deleteItem() {
        const btn = document.querySelectorAll(".delete"),
            items = document.querySelectorAll(".item");

        btn.forEach((item, i) => {
            item.addEventListener("click", (e) => {
                if (e.target && e.target == item) {
                    toDo.splice(i, 1);
                    items[i].remove();
                    deleteItem();
                }
            });
        });
    }

    deleteItem();

    add.addEventListener("click", () => {
        if (input.value != "") {
            clearItems();
            addItems();
            deleteItem();
        } else {

        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            if (input.value != "") {
                clearItems();
                addItems();
                deleteItem();
            } else {
    
            }
        } else {

        }
    });
});