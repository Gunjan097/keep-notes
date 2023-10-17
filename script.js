const add_note = document.querySelector('#add');

const updateLSData = () => {
    const notes_Arr = [];
    const data = document.querySelectorAll('textarea');
    data.forEach((note) => {
        return notes_Arr.push(note.value);
    })
    // console.log(notes);
    localStorage.setItem('notes_Arr', JSON.stringify(notes_Arr));
}

const addnewNote = (text = '') => {
    // alert("adgsfg")
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
    <div class="operation">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    <div class="main  ${text ? "" : "hidden"}"  ></div>
    <textarea  class=" ${text ? "hidden" : ""}"></textarea>`;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);
    document.body.appendChild(note);
    const dlt = note.querySelector(".delete");
    const edit = note.querySelector(".edit");
    const textarea = note.querySelector("textarea");
    const main = note.querySelector(".main");

    textarea.value = text;
    main.innerHTML = text;

    dlt.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })


    edit.addEventListener('click', (event) => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
        // console.log(typeof(event));
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        // console.log(value);
        textarea.classList.toggle("hidden");
        main.classList.toggle("hidden");
        main.innerHTML = value;
        updateLSData();
    })
}

const notes = JSON.parse(localStorage.getItem("notes_Arr"));

if (notes) { notes.forEach((note) => addnewNote(note)) };

add_note.addEventListener('click', () => addnewNote())


