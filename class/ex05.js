class User {

    static cont = 0;

    constructor(id, name, age) {

        this.id = id
        this.name = name
        this.age = age
        User.cont++

    }

}

let myUser = new User(2111, "Gabriel", 18)
console.log(User.cont)