$(document).ready(function(){
	var metrs = $('.apartment-options-table__cell_right:eq(1)').text();
	metrs = metrs.replace('м2', '').trim();
	metrs = metrs.replace(',', '.');
	metrs = metrs.replace(/\s/g, "");
	metrs = parseFloat(metrs);

	var priceInBaks = $('.apartment-bar__price-value_complementary').text();
	priceInBaks = priceInBaks.replace('$', '').trim();
	priceInBaks = priceInBaks.replace(/\s/g, "");
	priceInBaks = parseFloat(priceInBaks);
	
	var pricePerMetr = '   (' + (priceInBaks / metrs).toFixed() + ' $ за м2)';
	
	$('.apartment-bar__price-value_complementary').append(pricePerMetr);
});