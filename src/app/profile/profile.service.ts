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
      title: 'Cross Domain Enterprise Online Market Place',
      desc: `Designed, developed and hosted an online market place created by merging 3 different company websites. The main functions of this project are as follows: .
      Created a sign-up feature for the whole market place .
      Added tracking feature of where the user has visited in the market place .
      Included a feature where user can add a review/rating for any product/services offered in the market place .
      Created a widget to show the top five most visited, best reviewed and most rated products/services from the whole market place .
      
      Future updations is to include responsive design`,
      livedemo: 'https://marketplace.saitejagoruganthu.com/',
      githurl: 'https://github.com/mehulk05/MyShop',
      imgUrl: 'assets/images/SpartanMarketPlace.png',
      tech: 'PHP, JavaScript, jQuery, HTML, Bootstrap, CSS, SQL, MySQL.'
    },

    {
      id: 2,
      title: 'Personal Portfolio Using Angular',
      desc: `Implemented angular and bootstrap frameworks to create a personal portfolio .In my view, portfolios are a great way to demonstrate the competencies you would list on a resume or talk about in an interview — they allow you to show and not just tell . 
      During a job search, the portfolio showcases your work to potential employers . 
      It presents evidence of your relevant skills and abilities .
      It took a while to complete the portfolio and I cannot wait for you all to know about me more`,
      livedemo: 'https://marketplace.saitejagoruganthu.com/',
      githurl: 'https://github.com/mehulk05/MyShop',
      imgUrl: 'assets/images/portfolio_screenshot.png',
      tech: 'Angular 15, Node, Bootstrap, SCSS, HTML'
    },


    {
      id: 3,
      title: '3D Graphics Including Shading and Diffuse Reflection',
      desc: `Written driver logic in MCUXpresso IDE using C language to render a 3D cube which is elevated towards Z-axis and has a point light source in the world-coordinate system. This elevation and light source coordinate is responsible for the shadow on the X-Y plane .
      Along with that, able to achieve diffuse reflection with respect to the color red .
      Used Transformation Pipeline concept to render the 2D coordinates onto a 3D world coordinate system`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/3D-Graphics-Including-Shading-and-Diffuse-Reflection',
      imgUrl: 'assets/images/3DGraphics.jpg',
      tech: 'MCUXpresso LPX1769(ARM Cortex-M3 based NXP LPC1769), SPI, 120x160 TFT LCD Display and a basic prototype board to solder the above components'
    },

    {
      id: 4,
      title: '2D Graphics Rendering Using LPC1769 Microprocessor System',
      desc: `Written device driver logic between LPC1769 and TFT LCD Display using SPI protocol to transmit live screensavers such as Rotating Squares and Trees generation .
      At first, written the base API drawLine(), which is again used intricately to draw squares and trees at will .
      Have implemented the rotation matrix to rotate a particular line i.e., to create branches of a tree`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/2D-Graphics-Rendering-Using-LPC1769',
      imgUrl: 'assets/images/2DGraphics.jpg',
      tech: 'MCUXpresso LPX1769(ARM Cortex-M3 based NXP LPC1769), SPI protocol, 120x160 TFT LCD Display and a basic prototype board to solder all the above components.'
    },


    {
      id: 5,
      title: 'Hand-Gesture Controlled Robot Using Arduino',
      desc: `Designed a hand-gesture controlled car using ADXL335 (a 3-axes Accelerometer sensor), Arduino Nano as a micro-controller, and an RF Transmitter-Receiver pair to transmit and receive signals .
      Built and formulated a circuit board for both transmitter and receiver sides and aided in writing the Arduino Nano code logic .
      Analyzed 3-axis accelerometer module to devise correct angle measurements required for proper movement of the car as it involved transmitter and receiver module .
      Finally, built a prototype robot car assembling all the above components`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/3D-Graphics-Including-Shading-and-Diffuse-Reflection',
      imgUrl: 'assets/images/3DGraphics.jpg',
      tech: 'Arduino IDE, Arduino Nano, RF 434MHz Transmitter, HT12E Encoder IC, ADXL335 Accelerometer Sensor, L293D Motor Driver IC, HT12D Decoder IC, RF 434MHz Receiver, Gear Motors and Wheels, Robot Car Chassis.'
    },



    {
      id: 6,
      title: 'Pipelined MIPS Processor with I/O Interfacing',
      desc: `The Task was to complete the design and functional verification of a pipelined MIPS processor . 
      Also, we were required to complete the design and verification of a small System-on-Chip (SoC) system which includes the pipelined MIPS processor, a factorial accelerator and a simple GPIO unit, all connected via memory-mapped I/O`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE200-Computer-Architecture-And-Design/tree/main/Pipelined-MIPS-Processor-With-IO-Interfacing',
      imgUrl: 'assets/images/PipelinedProject.png',
      tech: 'Verilog, Vivado Xilinx'
    },



    {
      id: 7,
      title: 'HC-05 Based Android App Controlled AC Bulb Using ATMega16',
      desc: `Devised and aided in building a custom-made printed circuit board using AutoCAD Eagle to hold an HC-05 Bluetooth module .
      Created an android mobile application using MIT App Inventor where the end user can send commands to the wireless module to control the electrical load`,
      livedemo: '',
      githurl: 'https://github.com/saitejagoruganthu/CMPE240-Advanced-Computer-Design/tree/main/3D-Graphics-Including-Shading-and-Diffuse-Reflection',
      imgUrl: 'assets/images/3DGraphics.jpg',
      tech: 'ATMEL Studio 7.0 IDE, ATmega16, HC-05 Bluetooth Module, 7805 Voltage Regulator, 5V Relay, USBASP Programmer, 12V Battery, 230V AC Bulb, Embedded C, MIT App Inventor, Eagle PCB CAD software.'
    }
  ]
  about2 = `Software Developer with 3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ all versions along with its material design, React, Javascript,  Node JS, Java and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, and MySQL .
  Apart from software, I excel in hardware aspects which includes Bluetooth, Embedded systems and PCB designing . 
  My interests and extracurricular activities include but not limited to Cricket, Table-Tennis and learning new languages.
  `

  about = "I am intuitive in nature, lover of innovation and everything related to generating new knowledge. I tackle problems with a smile and solve them as soon as possible. Very calculative with respect to the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1mwGWgn5qq8zHFMqRfD5PXAkW3qvMkcgH/edit?usp=sharing&ouid=117815726226256458495&rtpof=true&sd=true"

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
        'progress': '85%'
    },
    {
        'id': '5',
        'skill': 'Javascript, JQuery',
        'progress': '85%'
    },
    {
        'id': '6',
        'skill': 'Eclipse IDE, Microsoft VSCode, Postman',
        'progress': '85%'
    },
    {
      'id': '7',
      'skill': 'Node JS, Express JS',
      'progress': '80%'
    },
    {
      'id': '8',
      'skill': 'SQL, MySQL, Mongo DB, PostgreSQL',
      'progress': '80%'
    },
    {
        'id': '9',
        'skill': 'GIT, SVN',
        'progress': '80%'
    },
    {
        'id': '10',
        'skill': 'Spring Boot',
        'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  experienceData: any = [
    {
      id: 2,
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, India',
      timeline: 'May 2019 - July 2022',
      role: 'Systems Engineer - Developer',
      tech: 'Java, Angular, Angular-Material, Spring-Boot, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MongoDB',
      work: `
      Collaborated with a team of 10 to develop and implement around 65 User-Defined widgets in Angular for a client .
      Bagged the Beyond Excellence Award for designing and developing the Advanced-Search component using the angular framework with more than 15 functionalities embedded into it .
      Performed several code reviews and optimized the code in existing programs to decrease the latency factor .
      Devised a Java project which alters the format of an XML file and outputs another XML file in the required format .
      Led a team of 22 fresh recruits to develop an interactive, angular-based dashboard page using material guidelines .
      Developed and maintained both server and GUI Java kits to migrate models from old to new version .
      Initiated and co-organized Fun-Friday activities to ease stress and maintain a work-life balance 
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
      Project 1 : Worked on building a website called Dispur Wireless, a basic subscriber-vendor telecommunication website which is capable of displaying usage statistics for each user .

    Laid a foundation pillar by learning all the basic technologies
        `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
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
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.experienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}