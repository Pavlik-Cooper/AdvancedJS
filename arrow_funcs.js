{
	const a = 5
	const b = 10
	var c = 3
}

var box = {
	clickMe: function() {
		console.log(this)
        
		let foo6 = () => {
			console.log("in foo6");
			console.log(this);
		}
		
		var foo5 = function() {
			console.log("in foo5")
			console.log(`The this keyword is either global or window - ${this === global}`)
		}
		
		// foo.apply(this)
		foo6()
		foo5()
	}
}

box.clickMe()

var Person = function (name) {
    this.name = name
}

Person.prototype.displayFriends = function (friends) {
   friends.forEach(function(friend){
   		console.log(this.name + " is friend of " + friend)
   }.bind(this))
	// friends.forEach(friend => console.log(this.name + " is friend of " + friend))
};

var paul = new Person("paul");
paul.displayFriends(["john","jane"]);

