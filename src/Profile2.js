const profile2 = _ => {
    const user = {
        firstName: "Koppanyi",
        lastName: "Zsolt"
    }

    //const firstName = user.firstName;
    //const lastName = user.lastName;

    const {firstName, lastName} = user;  // ez ugyanaz lesz, ami a fenti két sorban van
    /* Itt nem lehet tetszőleges nevet adni neki, mint egy tömbnél!
    Csak olyan változó nevet lehet adni, amilyen kulccsal rendelkezik ez az objektum
    Ha pl. a lastName van elöl és a 2. a firstName, akkor is azt íra ki
    */

    return <div>
        

        <h2>{firstName}</h2>
        <h3>{lastName}</h3>


     </div>
}


function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}



export default profile2