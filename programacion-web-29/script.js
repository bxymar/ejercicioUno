const arrayContentApplicants = ["TONNY", "BEYMAR", "JAFFET", "BRAYAN", "WILMER", "MAICOL", "FABIAN", "JESUS", "CACHI", "WALAS", "EUGENIO", "JHOEL", "JASMIN", "JOSIAS", "CORI"];

function displayListApplicants(){
    let divCotentApplicants = document.querySelector('.contianer-display-list-son');
    divCotentApplicants.innerHTML = '<ul><li>' + arrayContentApplicants.join('</li><li>') + '</li></ul>';
}

function applicantDraw(){
    let winningApplicant = arrayContentApplicants[Math.floor(Math.random() * arrayContentApplicants.length)];
    document.getElementById('salida-ganador').value = winningApplicant;
}