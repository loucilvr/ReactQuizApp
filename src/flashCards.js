const questionsAndAnswers = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    answer: "A: The Constitution",
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    answer:
      "A: (1) sets up the government (2) defines the government (3) protects basic rights of Americans",
  },
  {
    id: 3,
    question:
      "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answer: "A: We the people",
  },
  {
    id: 4,
    question: "What is an amendment?",
    answer: "A: a change/addition to the Constitution",
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    answer: "A: Bill of Rights",
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    answer: "A: speech, religion, assembly, press, petition the government",
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    answer: "A: 27",
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    answer: "A: announced/declared our independence from Great Britain",
  },
  {
    id: 9,
    question: "What are 2 rights in the Declaration of Independence?",
    answer: "A: life, liberty, pursuit of happiness",
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    answer:
      "A: The freedom to practice any religion, or to not practice a religion",
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    answer: "A: capitalist economy; market economy",
  },
  {
    id: 12,
    question: "What is the 'rule of the law?'",
    answer:
      "A: Everyone must follow the law, leaders & the government must obey the law; no one is above the low",
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    answer:
      "A: Congress, legislative, President, executive, the courts, judicial",
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    answer: "A: checks and balances, separation of powers",
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    answer: "A: the President",
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    answer:
      "A: Congress, Senate and House (of Representatives), (US or National) legislature",
  },
  {
    id: 17,
    question: "What are the two parts of the US Congress?",
    answer: "A: The Senate and House (of Representatives)",
  },
  {
    id: 18,
    question: "How many US Senators are there?",
    answer: "A: 100",
  },
  {
    id: 19,
    question: "We elect a US Senator for how many years?",
    answer: "A: Six years",
  },
  {
    id: 20,
    question: "Who is one of your state's US Senators now?",
    answer: "A: Marco Rubio",
  },
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    answer: "A: 435",
  },
  {
    id: 22,
    question: "We elect a US Representative for how many years?",
    answer: "A: 2 years",
  },
  {
    id: 23,
    question: "Name your US Representative.",
    answer: "A: List of Florida representatives can be found here:",
    link: "https://www.govtrack.us/congress/members/FL#representatives",
  },
  {
    id: 24,
    question: "Who does a US Senator represent?",
    answer: "A: all people of the state",
  },
  {
    id: 25,
    question: "Why do some states have more Representatives than other states?",
    answer: "A: Because some states have more people",
  },
  {
    id: 26,
    question: "We elect a President for how many years?",
    answer: "A: 4 years",
  },
  {
    id: 27,
    question: "In what month do we vote for the President?",
    answer: "A: November",
  },
  {
    id: 28,
    question: "Who is the current President of the United States?",
    answer: "A: Joe Biden",
  },
  {
    id: 29,
    question: "Who is the current Vice President of the United States?",
    answer: "A: Kamala Harris",
  },
  {
    id: 30,
    question: "If the President can no longer serve, who becomes President?",
    answer: "A: the Vice President",
  },
  {
    id: 31,
    question:
      "If both the President and the Vice President can no longer serve, who becomes President?",
    answer: "A: Speaker of the House (Paul Ryan)",
  },
  {
    id: 32,
    question: "Who is the Commander in Chief of the military?",
    answer: "A: the President",
  },
  {
    id: 33,
    question: "Who signs bills to become laws?",
    answer: "A: the President",
  },
  {
    id: 34,
    question: "Who vetoes bills?",
    answer: "A: the President",
  },
  {
    id: 35,
    question: "What does the President's Cabinet do?",
    answer: "A: advises the President",
  },
  {
    id: 36,
    question: "What are two Cabinet-level positions?",
    answer:
      "A: Secretary of Education, Secretary of the Treasury, VP, Secretary of Energy",
  },
  {
    id: 37,
    question: "What does the Judicial branch do?",
    answer:
      "A: reviews laws, explains laws, resolves disputed and decides if a law goes against the Constitution",
  },
  {
    id: 38,
    question: "What is the highest court in the United States?",
    answer: "A: the Supreme Court",
  },
  {
    id: 39,
    question: "How many justices are on the Supreme Court?",
    answer: "A: nine (9)",
  },
  {
    id: 40,
    question: "Who is the Chief of Justice of the United States now?",
    answer: "A: John Roberts",
  },
  {
    id: 41,
    question:
      "Under our Constitution, some powers belong to the Federal Government. What is one power of the Federal Government?",
    answer:
      "A: to print money, to declare ware, to create an army and to make treaties",
  },
  {
    id: 42,
    question:
      "Under our Constitution, some powers belong to the states. What is one power of the states?",
    answer:
      "A: provide schooling and education, provide protection, safety, give a driver's license, approve zoning and land use",
  },
  {
    id: 43,
    question: "Who is the Governor of your state now?",
    answer: "A: Rick Scott (R)",
  },
  {
    id: 44,
    question: "What is the capital of your state?",
    answer: "A: Rick Scott (R)",
  },
  {
    id: 45,
    question: "What are the 2 major political parties in the United States?",
    answer: "A: Democratic and Republican",
  },
  {
    id: 46,
    question: "What is the political party of the President now?",
    answer: "A: Republican",
  },
  {
    id: 47,
    question:
      "What is the name of the Speaker of the House of Representatives now?",
    answer: "A: Paul Ryan",
  },
  {
    id: 48,
    question:
      "There are four amendments to the Constitution about who can vote. Describe one of them.",
    answer: "A: Citizens 18 and older can vote; any citizen can vote",
  },
  {
    id: 49,
    question:
      "What is one responsibility that is only for United States citizens?",
    answer: "A: serve on a jury; vote in a federal election",
  },
  {
    id: 50,
    question: "Name one right only for United States citizens.",
    answer: "A: vote in a federal election; run for federal office",
  },
  {
    id: 51,
    question: "What are two rights of everyone living in the United States?",
    answer:
      "A: freedom of speech, religion, expression; the right to bear arms",
  },
  {
    id: 52,
    question:
      "What do we show loyalty to when we say the Pledge of Allegiance?",
    answer: "A: the United States, the flag",
  },
  {
    id: 53,
    question:
      "What is one promise you make when you become a United States Citizen?",
    answer:
      "A: give up loyalty to other countries, defend the Constitution and laws of the United States",
  },
  {
    id: 54,
    question: "How old do citizens have to be to vote for President?",
    answer: "A: >= 18 years",
  },
  {
    id: 55,
    question:
      "What are two ways that Americans can participate in their democracy?",
    answer:
      "A: vote, join a political party, publicly support or oppose an issue or policy",
  },
  {
    id: 56,
    question: "When is the last day you can send in federal income tax forms?",
    answer: "A: April 15",
  },
  {
    id: 57,
    question: "When must all men register for the Selective Service?",
    answer: "A: at age 18; between 18 and 26",
  },
  {
    id: 58,
    question: "What is one reason colonists came to America?",
    answer:
      "A: freedom, political liberty, religious freedom, escape persecution",
  },
  {
    id: 59,
    question: "Who lived in America before the Europeans arrived?",
    answer: "A: American Indians",
  },
  {
    id: 60,
    question: "What group of people was taken to America and sold as slaves?",
    answer: "A: Africans",
  },
  {
    id: 61,
    question: "Why did colonists fight the British?",
    answer:
      "A: Because of high taxes, because the British army stayed in THEIR houses, and because they didn't have self-government",
  },
  {
    id: 62,
    question: "Who wrote the Declaration of Independence?",
    answer: "A: Thomas Jefferson",
  },
  {
    id: 63,
    question: "When was the Declaration of Independence adopted?",
    answer: "A: July 4, 1776",
  },
  {
    id: 64,
    question: "There were 13 original states. Name three.",
    answer: "A: Georgia, North Carolina, New York,",
  },
  {
    id: 65,
    question: "What happened at the Constitutional Convention?",
    answer:
      "A: The Constitution was written; The Founding Fathers wrote the Constitution",
  },
  {
    id: 66,
    question: "When was the Constitution written?",
    answer: "A: 1787",
  },
  {
    id: 67,
    question:
      "The Federalist Papers supported the passage of the US Constitution. Name one of the writers.",
    answer: "A: James Madison, Alexander Hamilton",
  },
  {
    id: 68,
    question: "What is one thing Benjamin Franklin is famous for?",
    answer:
      "A: US Diplomat, oldest member of the Constitutional Convention, started the first free libraries",
  },
  {
    id: 69,
    question: "Who is the 'Father of our Country'?",
    answer: "A: George Washington",
  },
  {
    id: 70,
    question: "Who was the first President?",
    answer: "A: George Washington",
  },
  {
    id: 71,
    question: "What territory did the US buy from France in 1803?",
    answer: "A: Louisiana",
  },
  {
    id: 72,
    question: "Name one war fought by the US in the 1800s.",
    answer: "A: Civil War",
  },
  {
    id: 73,
    question: "Name the US war between the North and the South.",
    answer: "A: the Civil War",
  },
  {
    id: 74,
    question: "Name one problem that led to the Civil War.",
    answer: "A: slavery, economic reasons, states' rights",
  },
  {
    id: 75,
    question: "What was one important thing that Abraham Lincoln did?",
    answer:
      "A: freed the slaves (Emancipation Proclamation), saved/preserved the Union, led the US during the Civil War",
  },
  {
    id: 76,
    question: "What did the Emancipation Proclamation do?",
    answer: "A: freed the slaves in the Confederate States",
  },
  {
    id: 77,
    question: "What did Susan B. Anthony do?",
    answer: "A: fought for women's rights; fought for civil rights",
  },
  {
    id: 78,
    question: "Name one war fought by the US in the 1900s.",
    answer: "A: WW I, WW II, Korean War, Vietnam War, (Persian) Gulf War",
  },
  {
    id: 79,
    question: "Who was the President during World War I?",
    answer: "A: Woodrow Wilson",
  },
  {
    id: 80,
    question:
      "Who was the President during the Great Depression and World War II?",
    answer: "A: Franklin Roosevelt",
  },
  {
    id: 81,
    question: "Who did the US fight in WW II?",
    answer: "A: Japan, Germany and Italy",
  },
  {
    id: 82,
    question:
      "Before he was President, Eisenhower was a general. What war was he in?",
    answer: "A: WW II",
  },
  {
    id: 83,
    question: "During the Cold War, what was the main concern of the US?",
    answer: "A: Communism",
  },
  {
    id: 84,
    question: "What movement tried to end racial discrimination?",
    answer: "A: Civil Rights Movement",
  },
  {
    id: 85,
    question: "What did Martin Luther King, Jr. do?",
    answer: "A: Fought for civil rights, worked for equality for all Americans",
  },
  {
    id: 86,
    question:
      "What major event happened on September 11, 2001, in the United States?",
    answer: "A: Terrorists attacked the US",
  },
  {
    id: 87,
    question: "Name one American Indian tribe in the US.?",
    answer: "A: Seminole Tribe",
  },
  {
    id: 88,
    question: "Name one of the two longest rivers in the US.",
    answer: "A: Mississippi River",
  },
  {
    id: 89,
    question: "What ocean is on the west coast of the United States?",
    answer: "A: Pacific Ocean",
  },
  {
    id: 90,
    question: "What ocean is on the east coast of the United States?",
    answer: "A: Atlantic Ocean",
  },
  {
    id: 91,
    question: "Name one US territory.",
    answer: "A: Puerto Rico",
  },
  {
    id: 92,
    question: "Name one state that borders Canada.",
    answer: "A: Michigan, Ohio, New York",
  },
  {
    id: 93,
    question: "Name one state that borders Mexico.",
    answer: "A: Texas, Arizona, California, New Mexico",
  },
  {
    id: 94,
    question: "What is the capital of the United States?",
    answer: "A: Washington, D.C.",
  },
  {
    id: 95,
    question: "Where is the Statue of Liberty?",
    answer: "A: New York; Liberty Island, Hudson River",
  },
  {
    id: 96,
    question: "Why does the flag have 13 stripes?",
    answer: "A: because there were 13 original colonies",
  },
  {
    id: 97,
    question: "Why does the flag have 50 stars?",
    answer: "A: to represent the 50 states",
  },
  {
    id: 98,
    question: "What is the name of the national anthem?",
    answer: "A: The Star-Spangled Banner",
  },
  {
    id: 99,
    question: "When do we celebrate Independence Day?",
    answer: "A: July 4",
  },
  {
    id: 100,
    question: "Name 2 national US holidays.",
    answer: "A: Independence Day, President's Day, Veteran's Day, Thanksgiving",
  },
];

export default questionsAndAnswers;
