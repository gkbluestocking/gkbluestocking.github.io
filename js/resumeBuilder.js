var bio = {
    "name": "Eleni Palmos",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+1.718.570.3200",
        "email": "gkbluestocking@gmail.com",
        "github": "gkbluestocking",
        "twitter": "@gkbluestocking",
        "location": "New York"
    },
    "welcomeMessage": "Welcome to my page",
    "skills": ["Javascript", "CSS", "HTML", "DoubleClick", "Sizmek", "Programmatic", "Excel"],
    "bioPic": "images/eleni.jpg"
};

var education = {
    "schools": [{
        "name": "New York University",
        "city": "New York City, US",
        "degree": "BA",
        "major": ["Psychology", "Religious Studies"]
    }],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
    ]
};

var work = {
    "jobs": [{
        "employer": "LiveIntent",
        "title": "Billing Manager",
        "dates": "October 2013 - Present",
        "description": "Billing"
    }, {
        "employer": "MediaMind",
        "title": "Billing Specialist",
        "dates": "July 2012 - October 2013",
        "description": "Billing"
    }
    ]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2015",
        "description": "Online Resume"
    }
    ]
};

var name = "Eleni Palmos";
    var formattedName = HTMLheaderName.replace("%data%", name);
    var role = "Web Developer";
    var formattedRole = HTMLheaderRole.replace("%data%", role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = '';
    var $skillList = $("#skills");

    bio.skills.forEach(function(skill) {
       formattedSkill = HTMLskills.replace("%data%", skill);
       console.log (formattedSkill);
       $skillList.append(formattedSkill);
    });
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(
        formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);


    function inName(name) {
        name = name.trim().split(" ");
        console.log(name);
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

        return name[0] + " " + name[1];
    }
    $('#main').append(internationalizeButton);

}