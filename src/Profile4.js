/* 
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() { return `${this.firstName} ${this.lastName}` }
}

 */

    class User{
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    };


    const profile4 = () => {
    const newUser = new User("Anna", "Kovács");
    console.log(newUser);

    return <div>{newUser.fullName()}</div>
}

export default profile4