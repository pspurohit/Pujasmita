var sc = document.createElement('script');
sc.src = "script.js";
sc.type = "text/javascript";
document.getElementsByTagName('body')[0].appendChild(sc);

var data = {
    pageMeta: {
        title: 'Pujasmita Purohit\'s resume',
        icon: false,
        jsLibrary: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"],
        cssLibrary: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" ]
    },

    pageHeader: {
        title: "Pujasmita Purohit's resume",
        background: "",
        onclick: "window.location.reload()",
        
    },
    bodyMenu: [

        {
            label: 'About',
            icon: 'glyphicon glyphicon-home',
            src: '#timeline',
            name: 'home_button'

        },
        {
            label: 'Timeline',
            icon: 'glyphicon glyphicon-road',
            src: '#timeline',
            name: 'professional'
        },
        {
            label: 'Experiance',
            icon: 'glyphicon glyphicon-list-alt',
            src: '#experiance',
            name: 'experiance'
        }
    ],
    social: [
        {
            name : 'linkedin',
            target : "https://www.linkedin.com/in/pujasmita-purohit-aa58a216a/",
            icon : "fa-linkedin-square",
            tooltip: 'LinkedIn account'
        },
        {
            name : 'github',
            target : "https://github.com/pspurohit",
            icon : "fa-github",
            tooltip: 'GIT account'
        },
        {
            name : 'gmail',
            target: "mailTo:purohit.pujasmita@gmail.com",
            icon : "fa-envelope",
            tooltip : 'Gmail'
        }
    ],
    bodyContent: [{
            type: 'about',
            title: 'About',
            id: 'about',
            image : {src: 'puja.jpeg', alt: 'puja.jpeg'},
            content: "A highly determined and motivated individual with good theoretical knowledge and technical skill complimented by excellent verbal and written skills. Well focused towards goal with smart -hardworking ability & sincerity. I am an ambitious, quick learner, work independently, self-confident, success oriented, team worker, and have the capacity to lead a team."
            
        },
        {
            type: "summary",
            title: "Summary",
            id: 'summary',
            content: [
                {
                    label: "Technical Strength",
                    cont: [
                        "MS-Office products",
                        "Completed Computer course O-level with 72%(2013)",
                        "Microbial technique including Streaking, Spreading, Pouring, Plating, Sterilization technique, Gram Staining, Bacterial culture, Media preparation, Isolation of microbes from air, water and soil",
                        "Immunological Technique: ELISA Test, ABO Blood grouping",
                        "Biochemical Technique: Estimation of carbohydrate, protein and lipid, RBC count, WBC count, Blood grouping Test",
                        "Molecular Biology: SDS PAGE, Agarose gel electrophoresis, estimation of DNA and RNA from blood, cell, leaf ODD, Southern blotting, Northern blotting, Western blotting",
                        "Plant Tissue Culture: Preparation of media, Sterilization of explant, leaf culture, and callus culture"
                    ]
                },
                {
                    label: "Roles & Responsibilities",
                    cont: [
                        "Currently working as Program Director",
                        "Organized 29th International conference on Sleep disorder and psychiatry, 2018 in London",
                        "Organized 4th International conference on Mental health and human resilience, 2017 in Rome",
                        "Organized 27th Euro congress on Psychiatrist and psychology, 2017 in Rome",
                        "Organized 24th International conference on Psychosomatic medicines, 2017 in London",
                        "Organized 27th International conference on Psychiatry and psychology health, 2018 in Paris",
                        "Acted as Team lead on multiple occasions"
                    ]
                }
            ]


        },
        {
            type: 'timeline',
            title: 'Timeline',
            id: 'timeline',
            content: [{
                    time: { "date": "07", "month": "02", "year": "1995" },
                    timelineEvent: 'Day I was born',
                    icon: false
                },
                {
                    time: { "year": "2010" },
                    timelineEvent: 'Graduated from STD-X ',
                    icon: false
                },
                {
                    time: { "year": "2012" },
                    timelineEvent: 'Graduated from STD-XII',
                    icon: false
                },
                {
                    time: { "year": "2012" },
                    timelineEvent: 'Garduated from Bachelor in Anchal College, Padampur, Sambalpur ',
                    icon: false
                },
                {
                    time: { "month": "06", "year": "2016" },
                    timelineEvent: 'Joined Omics International Limited',
                    icon: false
                }
                
            ]
        },
        
        {
            type: 'experiance',
            title: "Experiance",
            id: "experiance",
            content: [
                
                
                {
                    company : 'Omincs International Limited',
                    startTime : { "month":"June","year": "2016" },
                    projects : [
                        {
                            title : 'Program director',
                            type : 'Event management',
                            desc : "Organised many international conference on Sleep diorder, Psychiatristy and psychology, Psychomatic medicines. Acted as team leader on multiple occasions.",
                        }
                    ]
                }
            ],

        },
        
        {
            type: "education",
            title: "Education",
            id: 'education',
            content: [
                {
                    degree : 'Master of Science',
                    inst : 'Gandhi Institute of Biological Science, Berhampur',
                    start: { "year": "2015" },
                    end : {"year":"2017"},
                    major: 'Life science',
                    mark : '83.3% <br /> (Berhampur University topper)'
                },
                {
                    degree : 'Bachelor of Science',
                    inst : 'Anchal College, Padampur, Sambalpur',
                    start: { "year": "2013" },
                    end : {"year":"2015"},
                    major: 'Zoology',
                    mark : '72%'
                },
                {
                    degree : 'Higher Secondary',
                    inst : 'Council of Higher Secondary Education, Odisha',
                    mark : '63.67%',
                    
                },
                {
                    degree : 'Secondary',
                    inst : 'Board of Secondary Education, Odisha',
                    mark : '80%'
                }
            ]


        },
        {
            type: "personalInformation",
            title: "Personal Information",
            id: 'personalInformation',
            content: [
                 {
                    label: 'Permanent Address',
                    content : 'C/O : Ram Narayan Purohit <br /> AT/PO : Padampur <br /> Dist: Bargadh<br /> Odisha, PIN-768036',
                    
                },
                {
                    label: 'Present Address',
                    content : 'Hyderabad, Telengana',
                    
                },
                {
                    label : 'Email',
                    content : 'purohit.pujasmita@gmail.com',
                    type : 'email'
                },
                
                {
                    label : 'DOB',


                    content : { "date": "07", "month": "02", "year": "1995" },

                    type : 'date'
                },
                {
                    label: 'Marital Status',
                    content: 'Single'
                }

            ]
        }
    ],
    pageFooter: []

};
