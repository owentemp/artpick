$(document).ready(function() {

    $('#filmButton').click(function() {
        filmPick();
    });
    $('#albumButton').click(function() {
        albumPick();
    });
    $('#bookButton').click(function() {
        bookPick();
    });

});






function bookPick() {

	var nextBook = "";

	// Books with a score of 10 and greater from "The Top Ten"
	var bestBooks = [
	'Anna Karenina',
	'Madame Bovary',
	'War and Peace',
	'Lolita',
	'The Adventures of Huckleberry Finn',
	'Hamlet',
	'The Great Gatsby',
	'In Search of Lost Time',
	'The Stories of Anton Chekhov',
	'Middlemarch',
	'Don Quixote',
	'Moby-Dick',
	'Great Expectations',
	'Ulysses',
	'The Odyssey',
	'Dubliners',
	'Crime and Punishment',
	'King Lear',
	'Emma',
	'One Hundred Years of Solitude',
	'The Sound and the Fury',
	'To The Lighthouse',
	'Brothers Karamazov',
	'The Divine Comedy',
	'The stories of Flannery O\'Connor',
	'Tristam Shandy',
	'Pride and Prejudice',
	'Wuthering Heights',
	'The Bible',
	'Pale Fire',
	'Absalom, Absalom!',
	'The Portrait of a Lady',
	'To Kill a Mockingbird',
	'The Canterbury Tales',
	'Heart of Darkness',
	'Mrs. Dalloway',
	'Invisible Man',
	'Bleak House',
	'The Trial',
	'Beloved',
	'Jane Eyre',
	'The Stranger',
	'The Grapes of Wrath',
	'All the King\'s Men',
	'The Good Soldier',
	'The Catcher in the Rye',
	'Persuasion',
	'Macbeth',
	'The Oresteia',
	'The Scarlet Letter',
	'Alice\'s Adventures in Wonderland',
	'The Red and the Black',
	'Rabbit Angstrom',
	'The stories of Isaac Babel',
	'Tender is the Night',
	'A Portrait of the Artist as a Young Man',
	'Catch-22',
	'Slaughterhouse-Five',
	'The stories of John Cheever',
	'Paradise Lost',
	'The Aeneid',
	'Blood Meridian: Or the Evening Redness in the West',
	'Leaves of Grass',
	'Dead Souls',
	'The Magic Mountain',
	'The stories of Eudora Welty',
	'The Master and Margarita',
	'Our Mutual Friend',
	'As I Lay Dying',
	'The Hamlet',
	'The Sun Also Rises',
	'The Iliad',
	'The Decameron',
	'The Possessed',
	'The Man Who Loved Children',
	'The Charterhouse of Parma',
	'The stories of Ernest Hemingway',
	'Independent People',
	'The Arabian Nights: Tales from a Thousand and One Nights',
	'Notes from Underground',
	'Their Eyes Were Watching God',
	'The Stand',
	'The Tempest',
	'Winesburg, Ohio',
	'Don Juan',
	'Robinson Crusoe',
	'Tom Jones',
	'A Passage to India',
	'Clarissa',
	'Candide',
	'Labyrinths',
	'The Long Goodbye',
	'Mrs. Bridge / Mr. Bridge',
	'Tess of the D\'Urbervilles',
	'The stories of Franz Kafka',
	'1984',
	'Gulliver\'s Travels',
	'The Fountain Overflows',
	'A Death in the Family',
	'Invisible Cities',
	'The poems of Emily Dickinson',
	'Howards End',
	'The Power and the Glory',
	'The stories of Alice Munro',
	'A Dance to the Music of Time',
	'The Prime of Miss Jean Brodie',
	'Stones for Ibarra',
	'The Tin Drum',
	'Romeo and Juliet',
	'David Copperfield',
	'Sister Carrie',
	'The Bear',
	'For Whom the Bell Tolls',
	'Jesus\'s Son',
	'The Leopard',
	'Ship of Fools',
	'The Oedipus trilogy',
	'East of Eden',
	'The Strange Case of Dr. Jekyll and Mr. Hyde',
	'Daniel Deronda',
	'Love in the Time of Cholera',
	'The Transit of Venus',
	'So Long, See You Tomorrow',
	'Song of Solomon',
	'Germinal',
	'Ask the Dust',
	'Parade\'s End',
	'The Remains of the Day',
	'The Ambassadors',
	'Nine Stories',
	'Vanity Fair',
	'Native Son',
	'Bhagavadgita',
	'The Woman in the Dunes',
	'Things Fall Apart',
	'The Untouchable',
	'Ill Seen, Ill Said',
	'The Book of Leviathan',
	'The Outward Room',
	'Casa Guidi Windows',
	'Answered Prayers',
	'The Golden Argosy',
	'The Professor\'s House',
	'The Awakening',
	'Disgrace',
	'Waiting for the Barbarians',
	'Geek Love',
	'Love Medicine',
	'5',
	'I, Claudius',
	'The Golden Bowl',
	'The Seven Pillars of Wisdom',
	'The Screwtape Letters',
	'Embers',
	'The Confidence-Man: His Masquerade',
	'The Birthday Party and The Homecoming',
	'The Time of the Doves',
	'Antony and Cleopatra',
	'The Makioka Sisters',
	'L\'Assommoir',
	'Nana'
	];

	var readBooks = [];


	var unreadBestBooks = [];

	if (readBooks.length > 0) {
		Array.prototype.diff = function(arr2) {
		    for(var i in this) {
		        if(arr2.indexOf( this[i] ) == -1){
		            unreadBestBooks.push( this[i] );
		        }
		    }
		    return unreadBestBooks;
		};

		console.log( bestBooks.diff(readBooks) );
	} else {
		unreadBestBooks = bestBooks;
	}


	function chooseBook(bucket) {

			var ri = Math.floor(Math.random() * bucket.length);// Random Index position in the array
			nextBook = bucket[ri]; //
			bucket.splice(ri, 1); // Splice out 1 random element using the ri var
			$("#book-recommendation").append("Your next book will be: <br><br>" + nextBook+"</br></br>");


		}
  function getISBN(title){
	//	var stringed = title.replace(" ", "-");
	//	var omdbAPI = "http://www.omdbapi.com/?jsoncallback";
	//	var omdbOptions = {
	//		t: stringed,
	//		r: "json",
	//	};
	//	$.getJSON(omdbAPI, omdbOptions, function(data) {
	//		console.log(data);
	//		console.log(data.imdbID);
	//		console.log(data.Poster);
	//		imdbID = data.imdbID;
	//		$("#plot").append(data.Plot);
	//		$("#year").append(data.Year);
	//		$("#rated").append(data.Rated);
	//		$("#poster").append("<img src='" + data.Poster +"'</img>");

	//	});
	}


	chooseBook(unreadBestBooks);
	getISBN(nextBook);
}



