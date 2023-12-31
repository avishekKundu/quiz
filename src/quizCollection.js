const quizCollection = [
    {
        id: 1,
        question: 'How do you create a hyperlink in HTML?',
        answer: ['<link>', '<a>', '<hlink>', '<hyperlink>'],
        correctAns: '<a>',
    },
    {
        id: 2,
        question: 'What is the purpose of the CSS property \'float\'?',
        answer: ['Moves an element to the top of the page',
            'Moves an element to the right or left and allows content to wrap around it',
            'Changes the font size of an element',
            'Adds a shadow to an element'],
        correctAns: 'Moves an element to the right or left and allows content to wrap around it',
    },
    {
        id: 3,
        question: 'How do you select all paragraphs with the class "info" using CSS?',
        answer: ['p.info', '.info p', 'paragraph.info', '#info p'],
        correctAns: 'p.info',
    },
    {
        id: 4,
        question: 'What is the purpose of the \'document.getElementById()\' method in JavaScript?',
        answer: ['Retrieves an element by its class name',
            'Retrieves an element by its tag name',
            'Retrieves an element by its ID',
            'Retrieves an element by its name attribute'],
        correctAns: 'Retrieves an element by its ID',
    },
    {
        id: 5,
        question: 'What is the difference between \'let\', \'const\', and \'var\' when declaring variables in JavaScript?',
        answer: ['No difference, they can be used interchangeably',
            '\'let\' and \'const\' have block scope, while \'var\' has function scope',
            '\'const\' cannot be reassigned, while \'let\' and \'var\' can',
            '\'var\' is used for constants, while \'let\' and \'const\' are for variables'],
        correctAns: '\'let\' and \'const\' have block scope, while \'var\' has function scope',
    },
    {
        id: 6,
        question: 'What does the following jQuery code do?\n$("p").click(function(){\n$(this).hide();\n});',
        answer: ['Hides all paragraphs on the page when clicked',
            'Shows all paragraphs on the page when clicked',
            'Toggles the visibility of the clicked paragraph',
            'Adds a click event listener to all paragraphs that hides them when clicked'],
        correctAns: 'Adds a click event listener to all paragraphs that hides them when clicked',
    },
    {
        id: 7,
        question: 'Which of the following is an inline element in HTML?',
        answer: ['<div>', '<p>', '<h1>', '<section>'],
        correctAns: '<p>',
    },
    {
        id: 8,
        question: 'How do you create an ordered list in HTML?',
        answer: ['<ol>', '<ul>', '<li>', '<list>'],
        correctAns: '<ol>',
    },
    {
        id: 9,
        question: 'Which of the following is NOT a valid way to include external CSS in an HTML document?',
        answer: ['<link rel="stylesheet" href="styles.css">',
            '<style src="styles.css"></style>',
            '<link href="styles.css" rel="stylesheet">',
            '<style>@import url("styles.css");</style>'],
        correctAns: '<style src="styles.css"></style>',
    },
    {
        id: 10,
        question: 'What is the purpose of the \'.each()\' function in jQuery?',
        answer: ['Adds an event listener to each element',
            'Iterates over a collection of elements and performs a function on each one',
            'Selects the first element in the collection',
            'Hides all elements in the collection'],
        correctAns: 'Iterates over a collection of elements and performs a function on each one',
    },
]

export default quizCollection;