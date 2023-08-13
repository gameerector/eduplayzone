const states = document.getElementsByTagName('g');
const question = document.getElementById('question');
const answerHint = document.getElementById('answerHint');
const errorWindow = document.getElementById('errorWindow');
const successWindow = document.getElementById('successWindow');
const retryButton = document.getElementById('retryButton');
const nextQuestionButton = document.getElementById('nextQuestion');
const hintButton = document.getElementById('hintButton');
const answer = document.getElementById('answer');
const uiAudio = document.getElementById('uiAudio');
let hintVisibility = false;
let currentQuestion = 0;

const statesAndUTs = {
  'IN-AN': 'Andaman and Nicobar Islands',
  'IN-AP': 'Andhra Pradesh',
  'IN-AR': 'Arunachal Pradesh',
  'IN-AS': 'Assam',
  'IN-BR': 'Bihar',
  'IN-CH': 'Chandigarh',
  'IN-CT': 'Chhattisgarh',
  'IN-DN': 'Dadra and Nagar Haveli and Daman and Diu',
  'IN-DL': 'Delhi',
  'IN-GA': 'Goa',
  'IN-GJ': 'Gujarat',
  'IN-HR': 'Haryana',
  'IN-HP': 'Himachal Pradesh',
  'IN-JK': 'Jammu and Kashmir',
  'IN-JH': 'Jharkhand',
  'IN-KA': 'Karnataka',
  'IN-KL': 'Kerala',
  'IN-LA': 'Ladakh',
  'IN-LD': 'Lakshadweep',
  'IN-MP': 'Madhya Pradesh',
  'IN-MH': 'Maharashtra',
  'IN-MN': 'Manipur',
  'IN-ML': 'Meghalaya',
  'IN-MZ': 'Mizoram',
  'IN-NL': 'Nagaland',
  'IN-OR': 'Odisha',
  'IN-PY': 'Puducherry',
  'IN-PB': 'Punjab',
  'IN-RJ': 'Rajasthan',
  'IN-SK': 'Sikkim',
  'IN-TN': 'Tamil Nadu',
  'IN-TG': 'Telangana',
  'IN-TR': 'Tripura',
  'IN-UP': 'Uttar Pradesh',
  'IN-UT': 'Uttarakhand',
  'IN-WB': 'West Bengal'
};