function filmPick() {

	var nextFilm = "";
	var imdbID = "";

	var bestFilms = [
	'12 Angry Men',
	'2001: A Space Odyssey',
	'8 1/2',
	'A Clockwork Orange',
	'A Night At The Opera',
	'A Place In The Sun',
	'A Streetcar Named Desire',
	'Adaptation',
	'All About Eve',
	'All Quiet On The Western Front',
	'All The President\'s Men',
	'Amadeus',
	'American Beauty',
	'American Graffiti',
	'An American In Paris',
	'Annie Hall',
	'Apocalypse Now',
	'Back To The Future',
	'Being John Malkovich',
	'Being There',
	'Ben-Hur',
	'Blade Runner',
	'Bonnie And Clyde',
	'Bringing Up Baby',
	'Broadcast News',
	'Butch Cassidy And The Sundance Kid',
	'Cabaret',
	'Casablanca',
	'Chinatown',
	'Citizen Kane',
	'City Lights',
	'Close Encounters Of The Third Kind',
	'Cool Hand Luke',
	'Crimes And Misdemeanors',
	'Dances With Wolves',
	'Do The Right Thing',
	'Doctor Zhivago',
	'Dog Day Afternoon',
	'Double Indemnity',
	'Dr. Strangelove',
	'Duck Soup',
	'E.T. The Extra-Terrestrial',
	'Easy Rider',
	'Eternal Sunshine Of The Spotless Mind',
	'Fantasia',
	'Fargo',
	'Field Of Dreams',
	'Forrest Gump',
	'Frankenstein',
	'From Here To Eternity',
	'Giant',
	'Gone With The Wind',
	'Goodfellas',
	'Groundhog Day',
	'Guess Who\'s Coming To Dinner',
	'Hannah And Her Sisters',
	'Harold & Maude',
	'High Noon',
	'His Girl Friday',
	'In The Heat Of The Night',
	'Intolerance',
	'It Happened One Night',
	'It\'s A Wonderful Life',
	'Jaws',
	'Jerry Maguire',
	'King Kong',
	'L.A. Confidential',
	'La Grande Illusion',
	'Lawrence Of Arabia',
	'Manhattan',
	'Mash',
	'Memento',
	'Midnight Cowboy',
	'Modern Times',
	'Moonstruck',
	'Mr. Smith Goes To Washington',
	'Mutiny On The Bounty',
	'My Fair Lady',
	'Nashville',
	'Network',
	'North By Northwest',
	'Notorious',
	'On The Waterfront',
	'One Flew Over The Cuckoo\'s Nest',
	'Ordinary People',
	'Patton',
	'Platoon',
	'Psycho',
	'Pulp Fiction',
	'Raging Bull',
	'Raiders Of The Lost Ark',
	'Rear Window',
	'Rebel Without A Cause',
	'Rocky',
	'Saving Private Ryan',
	'Schindler\'s List',
	'Shakespeare In Love',
	'Shane',
	'Sideways',
	'Singin\' In The Rain',
	'Snow White And The Seven Dwarfs',
	'Some Like It Hot',
	'Sophie\'s Choice',
	'Spartacus',
	'Stagecoach',
	'Star Wars',
	'Sullivan\'s Travels',
	'Sunrise: A Song Of Two Humans',
	'Sunset Boulevard',
	'Swing Time',
	'Taxi Driver',
	'Terms Of Endearment',
	'The African Queen',
	'The Apartment',
	'The Best Years Of Our Lives',
	'The Birth Of A Nation',
	'The Bridge On The River Kwai',
	'The Deer Hunter',
	'The French Connection',
	'The General',
	'The Godfather',
	'The Godfather 2',
	'The Gold Rush',
	'The Graduate',
	'The Grapes Of Wrath',
	'The Hustler',
	'The Jazz Singer',
	'The Lady Eve',
	'The Last Picture Show',
	'The Lion In Winter',
	'The Lord Of The Rings: The Fellowship Of The Ring',
	'The Maltese Falcon',
	'The Manchurian Candidate',
	'The Philadelphia Story',
	'The Princess Bride',
	'The Producers',
	'The Searchers',
	'The Shawshank Redemption',
	'The Silence Of The Lambs',
	'The Sixth Sense',
	'The Sound Of Music',
	'The Sting',
	'The Sweet Smell Of Success',
	'The Third Man',
	'The Treasure Of The Sierra Madre',
	'The Usual Suspects',
	'The Verdict',
	'The Wild Bunch',
	'The Wizard Of Oz',
	'Thelma & Louise',
	'Titanic',
	'To Kill A Mockingbird',
	'Tootsie',
	'Toy Story',
	'Unforgiven',
	'Vertigo',
	'West Side Story',
	'When Harry Met Sally',
	'Who\'s Afraid Of Virginia Woolf?',
	'Witness',
	'Wuthering Heights',
	'Yankee Doodle Dandy'
	];

	var seenFilms = [];


	var unseenBestFilms = [];

	if (seenFilms.length > 0) {
		Array.prototype.diff = function(arr2) {
		    for(var i in this) {
		        if(arr2.indexOf( this[i] ) == -1){
		            unseenBestFilms.push( this[i] );
		        }
		    }
		    return unseenBestFilms;
		};

		console.log( bestFilms.diff(seenFilms) );
	} else {
		unseenBestFilms = bestFilms;
	}


	function chooseFilm(bucket) {

			var ri = Math.floor(Math.random() * bucket.length);// Random Index position in the array
			nextFilm = bucket[ri]; //
			bucket.splice(ri, 1); // Splice out 1 random element using the ri var
			$("#film-recommendation").append("Your next film will be: <br><br>" + nextFilm +"</br></br>");


		}

	function getIMDBID(title){
		var stringed = title.replace(" ", "-");
		var omdbAPI = "http://www.omdbapi.com/?jsoncallback";
		var omdbOptions = {
			t: stringed,
			r: "json",
		};
		$.getJSON(omdbAPI, omdbOptions, function(data) {
			console.log(data);
			console.log(data.imdbID);
			console.log(data.Poster);
			imdbID = data.imdbID;
			$("#plot").append(data.Plot);
			$("#year").append(data.Year);
			$("#rated").append(data.Rated);
			//$("#poster").append("<img src='" + data.Poster +"'</img>");

		});
	}

	chooseFilm(unseenBestFilms);
	getIMDBID(nextFilm);

}

