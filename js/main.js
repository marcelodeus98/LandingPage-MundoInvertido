    import { subscriptionInClub } from "./firebase/clubeDD.js";


    let txtName =  document.getElementById('txtName')
    let txtEmail = document.getElementById('txtEmail')
    let txtLvl = document.getElementById('txtLevel')
    let txtCharacter = document.getElementById('txtCharacter')

    let btnSubmit = document.getElementById('btnSubscribe');

    btnSubmit.addEventListener('click' , async () => {
        const subscription = {
            name : txtName.value,
            email : txtEmail.value,
            level : txtLvl.value,
            character : txtCharacter.value,
            
        }

        const subscriptionID = await subscriptionInClub(subscription);
        console.log(`Inscrito com sucesso: ${subscriptionID}`);

        txtName.value = ''
        txtEmail.value = ''
        txtLvl.value = ''
        txtCharacter.value = ''

    })
