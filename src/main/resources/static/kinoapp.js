//jQuery(document).ready(function($) {
//	alert("js is working")};
//alert("JS test :p");

//console.log("test i konsollen :)");


//input-validation --------------------
//Tall-validation, checks then sends to getAntall
function checkAntall() {
	let tallcheck = document.getElementById("antall").value;
	let tall = Number(tallcheck);
	if (isNaN(tall)) {
		document.getElementById("antallMessage").innerHTML = "Må være et tall høyere enn null";
	} else {
		let antall1 = document.getElementById("antall").value;
		console.log("Valgt antall billetter er: "+antall1);
		document.getElementById("antallMessage").innerHTML = "";
	}
}

//input tests --------------------
//getFilm writes chosen film to console
function getFilm(){
	let film1 = document.getElementById("film").value;
	console.log("Filmen oppgitt er: "+film1);
}

//checkFornavn writes fornavn to console
function checkFornavn() {
	let fornavn1 = document.getElementById("fornavn").value;
	console.log("Fornavn oppgitt er : " + fornavn1);
}

//checkEtternavn writes etternavn to console
function checkEtternavn() {
	let etterNavn1 = document.getElementById("etternavn").value;
	console.log("Etternavn oppgitt er : " + etterNavn1);
}

//checkTelefonnr writes telefonnr to console
function checkTelefonnr() {
	let telefonnr1 = document.getElementById("telefonnr").value;
	let tall = Number(telefonnr1);
	if (isNaN(tall)) {
		document.getElementById("telefonnrMessage").innerHTML = "Må være et telefonnr";
	} else {
		let antall1 = document.getElementById("antall").value;
		console.log("Valgt antall billetter er: " + antall1);
		document.getElementById("antallMessage").innerHTML = "";
		console.log("Telefonnr oppgitt er : " + telefonnr1);
	}
}

	//checkEpost writes Epost to console
function checkEpost() {
	let epost1 = document.getElementById("epost").value;
	console.log("Epost oppgitt er : " + epost1);
}




//create billett-array
let billetter= [];

//kjopBillett checks if form is filled out, inputvalidates, and registers billet as a new object
//      before adding it to billetter[]
function kjopBillett() {
		// checks for empty fields and adds 1 to checkCounter
	let film1 = document.getElementById("film").value;
	let checkCount = 0;
	if (film1 === "Film") {
		document.getElementById("filmMessage").innerHTML = "Velg en Film";
	} else {
		document.getElementById("filmMessage").innerHTML = "";
		checkCount++;
	}
	let antall1 = document.getElementById("antall").value;
	if (antall1 <= 0) {
		document.getElementById("antallMessage").innerHTML = "Må skrive noe inn i anntall";
	} else{
		document.getElementById("antallMessage").innerHTML = "";
		checkCount++;
	}
	let fornavn1 = document.getElementById("fornavn").value;
	if (fornavn1 === "") {
		document.getElementById("fornavnMessage").innerHTML = "Må skrive noe inn i Fornavn";
	} else{
		document.getElementById("fornavnMessage").innerHTML = "";
		checkCount++;
	}
	let etterNavn1 = document.getElementById("etternavn").value;
	if (etterNavn1 === "") {
		document.getElementById("etternavnMessage").innerHTML = "Må skrive noe inn i Etternavn";
	} else {
		document.getElementById("etternavnMessage").innerHTML = "";
		checkCount++;
	}
	let telefonnr1 = document.getElementById("telefonnr").value;
	if (telefonnr1.length !== 8) {
		document.getElementById("telefonnrMessage").innerHTML = "Må skrive noe inn i Telefonnr";
	} else {
		document.getElementById("telefonnrMessage").innerHTML = "";
		checkCount++;
	}
	let epost1 = document.getElementById("epost").value;
	if (epost1.length < 3) {
		document.getElementById("epostMessage").innerHTML = "Må skrive noe inn i Epost";
	} else {
		document.getElementById("epostMessage").innerHTML = "";
		checkCount++;
	}


	//creates an object with the inputs, adds it to an array, and resets input fields
	let billett;

	if (checkCount != 6) {
	} else {
		billett = {
			film: film1,
			antall: antall1,
			fornavn: fornavn1,
			etternavn: etterNavn1,
			telefonnr: telefonnr1,
			epost: epost1
		}
		checkCount = 0;
		billetter.push(billett);

		// Resets input fields
		document.getElementById("film").value = "Film";
		document.getElementById("antall").value = "";
		document.getElementById("fornavn").value = "";
		document.getElementById("etternavn").value = "";
		document.getElementById("telefonnr").value = "";
		document.getElementById("epost").value = "";
	}


	let billettlisteContent="";
	for(let i in billetter) {
 		billettlisteContent += billetter[i].film+", "+billetter[i].antall+", "+
			billetter[i].fornavn+", "+billetter[i].etternavn+", "+billetter[i].telefonnr
		+", "+billetter[i].epost+"<br>";
	}
	document.getElementById("billettliste").innerHTML = billettlisteContent;


}

//function to delete values of billetter[]
function slettBilletter(){
	billetter = [];
	billettlisteContent="";
	document.getElementById("billettliste").innerHTML = billettlisteContent;
}