//function getPoster(ID){
//	console.log("RAN");
//	console.log(ID);
//	var omdbImageAPI = "http://img.omdbapi.com/?jsoncallback";
//	var omdbImageOptions = {
//		apikey: "9a9d73ea",
//		i: ID
//	};
//	$.getJSON(omdbImageAPI, omdbImageOptions, function(data) {
//		console.log(data);
//
//		$("#poster").append("<img src='" + data +"'</img>");
//
//
//	});
//}

function albumPick() {

	var nextAlbum = "";

	var bestAlbums = [
	'Sgt Peppers Lonely Hearts Club Band',
	'Pet Sounds',
	'The Beatles: Revolver',
	'Highway 61 Revisited',
	'Rubber Soul',
	'Marvin Gaye: What\'s Going On',
	'Exile on Main St.',
	'London Calling',
	'Blonde on Blonde',
	'The Beatles (White Album)',
	'Sun Sessions',
	'Kind of Blue',
	'The Velvet Underground & Nico',
	'Abbey Road',
	'The Jimi Hendrix Experience- Are You Experienced?',
	'Blood on the Tracks',
	'Nevermind',
	'Born to Run',
	'Astral Weeks',
	'Michael Jackson Thriller',
	'Chuck Berry: Great Twenty Eight',
	'Robert Johnson: The Complete Recordings',
	'John Lennon/Plastic Ono Band',
	'Stevie Wonder: Innervisions',
	'James Brown Live at the Apollo',
	'Rumours',
	'The Joshua Tree',
	'Who\'s Next',
	'Led Zeppelin',
	'Joni Mitchell Blue',
	'Bob Dylan- Bringing It All Back Home',
	'Let It Bleed',
	'Ramones',
	'The Band: Music from Big Pink',
	'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
	'Tapestry',
	'Hotel California',
	'Muddy Waters Anthology',
	'Please Please Me',
	'Love - Forever Changes',
	'Never Mind the Bollocks, Here\'s the Sex Pistols',
	'The Doors',
	'Dark Side of the Moon',
	'Patti Smith, Horses',
	'The Band',
	'Bob Marley Legend',
	'A Love Supreme',
	'It Takes a Nation of Millions to Hold Us Back',
	'The Allman Brothers: At Fillmore East',
	'Here Little Richard- Little Richard',
	'Bridge Over Troubled Water - Simon and Garfunkel',
	'Al Green\'s Greatest Hits',
	'Meet The Beatles!- The Beatles',
	'The Birth Of The Sound: The Complete Atlantic Recordings- Ray Charles',
	'Electric Ladyland',
	'Elvis Presley (album)',
	'Songs in the Key of Life',
	'Beggars Banquet- The Rolling Stones',
	'Chronicle Vol. 1- Creedence Clearwater Revival',
	'Captain Beefheart: Trout Mask Replica',
	'Greatest Hits- Sly and the Family Stone',
	'Appetite for Destruction',
	'Achtung Baby',
	'Sticky Fingers',
	'Back To Mono (1958-1969)- Phil Spector',
	'Moondance',
	'Kid A',
	'Off the Wall',
	'Led Zeppelin 4',
	'The Stranger',
	'Graceland',
	'Superfly',
	'Physical Graffiti',
	'After the Gold Rush (Neil Young)',
	'Star Time- James Brown',
	'Purple Rain',
	'Back in Black',
	'Otis Blue',
	'Led Zeppelin II',
	'Imagine',
	'The Clash',
	'Harvest',
	'Axis: Bold as Love',
	'I Never Loved a Man The Way I Love You- Aretha Fanklin (1967)',
	'Lady Soul- Aretha Franklin',
	'Born in the U.S.A.',
	'The Wall',
	'At Folsom Prison',
	'Dusty in Memphis',
	'Talking Book- Stevie Wonder',
	'Goodbye Yellow Brick Road',
	'Buddy Holly 20 Greatest Hits',
	'Prince: Sign of the Times',
	'Hank Williams 40 Greatest Hits',
	'Bitches Brew',
	'Tommy',
	'The Freewheelin\' Bob Dylan',
	'This Year\'s Model- Elvis Costello',
	'There\'s a Riot Goin On',
	'Odessey and Oracle- The Zombies (1969)'
	];

	var heardAlbums = [];


	var unheardBestAlbums = [];

	if (heardAlbums.length > 0) {
		Array.prototype.diff = function(arr2) {
		    for(var i in this) {
		        if(arr2.indexOf( this[i] ) == -1){
		            unheardBestAlbums.push( this[i] );
		        }
		    }
		    return unheardBestAlbums;
		};

		console.log( bestAlbums.diff(heardAlbums) );
	} else {
		unheardBestAlbums = bestAlbums;
	}


	function chooseAlbum(bucket) {

			var ri = Math.floor(Math.random() * bucket.length);// Random Index position in the array
			nextAlbum = bucket[ri]; //
			bucket.splice(ri, 1); // Splice out 1 random element using the ri var
			$("#album-recommendation").append("Your next album will be: <br><br>" + nextAlbum + "</br></br>");


		}
  function getUPC(title){
	//	var stringed = title.replace(" ", "-");
	//	var omdbAPI = "http://www.omdbapi.com/?jsoncallback";
	//	var omdbOptions = {
	//		t: stringed,
	//		r: "json",
	//	};
	//	$.getJSON(omdbAPI, omdbOptions, function(data) {
	//		console.log(data);
	//		console.log(data.imdbID);
	//		console.log(data.Poster);
	//		imdbID = data.imdbID;
	//		$("#plot").append(data.Plot);
	//		$("#year").append(data.Year);
	//		$("#rated").append(data.Rated);
	//		$("#poster").append("<img src='" + data.Poster +"'</img>");

	//	});
	}


	chooseAlbum(unheardBestAlbums);
	getUPC(nextAlbum);
}

