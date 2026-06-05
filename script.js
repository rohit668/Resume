const editBtn = document.getElementById('edit-resume');
const downloadPdfBtn = document.getElementById('download-pdf');
const resumeContent = document.getElementById('resume-content');

// PDF Download
downloadPdfBtn.addEventListener('click', () => {
    // If in edit mode, turn it off before printing to ensure clean output
    if (resumeContent.getAttribute('contenteditable') === 'true') {
        toggleEditMode();
    }
    window.print();
});

// Live Edit Toggle
editBtn.addEventListener('click', toggleEditMode);

function toggleEditMode() {
    const isEditing = resumeContent.getAttribute('contenteditable') === 'true';
    
    if (isEditing) {
        // Switch to View Mode
        resumeContent.setAttribute('contenteditable', 'false');
        editBtn.textContent = 'Edit Resume';
        editBtn.classList.remove('active');
        console.log('Resume changes saved locally in the browser session.');
    } else {
        // Switch to Edit Mode
        resumeContent.setAttribute('contenteditable', 'true');
        editBtn.textContent = 'Save Changes';
        editBtn.classList.add('active');
        resumeContent.focus();
    }
}
