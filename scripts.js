function copyCommandText(command, element, event) {
    // Copy the command text to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = command;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Remove any existing 'copied' tags to prevent duplicates
    const existingCopiedTag = document.querySelector('.copied-tag');
    if (existingCopiedTag) {
        existingCopiedTag.remove();
    }

    // Create a 'Copied!' tag
    const copiedTag = document.createElement('div');
    //copiedTag.classList.add('copied-tag');
    copiedTag.textContent = 'Copied!';

    // Position the tag near the click location
    copiedTag.style.position = 'absolute';
    copiedTag.style.left = `${event.pageX}px`;
    copiedTag.style.top = `${event.pageY}px`;
    copiedTag.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    copiedTag.style.color = '#fff';
    copiedTag.style.padding = '8px 12px';
    copiedTag.style.borderRadius = '5px';
    copiedTag.style.zIndex = '1000';
    copiedTag.style.fontSize = '14px';
    copiedTag.style.opacity = '1';
    copiedTag.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    copiedTag.style.transform = 'translateY(-10px)'; // Add slight upward movement

    document.body.appendChild(copiedTag);

    // Fade out and move up the 'Copied!' tag after a short delay
    setTimeout(() => {
        copiedTag.style.opacity = '0';
        copiedTag.style.transform = 'translateY(-20px)'; // Increase upward movement for smooth animation
        setTimeout(() => {
            copiedTag.remove();
        }, 800); // Wait for the fade-out transition to complete before removing
    }, 500); // Display for 1 second before starting fade-out

    // Trigger the button's clicked animation
    element.classList.add('clicked');
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 500); // Adjust this duration as needed
}
