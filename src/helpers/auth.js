import {firebaseAuth, ref} from '../config/constants'

export function auth(student) {
    ref.push({
        name: student.name,
        email: student.email,
        address: student.address,
        city: student.city,
        phoneNumber: student.phoneNumber,
    });
}

export function logout() {
    return firebaseAuth().signOut()
}

export function login(email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser(user) {
    return ref.child(`users/${user.uid}/info`)
        .set({
            email: user.email,
            uid: user.uid,

        })
        .then(() => user)

}
