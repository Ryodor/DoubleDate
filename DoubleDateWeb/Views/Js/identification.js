function VerifiyId() {
    let mail = document.getElementById("mail").value;
    let mdp = document.getElementById("mdp").value;

    console.log("verifyId");


    getValidUser(mail, mdp)
        //document.location.href = `http://localhost:3000/VerifyId/${mail}/${mdp}`;
}

async function getValidUser(mail, mdp) {
    return new Promise((resolve, reject) => {
        ajaxRequestGET(`/VerifyId/${mail}/${mdp}`, (res) => {
            let response = JSON.parse(res);
            //            console.log("my response : " + Object.value(response));
            console.log(Object.values(response));

            if (response.length) {
                console.log("yolo");

                resolve(response);
            }
            reject('error');
        })
        console.log(resolve);
        console.log(reject);
    })
}