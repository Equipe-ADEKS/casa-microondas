const mode = document.getElementById ('icon_moon')

mode.addEventListener('click', () =>{
    //const form = getElementById('corpo')//
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        //form.classList.add('light');//

        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        //form.classList.remove('light');//
})