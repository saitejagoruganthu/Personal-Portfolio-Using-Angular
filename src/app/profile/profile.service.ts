import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Task Manager Application Using MEAN Stack',
      desc: `Developed a task-manager application from scratch using Angular-Material, Express JS and Mongo DB. ^
      Implemented the login and sign-up features using the JWT authentication technique where an access token is created for each user and refreshed every 15 min. ^
      Incorporated features to achieve basic CRUD operations on both lists as well as tasks. ^
      Engineered a responsive layout for the application to create a user-friendly and device-independent interface. ^
      Included drag-drop feature for the users to conveniently rearrange the lists and tasks. ^
      Devised a feature for the users to toggle a task as complete and incomplete by just clicking on that particular task. ^
      Deployed the whole database cluster onto the Mongo DB Atlas Cloud database service and pushed the node.js and angular deployable to a free-tier Express JS server and web server, respectively.`,
      livedemo: 'https://tasksapp.saitejagoruganthu.com/',
      githurl: 'https://github.com/saitejagoruganthu/-TaskManager_MEANStack_Frontend',
      imgUrl: 'assets/images/tasksapp_screenshot.png',
      tech: 'Angular 15, Angular Material, Node JS, Express JS, Mongo DB, JWT Authentication, Mongo DB Atlas Cloud Service'
    },
    {
      id: 2,
      title: 'Cross Domain Enterprise Online Market Place',
      desc: `Designed, developed, and hosted an online marketplace created by merging three different company websites. ^
      Created a sign-up feature for the whole market place. ^
      Added a tracking feature to show where the user has visited in the marketplace. ^
      Included a feature where users can add a review/rating for any product/service offered in the marketplace. ^
      Created a widget to display the top five most visited and best-rated products from the whole marketplace. ^
      
      Future updations is to include responsive design.`,
      livedemo: 'https://marketplace.saitejagoruganthu.com/',
      githurl: 'https://github.com/saitejagoruganthu/Cross-Domain-Enterprise-Online-Market-Place',
      imgUrl: 'assets/images/SpartanMarketPlace.png',
      tech: 'PHP, JavaScript, jQuery, HTML, Bootstrap, CSS, SQL, MySQL.'
    },

    {
      id: 3,
      title: 'Personal Portfolio Using Angular 15',
      desc: `Implemented a personal portfolio website using angular and bootstrap frameworks. ^In my view, portfolios are a great way to demonstrate the competencies you would list on a resume or talk about in an interview — they allow you to show and not just tell. ^ 
      During a job search, the portfolio showcases your work to potential employers. ^
      It presents evidence of your relevant skills and abilities. ^
      It took a while to complete the portfolio and I cannot wait for you all to know about me more.`,
      livedemo: 'https://saitejagoruganthu.com/',
      githurl: 'https://github.com/saitejagoruganthu/Personal-Portfolio-Using-Angular',
      imgUrl: 'assets/images/portfolio_screenshot.png',
      tech: 'Angular 15, Node, Bootstrap, SCSS, HTML'
    },


    {
      id: 4,
      title: '3D Graphics Including Shading and Diffuse Reflection',
      desc: `Written driver logic in MCUXpresso IDE using C language to render a 3D cube which is elevated towards Z-axis and has a point light source in the world-coordinate system. This elevation and light source coordinate is responsible for the shadow on the X-Y plane. ^
      Along with that, able to achieve diffuse reflection with respect to the color red. ^
      Used Transformation Pipeline concept to render the 2D coordinates onto a 3D world coordinate system.`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/3D-Graphics-Including-Shading-and-Diffuse-Reflection',
      imgUrl: 'assets/images/3DGraphics.jpg',
      tech: 'MCUXpresso LPX1769(ARM Cortex-M3 based NXP LPC1769), SPI, 120x160 TFT LCD Display and a basic prototype board to solder the above components'
    },

    {
      id: 5,
      title: '2D Graphics Rendering Using LPC1769 Microprocessor System',
      desc: `Written device driver logic between LPC1769 and TFT LCD Display using SPI protocol to transmit live screensavers such as Rotating Squares and Trees generation. ^
      At first, written the base API drawLine(), which is again used intricately to draw squares and trees at will. ^
      Have implemented the rotation matrix to rotate a particular line i.e., to create branches of a tree.`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/2D-Graphics-Rendering-Using-LPC1769',
      imgUrl: 'assets/images/2DGraphics.jpg',
      tech: 'MCUXpresso LPX1769(ARM Cortex-M3 based NXP LPC1769), SPI protocol, 120x160 TFT LCD Display and a basic prototype board to solder all the above components.'
    },


    {
      id: 6,
      title: 'Hand-Gesture Controlled Robot Using Arduino',
      desc: `Designed a hand-gesture controlled car using ADXL335 (a 3-axes Accelerometer sensor), Arduino Nano as a micro-controller, and an RF Transmitter-Receiver pair to transmit and receive signals. ^
      Built and formulated a circuit board for both transmitter and receiver sides and aided in writing the Arduino Nano code logic. ^
      Analyzed 3-axis accelerometer module to devise correct angle measurements required for proper movement of the car as it involved transmitter and receiver module. ^
      Finally, built a prototype robot car assembling all the above components.`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/Hand-Gesture-Controlled-Robot',
      imgUrl: 'assets/images/Hand-Gesture-Controlled-Robot-Screenshot.png',
      tech: 'Arduino IDE, Arduino Nano, RF 434MHz Transmitter, HT12E Encoder IC, ADXL335 Accelerometer Sensor, L293D Motor Driver IC, HT12D Decoder IC, RF 434MHz Receiver, Gear Motors and Wheels, Robot Car Chassis.'
    },



    /* {
      id: 7,
      title: 'Pipelined MIPS Processor with I/O Interfacing',
      desc: `The Task was to complete the design and functional verification of a pipelined MIPS processor . 
      Also, we were required to complete the design and verification of a small System-on-Chip (SoC) system which includes the pipelined MIPS processor, a factorial accelerator and a simple GPIO unit, all connected via memory-mapped I/O`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE200-Computer-Architecture-And-Design/tree/main/Pipelined-MIPS-Processor-With-IO-Interfacing',
      imgUrl: 'assets/images/PipelinedProject.png',
      tech: 'Verilog, Vivado Xilinx'
    }, */

    /* {
      id: 8,
      title: 'HC-05 Based Android App Controlled AC Bulb Using ATMega16',
      desc: `Devised and aided in building a custom-made printed circuit board using AutoCAD Eagle to hold an HC-05 Bluetooth module .
      Created an android mobile application using MIT App Inventor where the end user can send commands to the wireless module to control the electrical load`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/3D-Graphics-Including-Shading-and-Diffuse-Reflection',
      imgUrl: 'assets/images/3DGraphics.jpg',
      tech: 'ATMEL Studio 7.0 IDE, ATmega16, HC-05 Bluetooth Module, 7805 Voltage Regulator, 5V Relay, USBASP Programmer, 12V Battery, 230V AC Bulb, Embedded C, MIT App Inventor, Eagle PCB CAD software.'
    } */
  ]

  about2 = `Software Developer with 3+ years of experience. ^
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies. ^
  Expertise in Angular 2+ all versions along with its material design, React, Javascript,  Node JS, Express JS, Java and UI with Responsive Designs. ^
  Have excellent knowledge in Python, Jquery, Bootstrap, MongoDB, and MySQL. ^
  Apart from software, I excel in hardware aspects which includes Bluetooth, Embedded systems and PCB designing. ^
  My interests and extracurricular activities include but not limited to Cricket, Table-Tennis and learning new languages.
  `

  about = "I am intuitive in nature, lover of innovation and everything related to generating new knowledge. I tackle problems with a smile and solve them as soon as possible. Very calculative with respect to the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/17WDVlslfgW_5-YKQNvFaoD-ZxTBcBgAW/edit?usp=share_link&ouid=117815726226256458495&rtpof=true&sd=true"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'C, Java',
      'progress': '90%'
    },
    {
        'id': '2',
        'skill': 'PHP, Bootstrap',
        'progress': '90%'
    },
    {
        'id': '3',
        'skill': 'HTML, CSS, SCSS',
        'progress': '90%'
    },
    {
        'id': '4',
        'skill': 'Angular 2+, Angular Material',
        'progress': '90%'
    },
    {
        'id': '5',
        'skill': 'Javascript, JQuery, React.js',
        'progress': '85%'
    },
    {
        'id': '6',
        'skill': 'Eclipse IDE, Microsoft VSCode, Postman',
        'progress': '85%'
    },
    {
      'id': '7',
      'skill': 'Node.js, Express.js',
      'progress': '90%'
    },
    {
      'id': '8',
      'skill': 'SQL, MySQL, Mongo DB, PostgreSQL, Oracle',
      'progress': '80%'
    },
    {
        'id': '9',
        'skill': 'GIT, SVN',
        'progress': '80%'
    },
    {
        'id': '10',
        'skill': 'Spring Boot, Docker, Kubernetes',
        'progress': '70%'
    }
  ];

  experienceData: any = [
    {
      id: 2,
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, India',
      timeline: 'May 2019 - July 2022',
      role: 'Systems Engineer - Developer',
      tech: 'Java, Angular, Angular-Material, Spring-Boot, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MongoDB, Kubernetes',
      work: `
      Designed and Developed a Bank Customer Application using Microservices architecture including Spring Boot, interactive user interface with Angular or React, querying PostgreSQL database, and deployed using Kubernetes. ^
      Led a team of 22 fresh recruits to develop a user-friendly angular-based dashboard using material design guidelines. ^
      Bagged the Beyond Excellence Award for designing and developing the Advanced-Search component using the Angular framework with material design which optimized the user interface for the search functionality. ^
      Developed and maintained server and GUI Java kits to migrate models from Monolithic to Microservices architecture which led to a 40% increase in productivity. ^
      Performed 50+ weekly code reviews and optimized the code to decrease the latency factor by 55%. ^
      Initiated and co-organized Fun-Friday activities to ease stress and maintain a work-life balance.
      `
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, India',
      timeline: 'Sep 2018 - Apr 2019',
      role: 'Software Developer Intern',
      tech: 'HTML, CSS, Javascript, JQuery, Bootstrap, Java, JDBC, OracleDB',
      work: `
      Worked on building a website called Dispur Wireless, a subscriber-vendor telecommunication website that can display usage statistics for each user. ^
      Built a Java application that alters an XML file into another XML file in a customizable format. ^
      Launched a simple application to perform CRUD operations on Oracle DB using JDBC drivers. ^

      Resolved 15+ internal code bugs reported by the Quality Assurance (QA) team.
        `
    },


  ]

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.experienceData;
  }
}