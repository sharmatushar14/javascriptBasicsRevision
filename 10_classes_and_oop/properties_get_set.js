function User(email, password){
    this.email1 = email;
    this.password1 = password;

    Object.defineProperty(this, 'email', {
        //Please make sure here property passed as parameter will be taken as defineProperty argument as in functions converting to objects, there parameter is referred as property
        get: function() {
            return this.email1.toUpperCase();
        },
        set: function(value){
            this.email1 = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return this.password1.toUpperCase();
        }, 
        set: function(value){
            this.password1 = value;
        }
    });
}

const user1 = new User('tushar@gmail.ai', 'Tushar');
console.log(user1.email); // Output: TUSHAR@GMAIL.AI


// accessing this.email and this.password directly within the getter and setter functions would cause the same getter or setter to be called recursively, leading to unexpected behavior or an infinite loop.

// Therefore, using _email/email1 and _password/password1 as backing variables ensures that the getter and setter functions interact with the correct internal properties, maintaining the intended behavior of encapsulation and controlled access.