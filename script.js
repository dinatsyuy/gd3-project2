console.log("working1");


window.onload = function(){
	$('.button-intro').click(toINTRO);
	$('.button-one').click(toONE);
	$('.button-two').click(toTWO);
	$('.button-three').click(toTHREE);
	$('.button-four').click(toFOUR);
	$('.button-five').click(toFIVE);
	$('.button-six').click(toSIX);
}

function toINTRO(){
	$('.year').text('TYPING THROUGH TIME:');
	$('.title').text(' Keyboard History');
	$('.main-image').attr('src', 'images/valentine.jpeg');
	$('.intro').text('Keyboards and typing technology have come a long way over the past couple centuries. The first typing devices were designed and patented in the 1700s while the first manufactured typing devices came about in the 1870s. These machines featured “blind typing” technology, where characters were printed on upside-down pages that remained unseen until completion. Since then, we have seen several updates in design, layout, technology, and function that are more efficient and user-friendly. The type-writer has changed shape dramatically over the years, eventually becoming electronic- then practically obsolete as we moved into the age of computers and the birth of the keyboard. The keyboard is the number one computer interface used around the world, and an integral object for many of us that most people take for granted. This paper will explore the history of typing, detailing the innovations across time that have accumulated  into the definition of today’s standard for the ultimate typing experience.');
	$('.source').text('Typing Through Time: Keyboard History (2019). https://www.daskeyboard.com/blog/typing-through-time-the-history-of-the-keyboard');

	$('.active').removeClass('active');
	$('.button-intro').addClass('active');
}

function toONE(){
	$('.year').text('one: 1865');
	
	$('.title').text('The Writing "Ball"');
	$('.main-image').attr('src', 'images/ball.png');
	$('.intro').text('Early prototypes of the typewriter have existed since the 16th century. Still, it was until the 1870s that Reverend Rasmus Malling-Hansen created a commercially viable option. Known as the “Hansen Writing Ball”, this machine consisted of 52 keys arranged in a semicircular pattern. How the keys were arranged was determined by how frequently they were used; a concept embraced by later models. Malling-Hansen viewed the ways in which the hands of a pianist moved in order to appreciate the mechanical design of the apparatus. Unsurprisingly, the device was known as the “Writing Ball” for its shape.');
	$('.source').text('Anders Noren. All Things Typewriter. https://www.allthingstypewriter.com/history/#A_History_of_the_Typewriter_From_the_Printing_Press_to_the_Mechanical_Keyboard');

	$('.active').removeClass('active');
	$('.button-one').addClass('active');
}

function toTWO(){
	$('.year').text('two: 1874');
	
	$('.title').text('Remington Typewriter One');
	$('.main-image').attr('src', 'images/k1.png');
	$('.intro').text('As with many well-known inventions, we need to clear up a common urban myth. Some believe that the familiar QWERTY layout was designed to decrease typing efficiency. It was thought that this was a way for businesses to charge more money for their services. On the contrary, the design was chosen in order to help typists and secretaries work faster. Originally patented by Christopher Sholes in 1874, this keyboard was intended to avoid jams and reduce errors by placing rarer letters in between common letters. After numerous iterations and a great deal of experimentation, the QWERTY design finally took hold. Some minor changes took place over the years, but this configuration is still the most widely used today.');
	$('.source').text('Anders Noren. All Things Typewriter. https://www.allthingstypewriter.com/history/#A_History_of_the_Typewriter_From_the_Printing_Press_to_the_Mechanical_Keyboard');

	$('.active').removeClass('active');
	$('.button-two').addClass('active');
}

function toTHREE(){
	$('.year').text('three: 1878');
	
	$('.title').text('Remington Typewriter Two');
	$('.main-image').attr('src', 'images/k2.png');
	$('.intro').text('The shift key was first introduced as far back as 1878. It was also referred to as a “carriage shift.” The main purpose was to move the typebar in such a way that a different piece would be placed in contact with the inked ribbon. As a result, it was possible to type two separate letters at the same time. This was essentially intended to enhance the efficiency of existing models as well as to lessen the number of typebars. Obviously, it was very important in the event that both upper- and lower-case letters could be accessed. The shift key also enabled numbers to be associated with symbols.');
	$('.source').text('Anders Noren. All Things Typewriter. https://www.allthingstypewriter.com/history/#A_History_of_the_Typewriter_From_the_Printing_Press_to_the_Mechanical_Keyboard');

	$('.active').removeClass('active');
	$('.button-three').addClass('active');
}

function toFOUR(){
	$('.year').text('four: 1890');
	
	$('.title').text('Double Keyboard One');
	$('.main-image').attr('src', 'images/duplex1.png');
	$('.intro').text('The double keyboard has invented on the Duplex typewriter. It is a keyboard which allowing for two characters to be typed at the same time. So typing the word ‘this’ would be done by typing ‘th’ first and then the ‘is’. Despite the intentions of doubling the speed of typing, it actually slowed one down as it was too much for one to comprehend with any efficiency, the typing of two characters at once.');
	$('.source').text('The Martin Howard Collection. Antique Typewriters. https://www.antiquetypewriters.com/typewriter/duplex-typewriter/');

	$('.active').removeClass('active');
	$('.button-four').addClass('active');
}

function toFIVE(){
	$('.year').text('five: 1894');
	$('.title').text('Double Keyboard Two');
	$('.main-image').attr('src', 'images/duplex2.png');
	$('.intro').text('With the failure of the Duplex, the Duplex 2 appeared with a standard double keyboard with a single character being typed at a time. It was the logical successor to the Duplex typewriter which had a seemingly clever idea of having two complete keyboards, one for each hand. This design required that both hands pushed a key at the same time causing two characters to be typed simultaneously. The intent was to double the speed of typing but as you can imagine, it was very hard to coordinate ones hands to optimize this design. However, at the end the typewriter did not do well and its unique keyboard layout was scrapped.');
	$('.source').text('The Martin Howard Collection. Antique Typewriters. https://www.antiquetypewriters.com/typewriter/duplex-2-typewriter/');

	$('.active').removeClass('active');
	$('.button-five').addClass('active');	
}

function toSIX(){
	$('.year').text('six: 1910-NOW');
	$('.title').text('Computer Keyboard');
	$('.main-image').attr('src', 'images/keyboard.png');
	$('.intro').text('The first personal computers began entering the market when affordable and reliable video display terminals were developed (i.e. the user could see the input on the screen). The first units were designed around teletype machines but, unfortunately, the associated electro-mechanical steps were rather inefficient. This all changed with the advent of VDT (Video Display Technology). Electrical impulses could be transmitted directly from the keys to the processor of the computer. In turn, these would be translated into a digital format and highlighted on the screen. The first computer keyboards were quite similar to their mechanical counterparts in order to create a familiar experience for typists. However, increasing computing capacity and a greater number of functions required additional keys. These began with “modifier keys” such as Control, Alt and Command. As computer technology advanced at a furious pace, function keys began to come into existence. These were designed to provide quick shortcuts to common settings such as volume, screen lighting and printing requirements. As you might imagine, the electrification and digitization of the typewriter – what we now refer to as keyboards – has dramatically increased typing speeds. The most practical development is the total redundancy of using white paint to cover up typing mistakes. Errors are now corrected by tapping the backspace button. This one button has changed the nature not just of typing but the very process of writing itself.');
	$('.source').text('Anders Noren. All Things Typewriter. https://www.allthingstypewriter.com/history/#A_History_of_the_Typewriter_From_the_Printing_Press_to_the_Mechanical_Keyboard');

	$('.active').removeClass('active');
	$('.button-six').addClass('active');
}