import { app } from "./config.js"
import { getDatabase, set, ref, child, get, remove, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
const db = getDatabase();
console.log(db);
var name = document.getElementById("name");
var roll = document.getElementById("roll");
var year = document.getElementById("year");
var branch = document.getElementById("branch");
// var count = 1;
var addbtn = document.getElementById("add");
addbtn.addEventListener("click", add);
function add() {
    set(ref(db, "students/" + roll.value), { name: name.value, roll: roll.value, year: year.value, branch: branch.value });

}
var readbtn = document.getElementById("read");
readbtn.addEventListener("click", read);
function read() {
    var tab = document.getElementById("table1");
    tab.innerHTML = "<tr><th>name</th><th>roll</th><th>year</th><th>branch</th></tr>"
    get(child(ref(db), "students")).then((snapshot) => {
        let arr = Object.values(snapshot.val())
        arr.forEach((ele) => {
            tab.innerHTML += "<tr><td>" + ele.name + "</td><td>" + ele.roll + "</td><td>" + ele.year + "</td><td>" + ele.branch + "</td></tr>"
        });
    });
}


var updatebtn = document.getElementById("update");
updatebtn.addEventListener("click", update1);
function update1() {
    var u_roll = prompt("enter roll no to update")
    var choice = prompt("enter field to update")
    if (choice == "name") {
        var u_name = prompt("enter name to update")
        update(ref(db, "students/" + u_roll), { name: u_name, })
    }
    else if (choice == "year") {
        var u_year = prompt("enter year to update")
        update(ref(db, "students/" + u_roll), { year: u_year })
    }
    else if (choice == "branch") {
        var u_branch = prompt("enter branch to update")
        update(ref(db, "students/" + u_roll), { branch: u_branch })
    }
    alert(choice + "updated succesfully")

}


var deletebtn = document.getElementById("deleting");
deletebtn.addEventListener("click", deleting);
function deleting() {
    var d_roll = prompt("enter roll to delete")
    remove(ref(db, "students/" + d_roll));
    alert(d_roll + "deleted succesfully");

}


