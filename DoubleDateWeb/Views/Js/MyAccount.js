async function getMyCouple(id) {
    return new Promise((resolve, reject) => {
        ajaxRequestGET(`/getMyCouple/${id}`, (res) => {
            let response = JSON.parse(res);
            if (response.length) {
                resolve(response);
            }
            reject('error');
        })
    })
}

async function getUserInfoById(id) {
    return new Promise((resolve, reject) => {
        ajaxRequestGET(`/getUserInfoById/${id}`, (res) => {
            let response = JSON.parse(res);
            if (response.length) {
                resolve(response);
            }
            reject('error');
        })
    })
}

function getPartenaireInfo(id) {
    let couple = getMyCouple(id)
    let partenaire;
    couple.then((value) => {
        if (value[0].utilisateur_id_A == id) {
            partenaire = getUserInfoById(value[0].utilisateur_id_B)
        } else {
            partenaire = getUserInfoById(value[0].utilisateur_id_A)
        }
        partenaire.then((value2) => {
            console.log(value2[0].email)
            displayPartenaire(value2[0].email)
        })
    });
}

function displayPartenaire(email) {
    let pbalise;
    pbalise = `<p>${email}</p>`

    document.getElementById("partenaire").innerHTML += pbalise;
}

getPartenaireInfo(1);