const questions = [
  {
    question: 'Which is the largest state in India?',
    answerHint: 'This state is known for its rich cultural heritage, majestic forts and palaces, and the vast Thar Desert.',
    answer: 'Rajasthan',
  },
  {
    question: 'Bhopal is the capital of which state ?',
    answerHint: 'It is characterised by low hills, extensive plateaus, and river valleys.',
    answer: 'Madhya Pradesh',
  },
  {
    question: 'Which is the smallest state in India?',
    answerHint: 'This state is situated on the western coast of India and is renowned for its beautiful beaches, vibrant nightlife, Portuguese architecture, and delicious seafood.',
    answer: 'Goa',
  },
  {
    question: 'Which state is famous for the Konark Sun Temple?',
    answerHint: 'This state is known for its architectural marvel, the Konark Sun Temple, which is dedicated to the Sun God. It also boasts of pristine beaches, vibrant festivals, and a rich cultural heritage.',
    answer: 'Odisha',
  },
  {
    question: 'Which state is famous for the Kaziranga National Park?',
    answerHint: 'This state is home to the Kaziranga National Park, a UNESCO World Heritage Site and a prominent wildlife sanctuary known for its population of the endangered one-horned rhinoceros. It also offers breathtaking natural beauty and tea gardens.',
    answer: 'Assam',
  },
  {
    question: 'Which state is known for the Meenakshi Temple?',
    answerHint: 'This state is famous for the Meenakshi Amman Temple, a historic Hindu temple dedicated to Goddess Meenakshi. It is also known for its vibrant festivals, traditional arts and crafts, and mouthwatering cuisine.',
    answer: 'Tamil Nadu',
  },
  {
    question: 'Slovenia is comparable to the size of ?',
    answerHint: 'is a state in northeast India, with the city of Imphal as its capital. It is bounded by the Indian states of Nagaland to the north, Mizoram to the south and Assam to the west.',
    answer: 'Manipur',
  },
  {
    question: 'Which state is famous for the Great Indian Desert?',
    answerHint: 'This state is renowned for the Great Indian Desert, also known as the Thar Desert. It is characterized by its sweeping sand dunes, vibrant folk culture, and historical cities.',
    answer: 'Rajasthan',
  },
  {
    question: 'Which Indian state is known as the "Land of Five Rivers"?',
    answerHint: 'The Beas, Jhelum, Chenab, Ravi, and Sutlej are the five rivers is a geopolitical, cultural, and ancient region in South Asia. It comprises regions of eastern Pakistan and northern India.',
    answer: 'Punjab',
  },
  {
    question: 'Chhindwara is known for its handicrafts made of bamboo in which city ?',
    answerHint: 'It is characterised by low hills, extensive plateaus, and river valleys.',
    answer: 'Madhya Pradesh',
  },
  {
    question: 'The city of Mysore is located in which Indian state?',
    answerHint: 'It is primarily known for its Heritage destinations and its Wildlife/ National Parks.',
    answer: 'Karnataka',
  },
  {
    question: 'Which state is famous for its backwaters and houseboat tourism?',
    answerHint: 'The whole state is dotted with tall trees of coconuts. You can also find a hint of coconut in every dish served here.',
    answer: 'Kerala',
  },
  {
    question: 'The Sundarbans, home to the famous Royal Bengal Tigers, is situated in which state?',
    answerHint: 'Renowned for its tea plantations, Darjeeling tea is one of the most sought after in the world.',
    answer: 'West Bengal',
  },
  {
    question: 'Which state is famous for its tea plantations in places like Darjeeling and Assam?',
    answerHint: 'The state was the first site for oil drilling in Asia. Assam is home to the one-horned Indian rhinoceros, along with the wild water buffalo, pygmy hog, tiger and various species of Asiatic birds, and provides one of the last wild habitats for the Asian elephant.',
    answer: 'Assam',
  },
  {
    question: 'The city of Hyderabad serves as the capital for which Indian state?',
    answerHint: 'The Land of Telugus, is the 29th state of India. It was a part of Hyderabad state until 1956 and was later merged with Andhra State to form the Andhra Pradesh.',
    answer: 'Telangana',
  },
  {
    question: 'The Dal Lake, known for its floating gardens and houseboats, is a prominent feature in which state?',
    answerHint: 'It has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959.',
    answer: 'Jammu and Kashmir',
  },
  {
    question: 'Which is the largest state in India?',
    answerHint: 'This state is known for its rich cultural heritage, majestic forts and palaces, and the vast Thar Desert.',
    answer: 'Rajasthan',
  },
  {
    question: 'Which Indian state is renowned for its rich art and culture, particularly the dance form of Kathak?',
    answerHint: 'It is a 241 million inhabitants, it is the most populated state in India as well as the most populous country subdivision in the world',
    answer: 'Uttar Pradesh',
  },
  {
    question: 'Ras Lila is is the classical dance of Which state ?',
    answerHint: 'is a state in northeast India, with the city of Imphal as its capital. It is bounded by the Indian states of Nagaland to the north, Mizoram to the south and Assam to the west.',
    answer: 'Manipur',
  },
  {
    question: 'The Nilgiri Hills, a popular hill station destination, are located in which state?',
    answerHint: 'Home to the oldest surviving classical language, With over 38,000 temples, it is a popular pilgrimage destination',
    answer: 'Tamil Nadu',
  },
  {
    question: 'The famous pilgrimage site of Tirupati, home to the Venkateswara Temple, is situated in which Indian state?',
    answerHint: ' It is home to the only pillar in the world that stands suspended in air. · 2. The designer of the Indian National Flag was from..',
    answer: 'Andhra Pradesh',
  },
  {
    question: 'Which state is known for its pristine beauty and the lush green forests ?',
    answerHint: 'Here is the first place in India that receives morning sunlight.',
    answer: 'Arunachal Pradesh',
  },
  {
    question: 'The Ajanta and Ellora Caves, UNESCO World Heritage Sites, are located in which state?',
    answerHint: 'It is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau.',
    answer: 'Maharashtra',
  },
  {
    question: 'The famous Jim Corbett National Park, known for its tiger conservation efforts, is situated in which state?',
    answerHint: 'It also known as Dev Bhoomi is an incredible hill state home to some ancient temples, Yoga schools and wildlife sanctuaries.',
    answer: 'Uttarakhand',
  },
  {
    question: 'The "City of Joy," known for its literary heritage and Durga Puja celebrations, is the capital of which state?',
    answerHint: 'Chhau and Rabindra Nritya are the main dances of state. It is surrounded by landforms on all three sides. On a clear day, Mount Everest also can be seen in the distance.',
    answer: 'West Bengal',
  },
  {
    question: 'The Ajmer Sharif Dargah, a famous Sufi shrine, is located in which Indian state?',
    answerHint: 'It is a treasure trove of majestic forts, rich syncretic cultures, and handicraft traditions that over the years garnered international attention.',
    answer: 'Rajasthan',
  },
  {
    question: 'The famous Sun Temple in Konark, a UNESCO World Heritage Site, is located in which Indian state?',
    answerHint: 'It an eastern Indian state on the Bay of Bengal, is known for its tribal cultures and its many ancient Hindu temples.',
    answer: 'Odisha',
  },
  {
    question: 'The Kanchenjunga, the third-highest mountain peak in the world, lies partly in which Indian state?',
    answerHint: 'It is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.',
    answer: 'Sikkim',
  },
  {
    question: 'Which state is a union territory of India consisting of 571 islands?',
    answerHint: 'It is a home to some of the richest varieties of flora and fauna.',
    answer: 'Andaman and Nicobar Islands',
  },
  {
    question: 'Barnawapara Wildlife Sanctuary in Mahasamund District situated in which state ?',
    answerHint: 'It is a heavily forested state in central India known for its temples and waterfalls. Near the capital Raipur.',
    answer: 'Chhattisgarh',
  },
  {
    question: 'The famous hill station of Shimla, once the summer capital of British India, is situated in which state?',
    answerHint: 'It is known as the Land of Gods. The state is mentioned in many ancient Hindu texts, and is home to several religious points of interests.',
    answer: 'Himachal Pradesh',
  },
  {
    question: 'The city of Agra, home to the iconic Taj Mahal, is located in which Indian state?',
    answerHint: 'It is the most populous state of India. It was formed in 1937 as United Province and was granted statehood in 1950.',
    answer: 'Uttar Pradesh',
  },
  {
    question: 'The Indian state of Jharkhand was carved out from which larger state in the year 2000?',
    answerHint: 'The state represents several large monasteries, and several Hindu, Muslim, Sikh, and Jain shrines. Bihar is one of the most deeply linked places to Buddhas life.',
    answer: 'Bihar',
  },
  {
    question: 'Aryabhatta who gave zero number to the world, the nine planets theory, and trigonometric rules was from which state ?',
    answerHint: 'It is one of the oldest living places in the world and was one of the greatest kingdoms in history.',
    answer: 'Bihar',
  },
  {
    question: 'The famous Hawa Mahal, also known as the "Palace of Winds," is located in which Indian state?',
    answerHint: 'It covers 342,239 square kilometres or 10.4 per cent of Indias total geographical area. It is the largest Indian state by area and the seventh largest by population.',
    answer: 'Rajasthan',
  },
  {
    question: 'The famous festival "Onam" is celebrated in which Indian state?',
    answerHint: 'It  is the first state in India to receive the first spell of rains, followed by Mumbai and Delhi!',
    answer: 'Kerala',
  },
  {
    question: 'Teej Dance is recognized as a dance is performed by women of which state ?',
    answerHint: 'It is a North Indian state surrounding New Delhi on 3 sides.',
    answer: 'Haryana',
  },
  {
    question: 'First planned city in India and it was the dream city of the first Prime Minister Jawaharlal Nehru. ?',
    answerHint: 'The city is beautiful and it is known for its well designed infrastructure. Adding to that is the green cover which makes it more scenic.',
    answer: 'Chandigarh',
  },
  {
    question: 'Qutubuddin Aibak was the first Muslim ruler of which state ?',
    answerHint: ' A beautiful city full of rich history everywhere you look. The city was constructed in the early 20th century.',
    answer: 'Delhi',
  },
  {
    question: 'The largest coffee producing state in India is: ?',
    answerHint: 'It is being the hub of sandalwood, about 85% of raw silk is produced and marketed',
    answer: 'Karnataka',
  },
  {
    question: 'Which state is the largest producer of milk in India ?',
    answerHint: 'It is a state along the western coast of India. Its coastline of about 1,600 km is the longest in the country.',
    answer: 'Gujarat',
  },
  {
    question: 'The Indian state with the highest literacy rate is: ?',
    answerHint: 'The scenic state is also known as God’s Own Country, given its natural beauty. Bounded by the Arabian Sea in the west and a link of backwaters.',
    answer: 'Kerala',
  },
  {
    question: 'The famous "Sundarbans" mangrove forest is located in which state ?',
    answerHint: 'The is home to the largest banyan tree in the world. The banyan tree is located in Acharya Jagadish Chandra Bose Indian Botanic Garden.',
    answer: 'West Bengal',
  },
  {
    question: 'The famous "Sundarbans" mangrove forest is located in which state ?',
    answerHint: 'The is home to the largest banyan tree in the world. The banyan tree is located in Acharya Jagadish Chandra Bose Indian Botanic Garden.',
    answer: 'West Bengal',
  },
  {
    question: 'The Indian state with the highest population is: ?',
    answerHint: 'With a population of over 200 million people, is India’s most populous state.The state has a total land area of 243,286 square kilometres.',
    answer: 'Uttar Pradesh',
  },
  {
    question: 'Which state is the largest archipelago system in the Bay of Bengal ?',
    answerHint: 'Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites.',
    answer: 'Andaman and Nicobar Islands',
  },
  {
    question: 'Narendra Modi Stadium-Biggest Stadium in the world and India situated in ?',
    answerHint: 'It is a state along the western coast of India. Its coastline of about 1,600 km is the longest in the country.',
    answer: 'Gujarat',
  },
  {
    question: 'Which state is popularly known as the Rice Bowl of India?',
    answerHint: 'It is home to the only pillar in the world that stands suspended in air.',
    answer: 'Andhra Pradesh',
  },
  {
    question: 'Which state is Land of the Rising Sun ?',
    answerHint: 'Here is the first place in India that receives morning sunlight.',
    answer: 'Arunachal Pradesh',
  },
  {
    question: 'Mumbai is the capital of?',
    answerHint: 'It is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau.',
    answer: 'Maharashtra',
  },
  {
    question: 'Litti Chokha is the national dish of which state ?',
    answerHint: 'It is one of the oldest living places in the world and was one of the greatest kingdoms in history.',
    answer: 'Bihar',
  },
  {
    question: 'Which state is the capital of the northern Indian states of Punjab and Haryana ?',
    answerHint: 'The city is beautiful and it is known for its well designed infrastructure. Adding to that is the green cover which makes it more scenic.',
    answer: 'Chandigarh',
  },
  {
    question: 'Ranchi is the capital of which state ?',
    answerHint: 'Its known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.',
    answer: 'Jharkhand',
  },
  {
    question: 'Which state is the 9th largest state in India and one of the fastest-developing states of the country.?',
    answerHint: 'It is a heavily forested state in central India known for its temples and waterfalls. Near the capital Raipur.',
    answer: 'Chhattisgarh',
  },
  {
    question: 'Which state is is the capital city of India. It is also known as the heart of the nation.?',
    answerHint: ' A beautiful city full of rich history everywhere you look. The city was constructed in the early 20th century.',
    answer: 'Delhi',
  },
  {
    question: 'The most popular alcoholic beverage produced in ?',
    answerHint: 'This state is situated on the western coast of India and is renowned for its beautiful beaches, vibrant nightlife, Portuguese architecture, and delicious seafood.',
    answer: 'Goa',
  },
  {
    question: 'The only place in India where Asiatic Lions are found.  ?',
    answerHint: 'It is a state along the western coast of India. Its coastline of about 1,600 km is the longest in the country.',
    answer: 'Gujarat',
  },
  {
    question: 'It is a land where gravity fails ?',
    answerHint: 'Cold desert with unusual Camels: Nestled atop in the Himalayas, it being the highest plateau is also the coldest desert in India.',
    answer: 'Ladakh',
  },
  {
    question: 'Peepal is recognized as a state tree of which state ?',
    answerHint: 'It is a North Indian state surrounding New Delhi on 3 sides.',
    answer: 'Haryana',
  },
  {
    question: 'Marathi is the official language of?',
    answerHint: 'It is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau.',
    answer: 'Maharashtra',
  },
  {
    question: 'Butterfly fish is recognised as the state fish of which state ?',
    answerHint: 'It is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India.',
    answer: 'Lakshadweep',
  },
  {
    question: 'Peepal is recognized as a state tree of which state ?',
    answerHint: 'It is a North Indian state surrounding New Delhi on 3 sides.',
    answer: 'Haryana',
  },
  {
    question: 'Deodar cedar is the State Tree of of which state?',
    answerHint: 'It is known as the Land of Gods. The state is mentioned in many ancient Hindu texts, and is home to several religious points of interests.',
    answer: 'Himachal Pradesh',
  },
  {
    question: 'Kashyapamar is the old name of ?',
    answerHint: 'It has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959.',
    answer: 'Jammu and Kashmir',
  },
  {
    question: 'The land of the forest or  Bushland, is situated in the northeastern part of India in which state ?',
    answerHint: 'Its known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.',
    answer: 'Jharkhand',
  },
  {
    question: 'The largest telescope in Asia situated in ?',
    answerHint: 'Cold desert with unusual Camels: Nestled atop in the Himalayas, it being the highest plateau is also the coldest desert in India.',
    answer: 'Ladakh',
  },
  {
    question: 'Which is the smallest union territory of India?',
    answerHint: 'It is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India.',
    answer: 'Lakshadweep',
  },
  {
    question: 'It is often referred to as the "Devbhumi" ( lit. Land of the Gods) ?',
    answerHint: 'A state in northern India crossed by the Himalayas, is known for its Hindu pilgrimage sites.',
    answer: 'Uttarakhand',
  },
];

