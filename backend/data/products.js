const products = [
  {
    name: 'Learn Html, Css, Javascript',
    image: '/images/download.png',
    description:
      'Hyper Text Markup Language HTML Cascading Style Sheets CSS, and Javascript are the languages that run web, Html is for adding meaning to raw content by marking it up, CSS is for formatting that marked up content, Javascript is making that content and formatting interactive.',
    brand: 'Programming',
    category: 'Software',
    price: 45000,
    countInStock: 1,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Master CSS and style your Project',
    image: '/images/css.png',
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript..',
    brand: 'Programming',
    category: 'Software',
    price: 65000,
    countInStock: 1,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Master Javascript Programming using OOP ',
    image: '/images/javascript.png',
    description:
            ' 1: Intro & Getting Started JavaScript Language Fundamentals 3: DOM Manipulation & Events Chapter 4: DOM Projects Chapter 5: object oriented java Script –ES7 Chapter 6: OOP Book list project  Chapter 7: Asynchronous JavaScript, Ajax & Fetch API Chapter 8: API Project Chapter 9: Error Handling & Regular Expression',
    brand: 'Programming',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Build 20 Projects with Javascript ',
    image: '/images/javascript.png',
    description:
            'What makes you a core Javascript Developer is the ability to build projects that are user friendly with the browser as a developer, here we will build 20 projects using this language JS, from Dom to OOP, to Fetch API and Async Await all you need to know in JS will be found here, but the indepth Knowledge of CSS and HTML will be required no frameworks needed',
    brand: 'Programming',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Google suites',
    image: '/images/googlesuite.png',
    description:
      'MySQL is a relational database management system based on SQL – Structured Query Language. ... The most common use for mySQL however, is for the purpose of a web database. It can be used to store anything from a single record of information to an entire inventory of available products for an online store.',
    brand: 'DataBase',
    category: 'Software',
    price: 35000,
    countInStock: 1,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Build a server side app using Nodejs',
    image: '/images/nodejs.png',
    description:
      'Node. js is primarily used for non-blocking, server side event-driven, due to its single-threaded nature. Its used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.',
    brand: 'Programming',
    category: 'Software',
    price: 45000,
    countInStock: 1,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Build a cloud Database using MongoDb',
    image: '/images/mongodb.png',
    description:
      'MongoDB is great for transactional stores where performance is a concern. Its also great when the data structure is going to evolve over time, as its schema-less operations allow you to update the data on the fly.',
    brand: 'Database',
    category: 'Software',
    price: 20000,
    countInStock: 1,
    rating: 2.5,
    numReviews: 0,
  },
  {
    name: 'Vue js',
    image: '/images/vue.png',
    description:
      'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members',
    brand: 'Database',
    category: 'Software',
    price: 20000,
    countInStock: 1,
    rating: 2.5,
    numReviews: 0,
  },
  {
    name: 'CyberSecurity and Ethical Hacking',
    image: '/images/cybersecurity.png',
    description:
      'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It is also known as information technology security or electronic information security.',
    brand: 'Programming',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Mastering Microsoft Azure',
    image: '/images/azure.png',
    description:
      'Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers',
    brand: 'Programming',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Learn Reactjs for Frontend Dev',
    image: '/images/rsprojects.png',
    description:
      'React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It is used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.',
    brand: 'Programming',
    category: 'Software',
    price: 45000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Build a Mobile App with ReactNative',
    image: '/images/reactnative.png',
    description:
      'React Native is an exciting framework that enables web developers to create robust mobile applications using their existing JavaScript knowledge. It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end users experience or application quality.',
    brand: 'Programming',
    category: 'Software',
    price: 45000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Learn the basics of Computer',
    image: '/images/office1.png',
    description:
      'At the end of the course, the student will be able to acquire skills necessary to work as an office assistant. The student will obtain advance skills in Microsoft word, excel, PowerPoint, google suite applications like docs, sheet, form, classroom, slide.',
    brand: 'Desktop Publishing',
    category: 'Basics',
    price: 25000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Learn Python Programming',
    image: '/images/python.png',
    description:
      'Python is a general-purpose coding language—which means that, unlike HTML, CSS, and JavaScript, it can be used for other types of programming and software development besides web development mostly server side. That includes back end development, software development, data science and writing system scripts among other things.',
    brand: 'Programming',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 2.0,
    numReviews: 0,
  },
  {
    name: 'Learn Django Framework ',
    image: '/images/django.png',
    description:
      'Django is a Python based free and open-source web framework that follows the model-template-views architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit.',
    brand: 'Programming',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 2.0,
    numReviews: 0,
  },
  {
    name: 'Graphic Designing',
    image: '/images/graphic.png',
    description:
      'At the end of the course, the student will be able to acquire skills necessary to be a Graphic Designer. The student will obtain skill in CorelDRAW which is used to create a banner, flyer, brochure,cards. The student will also gain skill in removing background and changing image backgrounds in Photoshop. Also filtering images in Photoshop too. The student gets introduced to advanced graphic applications like creating illustrations using Adobe illustrator..',
    brand: 'Graphics',
    category: 'Software',
    price: 25000,
    countInStock: 1,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Build 5 responsive websites with Bootstrap 4',
    image: '/images/bootstrap.png',
    description:
      'Bootstrap is a potent front-end framework used to create modern websites and web apps. It is an open source and free to use, yet features numerouse to HTML and CSS Templates for UI interface elements such as buttons and forms',
    brand: 'Network',
    category: 'Pc Herdware',
    price: 10000,
    countInStock: 1,
    rating: 3.0,
    numReviews: 0,
  },
  {
    name: 'Master Redux, How to Manage application state',
    image: '/images/redux.png',
    description:
      'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook/s Flux architecture, it was created by Dan Abramov',
    brand: 'Network',
    category: 'Software',
    price: 30000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Master React by building 5 Projects',
    image: '/images/5reactprojects.png',
    description:
      'ReactJS is an open-source JavaScript library that brings the power of reactive programming to web applications and sites. It aims to address the challenges encountered in developing single-page applications, and is intended to help developers build large, easily scalable and changing web apps',
      
    brand: 'Network',
    category: 'Software',
    price: 30000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Advanced React Projects',
    image: '/images/react.png',
    description:
      'ReactJS is an open-source JavaScript library that brings the power of reactive programming to web applications and sites. It aims to address the challenges encountered in developing single-page applications, and is intended to help developers build large, easily scalable and changing web apps',
      
    brand: 'Network',
    category: 'Software',
    price: 30000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Build modern web app using Django',
    image: '/images/mwadjango.png',
    description:
    'Django is a Python based free and open-source web framework that follows the model-template-views architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit.',
      
    brand: 'Network',
    category: 'Software',
    price: 30000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Build 5 projects with Express Nodejs',
    image: '/images/express.png',
    description:
    'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js',
      
    brand: 'Network',
    category: 'Software',
    price: 30000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Mastering Web Development',
    image: '/images/web.png',
    description:
    'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js',
      
    brand: 'Network',
    category: 'Software',
    price: 30000,
    countInStock: 1,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'DataBase Management using Mysql',
    image: '/images/mysql.png',
    description:
      'MySQL is a relational database management system based on SQL – Structured Query Language. ... The most common use for mySQL however, is for the purpose of a web database. It can be used to store anything from a single record of information to an entire inventory of available products for an online store.',
    brand: 'DataBase',
    category: 'Software',
    price: 35000,
    countInStock: 1,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'The Best Of Angular Framework',
    image: '/images/angular.png',
    description:
      'MySQL is a relational database management system based on SQL – Structured Query Language. ... The most common use for mySQL however, is for the purpose of a web database. It can be used to store anything from a single record of information to an entire inventory of available products for an online store.',
    brand: 'DataBase',
    category: 'Software',
    price: 35000,
    countInStock: 1,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'DataBase Management using Mysql',
    image: '/images/sql.png',
    description:
      'MySQL is a relational database management system based on SQL – Structured Query Language. ... The most common use for mySQL however, is for the purpose of a web database. It can be used to store anything from a single record of information to an entire inventory of available products for an online store.',
    brand: 'DataBase',
    category: 'Software',
    price: 35000,
    countInStock: 1,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Digital Marketing',
    image: '/images/digitalmarketing.png',
    description:
    'The student learns to make use of social media for marketing. The student understands Facebook and Instagram business application. The student is equally introduced to google MyBusiness application. The importance of search engine optimization (SEO), including paid searches and organic search.',
    brand: 'DataBase',
    category: 'Software',
    price: 35000,
    countInStock: 1,
    rating: 3.5,
    numReviews: 0,
  },





]

export default products
