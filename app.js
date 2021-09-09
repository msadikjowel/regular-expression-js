const validEmail = document.getElementById('valid').style.display = 'none';
const invalidEmail = document.getElementById('invalid').style.display = 'none';

const submit = () => {
    const input = document.getElementById('input-text');
    const inputText = input.value;
    input.value = ''
    console.log(inputText)
    // const messageContainer = document.getElementById('message');
    // const h4 = document.createElement('h4')
    // messageContainer.appendChild(h4)

    const valid = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (valid.test(inputText)) {
        // h4.innerText = 'Valid'
        document.getElementById('valid').style.display = 'block'
        document.getElementById('invalid').style.display = 'none'
    }
    else {
        // h4.innerText = 'Invalid'
        document.getElementById('invalid').style.display = 'block'
        document.getElementById('valid').style.display = 'none'
    }
}