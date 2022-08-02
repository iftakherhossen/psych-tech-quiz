const quizzes = [
     {
          id: 17001,
          name: "JavaScript",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "JavaScript is a high-level, interpreted programming language. Javascript (JS) is a scripting languages, primarily used on the Web.",
          category: "Programming",
          question: 5,   
          isAvailable: true,
          duration: '5 minutes',     
     },
     {
          id: 17002,
          name: "PHP",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",
          category: "Programming",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17003,
          name: "C#",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
          category: "Programming",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17004,
          name: "Python",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.",
          category: "Programming",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17005,
          name: "Java",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
          category: "Programming",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17006,
          name: "HTML5",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          category: "Web Development",
          question: 5,
          isAvailable: true,
          duration: '5 minutes',
     },
     {
          id: 17007,
          name: "CSS3",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
          category: "Web Development",
          question: 5,
          isAvailable: true,
          duration: '5 minutes',
     },
     {
          id: 17008,
          name: "Git",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
          category: "Tools",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17009,
          name: "Adobe Illustrator",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.",
          category: "Graphic Design",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17010,
          name: "Microsoft Word",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Microsoft Word is a word processing software developed by Microsoft. It was first released on October 25, 1983, under the name Multi-Tool Word for Xenix systems.",
          category: "Tools",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17011,
          name: "Adobe Photoshop",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.",
          category: "Graphic Design",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17012,
          name: "My SQL",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language.",
          category: "Database",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17013,
          name: "R",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing.",
          category: "Programming",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17014,
          name: "React",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
          category: "Web Development",
          question: 5,
          isAvailable: true,
          duration: '5 minutes',
     },
     {
          id: 17015,
          name: "Node.js",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.",
          category: "Programming",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17016,
          name: "Angular.js",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google.",
          category: "Web Development",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17017,
          name: "Vue.js",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
          category: "Web Development",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17018,
          name: "GraphQL",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.",
          category: "Database",
          question: 5,
          isAvailable: false,
     },
     {
          id: 17019,
          name: "MongoDB",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: `MongoDB is an open source cross-platform, document-oriented, NoSQL database program.`,
          category: "Database",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17020,
          name: "Visual Studio Code",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS.",
          category: "Tools",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
     {
          id: 17021,
          name: "Linux",
          image: "https://placeimg.com/640/280/tech/grayscale",
          description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.",
          category: "Tools",
          question: 5,
          isAvailable: false,
          duration: '5 minutes',
     },
];

export default quizzes;