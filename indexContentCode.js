// JavaScript Document
(function($, window, document) {
	$(function()
		{
			var trigger = 1;
			
			$('.nBookOverlay').click(function(){
				trigger++;
				if(trigger==5)
					trigger=1;
					
				$('#featuredBook').css({'background-Image':"url('Resources/Book"+trigger+"Thumbnail.png')"});
				
				if(trigger==1){
					$('.pBook').css({'background-Image':"url('Resources/Book4Thumbnail.png')"});
					$('.nBook').css({'background-Image':"url('Resources/Book"+(trigger+1)+"Thumbnail.png')"});
					}
				if(trigger==4){
					$('.pBook').css({'background-Image':"url('Resources/Book"+(trigger-1)+"Thumbnail.png')"});
					$('.nBook').css({'background-Image':"url('Resources/Book1Thumbnail.png')"});
					}
				if(trigger!=1&&trigger!=4)
				{
					$('.pBook').css({'background-Image':"url('Resources/Book"+(trigger-1)+"Thumbnail.png')"});
					$('.nBook').css({'background-Image':"url('Resources/Book"+(trigger+1)+"Thumbnail.png')"});
				}
					
				
				switch(trigger)
				{
					case 1:
					$('#featuredBookTitle').text("Missing You In Belmar, NJ");
					$('#dropCap').text("M");
					$('#bInfo').text("issing You in Belmar, NJ is the first novel of a trilogy which takes place in the summer of 1987. The back cover blurb concludes with a long sentence which begins: In Jimmy’s story of redemption… Merriam-Webster defines redemption as follows: the act of making something better or more acceptable. The novel is about a man trying to belong again—to his family, community, and by extension, his country. Hemingway stated, “There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.” Missing You is a quest to find such nobility. I invite you to join Jimmy on his journey. ");
					break;
					
					case 2:
					$('#featuredBookTitle').text("Boardwalk Man");
					$('#dropCap').text("I");
					$('#bInfo').text("n the Trilogy's second novel, Jimmy travels a harsh road back from Key West to Belmar. Old suspicions are confirmed, party bars turn ugly, and a bizarre tragedy marks the summer's turning point. Ronny, June's companion, becomes July's antagonist. As Jimmy tries to accommodate Alice, and despite old and new heartaches, he attains his dream job, finds touching rapport with a surrogate daughter, and reconnects with his perceptive, gutsy self. ");
					break;
					
					case 3:
					$('#featuredBookTitle').text("Summer Mirrors");
					$('#dropCap').text("T");
					$('#bInfo').text("he Missing You in Belmar, NJ trilogy concludes with Summer Mirrors. Change dominates the five main characters and brings their orbits ever closer to their common sun—resilience. As Labor Day approaches, Jimmy strives for mended familial relationships and respect. But summer's chicanery isn't quite done. With the harsh reality of autumn looming, he realizes empathy doesn't need a common last name, courage can be a silent partner, and redemption doesn't need to be acknowledged by others—only by the man in the mirror. ");
					break;
					
					case 4:
					$('#featuredBookTitle').text("The Trilogy");
					$('#dropCap').text("M");
					$('#bInfo').text("eet Jimmy Hanlon. It’s summer, 1987. Image is everything in his Jersey Shore hometown. Jimmy hasn’t kept up. An overweight grandfather in his late forties, he’s lost a cancerous larynx, and on top of that, A.I.D.S. has spiked fears of anyone with a questionable sexual history. In a search for companionship, he encounters a blur of bars, prejudice, familial and romantic love, misogamy, and lies. Throughout his redemptive summer, Jimmy’s empathy reveals how individual compassion trumps social mores and why a heart’s yearning owes no explanation.");
					break;
				}
				});
				
				$('.pBookOverlay').click(function(){
				trigger--;
				if(trigger==0)
					trigger=4;
					
				$('#featuredBook').css({'background-Image':"url('Resources/Book"+trigger+"Thumbnail.png')"});
				
				if(trigger==1){
					$('.pBook').css({'background-Image':"url('Resources/Book4Thumbnail.png')"});
					$('.nBook').css({'background-Image':"url('Resources/Book"+(trigger+1)+"Thumbnail.png')"});
					}
				if(trigger==4){
					$('.pBook').css({'background-Image':"url('Resources/Book"+(trigger-1)+"Thumbnail.png')"});
					$('.nBook').css({'background-Image':"url('Resources/Book1Thumbnail.png')"});
					}
				if(trigger!=1&&trigger!=4)
				{
					$('.pBook').css({'background-Image':"url('Resources/Book"+(trigger-1)+"Thumbnail.png')"});
					$('.nBook').css({'background-Image':"url('Resources/Book"+(trigger+1)+"Thumbnail.png')"});
				}
					
				
				switch(trigger)
				{
					case 1:
					$('#featuredBookTitle').text("Missing You In Belmar, NJ");
					$('#dropCap').text("M");
					$('#bInfo').text("issing You in Belmar, NJ is the first novel of a trilogy which takes place in the summer of 1987. The back cover blurb concludes with a long sentence which begins: In Jimmy’s story of redemption… Merriam-Webster defines redemption as follows: the act of making something better or more acceptable. The novel is about a man trying to belong again—to his family, community, and by extension, his country. Hemingway stated, “There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.” Missing You is a quest to find such nobility. I invite you to join Jimmy on his journey. ");
					break;
					
					case 2:
					$('#featuredBookTitle').text("Boardwalk Man");
					$('#dropCap').text("I");
					$('#bInfo').text("n the Trilogy's second novel, Jimmy travels a harsh road back from Key West to Belmar. Old suspicions are confirmed, party bars turn ugly, and a bizarre tragedy marks the summer's turning point. Ronny, June's companion, becomes July's antagonist. As Jimmy tries to accommodate Alice, and despite old and new heartaches, he attains his dream job, finds touching rapport with a surrogate daughter, and reconnects with his perceptive, gutsy self. ");
					break;
					
					case 3:
					$('#featuredBookTitle').text("Summer Mirrors");
					$('#dropCap').text("T");
					$('#bInfo').text("he Missing You in Belmar, NJ trilogy concludes with Summer Mirrors. Change dominates the five main characters and brings their orbits ever closer to their common sun—resilience. As Labor Day approaches, Jimmy strives for mended familial relationships and respect. But summer's chicanery isn't quite done. With the harsh reality of autumn looming, he realizes empathy doesn't need a common last name, courage can be a silent partner, and redemption doesn't need to be acknowledged by others—only by the man in the mirror. ");
					break;
					
					case 4:
					$('#featuredBookTitle').text("The Trilogy");
					$('#dropCap').text("M");
					$('#bInfo').text("eet Jimmy Hanlon. It’s summer, 1987. Image is everything in his Jersey Shore hometown. Jimmy hasn’t kept up. An overweight grandfather in his late forties, he’s lost a cancerous larynx, and on top of that, A.I.D.S. has spiked fears of anyone with a questionable sexual history. In a search for companionship, he encounters a blur of bars, prejudice, familial and romantic love, misogamy, and lies. Throughout his redemptive summer, Jimmy’s empathy reveals how individual compassion trumps social mores and why a heart’s yearning owes no explanation.");
					break;
				}
				});
		}
	);
}(window.jQuery, window, document));