const fnameerr = document.querySelector("#first")
const fnamerrmes = document.querySelector(".err1")
const lnamerrmes = document.querySelector(".err2")
const emailerrmes = document.querySelector(".err3")
const checkerrmes=document.querySelector(".err4")
const messerrmes=document.querySelector(".err5")
const consenterrmes=document.querySelector(".err6")
const consenterr= document.querySelector(".consent")
const checkerr=document.querySelector(".checking")
const emailerr = document.querySelector("#email")
const lnameerr = document.querySelector("#last")
const messageerr=document.querySelector(".message")
const senddata = document.querySelector(".submit")

senddata.addEventListener('click', errormes)
function errormes() {
    if (fnameerr.value == "" && lnameerr.value == "" && emailerr.value == "" && messageerr.value=="") {
        document.body.classList.toggle("err")
        fnamerrmes.textContent = "this field is requiered"
        lnamerrmes.textContent = "this field is requiered"
        emailerrmes.textContent = "this field is required"
        messerrmes.textContent="this fied is required"
    }
    else if(fnameerr.value == "" ){
        document.body.classList.toggle("err")
        fnamerrmes.textContent = "this field is requiered"
    }
    else if(lnameerr.value == "" ){
        document.body.classList.toggle("err2")
        lnamerrmes.textContent = "this field is requiered"
    }
    else if (!emailerr.value.includes("@gmail.com") || emailerr.value.includes("@outlook.com")) {
        setTimeout(()=>{
        document.body.classList.toggle("err")
        emailerrmes.textContent = "enter a valid email"
        },1000)
    }
    else if(messageerr.value==""){
        document.body.classList.toggle("err4")
        messerrmes.textContent="this fied is required"
    }
    else if (!checkerr==checked){
        checkerrmes.textContent="please select a query type"
    }
    else if (!consenterr == checked){
        consenterrmes.textContent="To submit this form, please consent to being contacted"
    }
    else{
        window.alert("Message Sent! Thanks for completing the form. We'll be in touch soon!")
    }
}
