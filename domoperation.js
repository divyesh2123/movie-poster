export const handleButton = ()=>{

    const mynumbers = document.querySelectorAll(".number");

    const num = document.getElementById("num").value;

    const checkedcount = document.querySelectorAll("input[type='checkbox']:checked").length;


    console.log(checkedcount.length);

    console.log(num);

    mynumbers.forEach((v)=>{

        if(v.previousElementSibling.firstElementChild.checked || checkedcount ==0)
        {

        v.textContent = +(v.textContent) + (+num);

        }
        else 
        {

        }


    })


}