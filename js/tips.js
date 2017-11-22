function randomTips() {
    var holidayTips = new Array();
    holidayTips[0] = "img/mugs/BigSocks.png";
	holidayTips[1] = "img/mugs/CandyCane.png";
	holidayTips[2] = "img/mugs/DessertKidnap.png";
	holidayTips[3] = "img/mugs/DIY.png";
	holidayTips[4] = "img/mugs/DogDoesntWantIt.png";
	holidayTips[5] = "img/mugs/HangoverCure.png";
	holidayTips[6] = "img/mugs/HostessGift.png";
	holidayTips[7] = "img/mugs/LeftHand.png";
	holidayTips[8] = "img/mugs/NewRecipe.png";
	holidayTips[9] = "img/mugs/BeautifulSweater.png";
	holidayTips[10] = "img/mugs/CatchSnow.png";
	holidayTips[11] = "img/mugs/DessertKidnap.png";
	holidayTips[12] = "img/mugs/Edible.png";
	holidayTips[13] = "img/mugs/FireplaceCannel.png";
	holidayTips[14] = "img/mugs/FruitCakes.png";
	holidayTips[15] = "img/mugs/GravyHygiene.png";
	holidayTips[16] = "img/mugs/InLaws.png";
	holidayTips[17] = "img/mugs/PostalWorker.png";
	holidayTips[18] = "img/mugs/StaysAtTheNorthPole.png";
	holidayTips[19] = "img/mugs/StrangersChimney.png";
	holidayTips[20] = "img/mugs/TurkeyBreast.png";
	holidayTips[21] = "img/mugs/WWCGD.png";
    var rnd = Math.floor(Math.random() * holidayTips.length);
    if (rnd === 0) {
            rnd = 1;
    }
	
    $('#holiday-tip').html("<img class='img-fluid animated fadeIn snow-mug' src='" + holidayTips[rnd] + "'>");

}
