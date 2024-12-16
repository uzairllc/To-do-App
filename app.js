// Get the necessary elements
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const notesList = document.getElementById('notesList');

// Function to create a new note
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("Please write something in the note!");
        return;
    }

    // Create a note element
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    // Create the note text paragraph
    const notePara = document.createElement('p');
    notePara.textContent = noteText;
    noteDiv.appendChild(notePara);

    // Create a delete button for the note
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('deleteBtn');
    deleteButton.onclick = () => {
        notesList.removeChild(noteDiv); // Remove the note from the list
    };
    noteDiv.appendChild(deleteButton);

    // Add the new note to the list
    notesList.appendChild(noteDiv);

    // Clear the input field
    noteInput.value = "";
}

// Event listener for the Add Note button
addNoteButton.addEventListener('click', addNote);

// Optional: Allow pressing Enter to add the note
noteInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addNote();
    }
});
