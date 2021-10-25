document.getElementById("revenue").addEventListener("click", click_revenue);
document.getElementById("input-date").style.display = "none";
document.getElementById("fee").addEventListener("click", click_fee);
document.getElementById("note").style.display = "none";

function click_revenue(){
    element_date = document.getElementById("input-date");
    element_note = document.getElementById("note");
    if(element_date.style.display == "none")
    {
        if(element_note.style.display == "block")
            element_note.style.display = "none";
        element_date.style.display = "block";
    }
    else
        element_date.style.display = "none";
}

function click_fee(){
    element_date = document.getElementById("input-date");
    element_note = document.getElementById("note");
    if(element_note.style.display == "none")
    {
        if(element_date.style.display == "block")
            element_date.style.display = "none";
        element_note.style.display = "block";
    }
    else
        element_note.style.display = "none";
}