// Single source of truth for quiz content, grouped by category. Each
// category holds exactly 10 questions in the {question, options,
// correctIndex} shape: 4 options, and correctIndex is the index of the
// single correct answer into `options`.
export const categories = {
  'Programming/IT': [
    {
      question: 'What does "OOP" stand for in programming?',
      options: [
        'Object-Oriented Programming',
        'Open Output Protocol',
        'Ordered Operation Process',
        'Object Output Parsing',
      ],
      correctIndex: 0,
    },
    {
      question: 'Which data structure follows First In, First Out (FIFO) order?',
      options: ['Stack', 'Queue', 'Tree', 'Graph'],
      correctIndex: 1,
    },
    {
      question: 'What is the time complexity of accessing an element in an array by index?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      correctIndex: 0,
    },
    {
      question: 'Which of these is NOT a programming paradigm?',
      options: ['Object-Oriented', 'Functional', 'Procedural', 'Alphabetical'],
      correctIndex: 3,
    },
    {
      question: 'What does "IDE" stand for?',
      options: [
        'Integrated Development Environment',
        'Internal Data Exchange',
        'Interface Design Editor',
        'Instructional Debug Engine',
      ],
      correctIndex: 0,
    },
    {
      question: 'What is the decimal number 5 represented as in binary?',
      options: ['110', '101', '011', '100'],
      correctIndex: 1,
    },
    {
      question:
        'Which sorting algorithm repeatedly steps through the list and swaps adjacent elements if they are in the wrong order?',
      options: ['Bubble Sort', 'Binary Search', 'Merge Sort', 'Hashing'],
      correctIndex: 0,
    },
    {
      question: 'What does "RAM" stand for?',
      options: [
        'Read-Only Memory',
        'Random Access Memory',
        'Runtime Allocation Module',
        'Rapid Access Method',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which of these is a compiled language, rather than an interpreted one?',
      options: ['Python', 'JavaScript', 'C', 'Ruby'],
      correctIndex: 2,
    },
    {
      question: 'What symbol is commonly used to denote a single-line comment in Python?',
      options: ['//', '#', '--', '/*'],
      correctIndex: 1,
    },
  ],

  History: [
    {
      question: 'Who was the first emperor of the Nguyễn dynasty?',
      options: ['Gia Long', 'Minh Mạng', 'Tự Đức', 'Bảo Đại'],
      correctIndex: 0,
    },
    {
      question:
        "In which year did Hồ Chí Minh declare Vietnam's independence from French colonial rule?",
      options: ['1930', '1945', '1954', '1975'],
      correctIndex: 1,
    },
    {
      question:
        'Which Vietnamese general is famous for leading the resistance that defeated the Mongol invasions in the 13th century?',
      options: ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Nguyễn Huệ', 'Ngô Quyền'],
      correctIndex: 0,
    },
    {
      question: 'What is the name of the 1954 battle that ended French colonial rule in Vietnam?',
      options: [
        'Battle of Bạch Đằng',
        'Battle of Đống Đa',
        'Battle of Điện Biên Phủ',
        'Battle of Rạch Gầm-Xoài Mút',
      ],
      correctIndex: 2,
    },
    {
      question: 'Who founded the Democratic Republic of Vietnam in 1945?',
      options: ['Hồ Chí Minh', 'Ngô Đình Diệm', 'Phan Bội Châu', 'Võ Nguyên Giáp'],
      correctIndex: 0,
    },
    {
      question:
        'Which general defeated the Southern Han forces at the Battle of Bạch Đằng in 938 AD, ending a thousand years of Chinese rule?',
      options: ['Lý Thái Tổ', 'Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Lợi'],
      correctIndex: 1,
    },
    {
      question:
        'The fall of Saigon, marking the end of the Vietnam War, took place in which year?',
      options: ['1968', '1973', '1975', '1979'],
      correctIndex: 2,
    },
    {
      question:
        'Which dynasty established the Temple of Literature (Văn Miếu) in Hanoi in 1070?',
      options: ['Trần dynasty', 'Lý dynasty', 'Lê dynasty', 'Nguyễn dynasty'],
      correctIndex: 1,
    },
    {
      question: 'The Trưng Sisters (Hai Bà Trưng) are remembered in Vietnamese history for what?',
      options: [
        'Founding the Nguyễn dynasty',
        'Writing the Tale of Kiều',
        'Leading an early rebellion against Chinese rule in 40 AD',
        'Negotiating the Geneva Accords',
      ],
      correctIndex: 2,
    },
    {
      question: 'What was the imperial capital of Vietnam under the Nguyễn dynasty?',
      options: ['Hà Nội', 'Huế', 'Sài Gòn', 'Đà Nẵng'],
      correctIndex: 1,
    },
  ],

  Geography: [
    {
      question: 'Cao Bằng province lies in which part of Vietnam?',
      options: [
        'The Mekong Delta',
        'Central Vietnam',
        'Northeastern Vietnam, bordering China',
        'Southern Vietnam',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which country does Cao Bằng province share a border with?',
      options: ['Laos', 'Cambodia', 'Thailand', 'China'],
      correctIndex: 3,
    },
    {
      question:
        'Non Nước Cao Bằng Geopark was officially recognized as a UNESCO Global Geopark in which year?',
      options: ['2010', '2015', '2018', '2020'],
      correctIndex: 2,
    },
    {
      question:
        "What is the name of the famous waterfall straddling the Vietnam-China border within Cao Bằng's geopark area?",
      options: ['Dray Nur Waterfall', 'Bản Giốc Waterfall', 'Pongour Waterfall', 'Datanla Waterfall'],
      correctIndex: 1,
    },
    {
      question: 'Which river feeds the Bản Giốc Waterfall?',
      options: ['Sông Hồng (Red River)', 'Sông Đà', 'Sông Quây Sơn', 'Sông Mekong'],
      correctIndex: 2,
    },
    {
      question:
        'Động Ngườm Ngao, a well-known cave near Bản Giốc Waterfall in Cao Bằng, is famous for what?',
      options: [
        'Its stalactite and stalagmite formations',
        'Its ancient Buddhist statues',
        'Its coral reef fossils',
        'Its underground hot springs',
      ],
      correctIndex: 0,
    },
    {
      question: 'What type of landscape dominates most of the Non Nước Cao Bằng Geopark?',
      options: ['Sand dunes', 'Volcanic plains', 'Karst limestone terrain', 'Coastal mangroves'],
      correctIndex: 2,
    },
    {
      question:
        'Pác Bó, a historic site located within Cao Bằng province, is most associated with what?',
      options: [
        'The birthplace of the Trưng Sisters',
        'The site where Hồ Chí Minh returned to Vietnam in 1941',
        'The capital of the Nguyễn dynasty',
        'The site of the Battle of Điện Biên Phủ',
      ],
      correctIndex: 1,
    },
    {
      question: '"Non Nước", as in the geopark name "Non Nước Cao Bằng", roughly translates to what?',
      options: ['"Fire and Stone"', '"Sun and Sky"', '"Mountains and Waters"', '"Rice and Rivers"'],
      correctIndex: 2,
    },
    {
      question: 'Trùng Khánh, the district home to Bản Giốc Waterfall, is located in which province?',
      options: ['Hà Giang', 'Lạng Sơn', 'Bắc Kạn', 'Cao Bằng'],
      correctIndex: 3,
    },
  ],

  Math: [
    {
      question: 'What is the derivative of x^2 with respect to x?',
      options: ['x', '2x', 'x^2', '2'],
      correctIndex: 1,
    },
    {
      question: 'What is the derivative of sin(x)?',
      options: ['cos(x)', '-cos(x)', '-sin(x)', 'tan(x)'],
      correctIndex: 0,
    },
    {
      question: 'What is ∫ 2x dx?',
      options: ['x^2 + C', '2x^2 + C', 'x + C', 'x^2'],
      correctIndex: 0,
    },
    {
      question: 'What is the derivative of a constant (e.g. the derivative of 7)?',
      options: ['1', 'The constant itself', '0', 'Undefined'],
      correctIndex: 2,
    },
    {
      question: 'Using the power rule, what is the derivative of x^n?',
      options: ['n · x^(n-1)', 'x^(n-1)', 'n · x^n', '(n-1) · x^n'],
      correctIndex: 0,
    },
    {
      question: 'What is ∫ cos(x) dx?',
      options: ['-sin(x) + C', 'sin(x) + C', 'cos(x) + C', '-cos(x) + C'],
      correctIndex: 1,
    },
    {
      question: 'What is the derivative of e^x?',
      options: ['x · e^(x-1)', 'e^x', '1', 'e^(x-1)'],
      correctIndex: 1,
    },
    {
      question: 'What is the derivative of ln(x)?',
      options: ['ln(x)', 'x', '1/x', '1'],
      correctIndex: 2,
    },
    {
      question:
        'By the Fundamental Theorem of Calculus, the derivative of ∫ from a to x of f(t) dt is:',
      options: ['f(a)', 'f(x)', "f'(x)", '0'],
      correctIndex: 1,
    },
    {
      question: 'What is ∫ 1/x dx (for x > 0)?',
      options: ['x^2/2 + C', '-1/x^2 + C', 'ln(x) + C', '1/x^2 + C'],
      correctIndex: 2,
    },
  ],

  Literature: [
    {
      question: 'Who wrote "Truyện Kiều" (The Tale of Kiều)?',
      options: ['Nguyễn Du', 'Hồ Xuân Hương', 'Nam Cao', 'Xuân Diệu'],
      correctIndex: 0,
    },
    {
      question: '"Truyện Kiều" is written in which traditional Vietnamese poetic verse form?',
      options: ['Song thất lục bát', 'Lục bát', 'Đường luật', 'Thơ mới (free verse)'],
      correctIndex: 1,
    },
    {
      question: 'Who is the author of "Nhật ký trong tù" (Prison Diary)?',
      options: ['Hồ Chí Minh', 'Tố Hữu', 'Nguyễn Ái Quốc', 'Xuân Quỳnh'],
      correctIndex: 0,
    },
    {
      question:
        'Which Vietnamese poet is often called the "Queen of Nôm poetry" for her witty, satirical verses?',
      options: ['Đoàn Thị Điểm', 'Bà Huyện Thanh Quan', 'Hồ Xuân Hương', 'Sương Nguyệt Anh'],
      correctIndex: 2,
    },
    {
      question:
        '"Số đỏ" (Dumb Luck), a satirical novel about Vietnamese society under French colonialism, was written by whom?',
      options: ['Vũ Trọng Phụng', 'Ngô Tất Tố', 'Nam Cao', 'Nguyễn Công Hoan'],
      correctIndex: 0,
    },
    {
      question:
        '"Chí Phèo," a famous short story about a peasant driven to violence and despair, was written by whom?',
      options: ['Nam Cao', 'Thạch Lam', 'Nguyên Hồng', 'Kim Lân'],
      correctIndex: 0,
    },
    {
      question: 'Which script did Nguyễn Du use to compose "Truyện Kiều"?',
      options: ['Chữ Quốc Ngữ', 'Chữ Hán', 'Chữ Nôm', 'Chữ Pháp'],
      correctIndex: 2,
    },
    {
      question:
        '"Tắt đèn" (Extinguished Lamp), depicting rural poverty under French colonial rule, was written by whom?',
      options: ['Ngô Tất Tố', 'Nam Cao', 'Vũ Trọng Phụng', 'Nguyễn Đình Chiểu'],
      correctIndex: 0,
    },
    {
      question:
        'Which 1930s literary group promoted modern Vietnamese prose, individualism, and Western-influenced style?',
      options: ['Tự Lực Văn Đoàn', 'Đông Kinh Nghĩa Thục', 'Thơ Mới phong trào', 'Nhân Văn - Giai Phẩm'],
      correctIndex: 0,
    },
    {
      question: 'Which epic poem is considered the most celebrated work of classical Vietnamese literature?',
      options: ['Lục Vân Tiên', 'Chinh Phụ Ngâm', 'Truyện Kiều', 'Cung Oán Ngâm Khúc'],
      correctIndex: 2,
    },
  ],

  'Pop Culture': [
    {
      question: 'Which streaming service produced the series "Stranger Things"?',
      options: ['Hulu', 'Netflix', 'Disney+', 'Amazon Prime Video'],
      correctIndex: 1,
    },
    {
      question: '"Avengers: Endgame" was released in which year?',
      options: ['2017', '2018', '2019', '2021'],
      correctIndex: 2,
    },
    {
      question: 'Which pop star is widely known as the "King of Pop"?',
      options: ['Prince', 'Elvis Presley', 'Michael Jackson', 'Freddie Mercury'],
      correctIndex: 2,
    },
    {
      question: 'What is the name of the wizarding school in the Harry Potter series?',
      options: ['Hogwarts', 'Beauxbatons', 'Durmstrang', 'Ilvermorny'],
      correctIndex: 0,
    },
    {
      question: 'Which band originally performed the song "Bohemian Rhapsody"?',
      options: ['The Rolling Stones', 'Queen', 'Led Zeppelin', 'Pink Floyd'],
      correctIndex: 1,
    },
    {
      question: 'What color is Kermit the Frog?',
      options: ['Blue', 'Yellow', 'Green', 'Purple'],
      correctIndex: 2,
    },
    {
      question: 'The song "Let It Go" is from which animated movie?',
      options: ['Moana', 'Tangled', 'Frozen', 'Encanto'],
      correctIndex: 2,
    },
    {
      question: 'In "The Simpsons," what is the name of Homer\'s son?',
      options: ['Bart', 'Milhouse', 'Ned', 'Nelson'],
      correctIndex: 0,
    },
    {
      question: 'Bruce Wayne is the secret identity of which superhero?',
      options: ['Superman', 'Batman', 'Iron Man', 'The Flash'],
      correctIndex: 1,
    },
    {
      question: 'Which video game company created the character Mario?',
      options: ['Sega', 'Sony', 'Nintendo', 'Capcom'],
      correctIndex: 2,
    },
  ],
}
