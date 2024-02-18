        const length=12;

        const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase="abcdefghijklmnopqrstuvwxyz";
        const numbers="0123456789";
        const symbol="!@#$%^&*()_-+={[};,.";

        const allChars= upperCase+lowerCase+numbers+symbol;

        function createPassword()
        {
            console.log(document.getElementById('password'));
            let password= "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += numbers[Math.floor(Math.random() * numbers.length)];
            password += symbol[Math.floor(Math.random()*symbol.length)];



            while(length> password.length){
                password += allChars[Math.floor(Math.random() *allChars.length)];
            }
            document.getElementById('password').value = password

        }

        function copyPassword(){
            document.getElementById('password').select();
           document.execCommand("copy");
         }