const updateQuestion = () => {
  question.innerText = questions[currentQuestion].question;
  answerHint.innerText = questions[currentQuestion].answerHint; 
}

const openErrorWindow = () => {
  errorWindow.classList.add('open');
}

const closeErrorWindow = () => {
  errorWindow.classList.remove('open');
}

const openSuccessWindow = () => {
  answer.innerText = `"${questions[currentQuestion].answer}" is the right answer`;
  uiAudio.play();
  currentQuestion++;
  successWindow.classList.add('open');
}

const closeSuccessWindow = () => {
  successWindow.classList.remove('open');
  uiAudio.pause();
  uiAudio.currentTime = 0;
  updateQuestion();
}

retryButton.addEventListener('click', () => {
  closeErrorWindow();
});

nextQuestionButton.addEventListener('click', () => {
  closeSuccessWindow();
})

hintButton.addEventListener('click', () => {
  answerHint.classList.toggle('hint');
  hintVisibility = !hintVisibility;
  console.log(hintVisibility)
  if(hintVisibility)
  {
    hintButton.innerText = "Hide hint"
  }
  else{hintButton.innerText = "Show hint"}
})
updateQuestion();

statesList = Array.from(states);

statesList.forEach((state) => {
  // Get the <path> element
  const path = state.querySelector('path');

  // Get the bounding box of the <path> element
  const bbox = path.getBBox();

  // Calculate the center of the bounding box
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;

  // Create a <text> element for the state's name
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', centerX);
  text.setAttribute('y', centerY);
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('alignment-baseline', 'middle');
  text.textContent = statesAndUTs[state.id];
  text.classList.add('state-name'); // Add a CSS class for styling

  // Append the <text> element to the <g> element representing the state
  state.appendChild(text);

  // Add click event listener to the state
  state.addEventListener('click', () => {
    console.log(statesAndUTs[state.id]);
    if (statesAndUTs[state.id] === questions[currentQuestion].answer) {
      openSuccessWindow();
    } else {
      openErrorWindow();
    }
  });
});