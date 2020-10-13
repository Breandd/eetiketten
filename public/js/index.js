

document.getElementById("login").addEventListener('click', (e) => {
    e.preventDefault()

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then( (result) => {
        
        const token = result.credential.accessToken
        const user = result.user

        const users = db.collection('users').where('email', '==', user.email)
        let addUser = true
        users.get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                addUser = true
            })
        })

        if (addUser) {
            db.collection('users').doc().set({
                email: user.email,
                name: user.displayName
            })
        }


    }).catch((error) => {
        // ERROR
        console.log(error)
    })
});

document.getElementById("addFriends").addEventListener('submit', (e) => {
    e.preventDefault()

    email = document.getElementById('form_email')
    currentUser = firebase.auth().currentUser

    const users = db.collection('users').where('email', '==', email.value)
    users.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(currentUser.email)
            console.log(doc.data())

            db.collection('users').doc().set({
                request: [currentUser.email]
            }, {merge: true})
        })
    })
})
