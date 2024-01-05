const todoForm = () => {
    let inputName = document.querySelector('.todo__title-input')

    let inputTask = document.querySelector('.todo__input')

    let icons = document.querySelectorAll('.icon')

    let btn = document.querySelector('.todo__btn')

    let classNameIcon = ''

    const selectCategory = (clickedIcon) => {
        classNameIcon = clickedIcon.classList.contains('icon__business') ? 'icon__business' : 'icon__personal'
        icons.forEach(icon => {
            if (icon === clickedIcon) {
                icon.classList.toggle('icon-circle-empty')
                icon.classList.toggle('icon-dot-circled')
            } else {
                icon.classList.add('icon-circle-empty')
                icon.classList.remove('icon-dot-circled')
            }
        })
    }

    icons.forEach(icon => icon.addEventListener('click', () => selectCategory(icon)))

    const editTodo = (e, text, input, editBtn) => {

        if (e.target.textContent === "Edit") {

            input.value = text.textContent
            text.style.display = 'none'
            input.style.display = 'block'

            input.focus()
            input.selectionStart = input.selectionEnd = input.value.length

            editBtn.innerHTML = "Save"

        } else if (e.target.textContent === "Save") {
            text.textContent = input.value
            text.style.display = 'block'
            input.style.display = 'none'
            editBtn.innerHTML = "Edit"
        }
    }

    const deleteTodo = (parent, newTask) =>  {
        parent.removeChild(newTask)
    }

    const checkTasks = (e, newTask, text, input) => {

        if (e.target.classList.contains('icon-circle-empty')){
            e.target.classList.toggle('icon-circle-empty')
            e.target.classList.toggle('icon-dot-circled')

            text.style.textDecoration = 'line-through'
            text.style.color = 'grey'
            input.style.color = 'grey'
            input.style.textDecoration = 'line-through'

        }else {
            e.target.classList.add('icon-circle-empty')
            e.target.classList.remove('icon-dot-circled')
            e.target.classList.remove('line-through')

            text.style.textDecoration = 'none'
            input.style.textDecoration = 'none'

            text.style.color = '#302f3d'
            input.style.color = '#302f3d'
        }
    }

    const addTodo = () => {

        let parent = document.querySelector('.todo__list')
        let newTask = document.createElement("div")

        if (inputTask.value.length < 1){
           alert("You need to write something!")
            return
        }else if (classNameIcon.length < 1){
            alert("Select a category!")
            return
        }else {
            newTask.innerHTML = `<div class="todo__item">
                <div class="todo__item-left">
                    <i class="icon-circle-empty todo__item-icon ${classNameIcon}"></i>
                    <p class="todo__item-text">${inputTask.value}</p>
                    <input class="todo__item-input" value="${inputTask.value}"/>
                </div>
                <div class="todo__item-btns">
                    <button class="todo__btn-edit">Edit</button>
                    <button class="todo__btn-delete">Delete</button>
                </div>
            </div>`

            parent.appendChild(newTask)

            inputTask.value = ''
            classNameIcon = ''

            icons.forEach(icon => {
                icon.classList.add('icon-circle-empty')
                icon.classList.remove('icon-dot-circled')
            })
        }

        const deleteBtn = newTask.querySelector('.todo__btn-delete')
        const editBtn = newTask.querySelector('.todo__btn-edit')

        let text = newTask.querySelector('.todo__item-text')
        let input = newTask.querySelector('.todo__item-input')
        let checkBtn = newTask.querySelector('.todo__item-icon')

        editBtn.addEventListener('click', (e) => editTodo(e, text, input, editBtn))
        deleteBtn.addEventListener('click', () => deleteTodo(parent, newTask))
        checkBtn.addEventListener('click', (e) => checkTasks(e, newTask, text, input))

        document.addEventListener('click', function (e) {
            const isClickInsideEditArea = newTask.contains(e.target) || editBtn.contains(e.target)

            if (!isClickInsideEditArea) {
                editTodo({ target: { textContent: "Save" } }, text, input, editBtn);
            }
        });

    }


    btn.addEventListener('click', addTodo)

}


document.addEventListener('DOMContentLoaded', function () {
    todoForm()
})

