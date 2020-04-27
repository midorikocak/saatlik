// var degisken = 'Midori';

// console.log(degisken);

/*

var istedigimMaas = 5500;

var brut = istedigimMaas * 2.5;

var kdvLi = brut * 1.18;

var aylikSaat = 8 * 5 * 4;

var saatlikUcret = kdvLi / aylikSaat;

*/

//console.log(saatlikUcret);


function merhaba(isim){
	alert('Merhaba! '+ isim);
}

function saatlikUcretHesapla(istedigimMaas){
	let brut = istedigimMaas * 2.5;

	let kdvLi = brut * 1.18;

	let aylikSaat = 8 * 5 * 4;

	let saatlikUcret = kdvLi / aylikSaat;

	return saatlikUcret;
}

function checkInput(){
	let maas = maasInput.value;
	/*
		== eşitse
		> büyükse
		< küçükse
		>= büyük eşit
		<= küçük eşit
		|| veya
		&& ve
		*/

		if(isNaN(maas)){
			alert('Yanlış maaş değeri');
		}
		else{
			let sonuc = saatlikUcretHesapla(maas);
			saatlikInput.value = sonuc;
		}
	}

// let sonuc = saatlikUcretHesapla(11000);

// console.log(sonuc)

// alert(sonuc) 

let maasInput = document.getElementById('maas');

// maasInput.value;

let saatlikInput = document.getElementById('saatlik');

// saatlikInput.value = 25;


let toplamSaatInput = document.getElementById('toplamSaat');

let toplamMaliyetInput = document.getElementById('toplamMaliyet');

let hesaplaButton = document.getElementById('hesapla');

maasInput.addEventListener('input', function(){
	checkInput();
});

//console.log(maasInput.value);

hesaplaButton.addEventListener('click', function(event){
	event.preventDefault();

	let saat = toplamSaatInput.value;

	if(isNaN(saat)){
		alert('Yanlış saat değeri');
	}
	else{
		let toplamMaliyet = saatlikInput.value * saat;
		toplamMaliyetInput.value = toplamMaliyet;
	}
});



