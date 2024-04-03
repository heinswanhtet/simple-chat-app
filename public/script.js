const socket = io()

socket.on('messageFromServerToClient', data => {
    document.getElementById('messages').innerHTML += `<li>${data}</li>`
})

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()

    let message = document.getElementById('input')

    socket.emit('messageFromClientToServer', message.value)


    message.value = ''
})