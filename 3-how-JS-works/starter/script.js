///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
calcAge(1990); // 2 but it doesn't matter

function calcAge(year) {
	console.log(2016 - year);
}

// 1 calcAge(1990); this is were people think its suppose to be



// 4 retirement(1990); // this time it does not work because this function is a function expression not a function declaration. Hositing only works on function delcarations.

var retirement = function(year){
	console.log(65 - (2016 - year));
}

// 3 retirement(1990); now we are gonna try to do the same thing we did up there




// variables

// 5 console.log(age); if you console.log it before declaring the variable then it will console log that it's undefined. This applaies everywere.
var age = 23;

function foo() {
	var age = 65;
	console.log(age);
}
foo();
console.log(age);

// 6 to simply describe what's going on here it's basicly two diffrent variables since the two are declared in to diffrent variable objects. The first one has its own object while the other is stored in the functions variable object.
*/

///////////////////////////////////////
// Lecture: Scoping
/*

// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/
// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(c); // this won't work since the global scope can not access the first or second scope. but still the second scope can still call third because it has access to the global scope.
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*
calcAge(1985);

function calcAge(year) {
	console.log(2016 - year);
	console.log(this);
}
*/
var john = {
	name: 'John',
	yearOfBirth: 1990,
	calcAge: function() {
		console.log(this);
		console.log(2016 -this.yearOfBirth);
		/*
		function innerFunction() {
			console.log(this);
		}
		innerFunction();
		*/
	}
}

john.calcAge();

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calcAge = john.calcAge
mike.calcAge();
mike










