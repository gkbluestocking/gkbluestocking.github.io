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
    "welcomeMessage": "I am Eleni Palmos and Welcome to My Page.",
    "bioPic": "images/eleni.jpg",
    "skills": ["Javascript", "CSS", "HTML", "DoubleClick", "Sizmek", "Programmatic", "Excel"]
};

displayBio();

var education = {
    "schools": [{
        "name": "New York University",
        "location": "New York, NY",
        "degree": "BA",
        "major": ["Psychology", "Religious Studies"],
        "dates": "1993-1997"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

displayEducation();

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
    }]
};

displayWork();

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2015",
        "description": "Online Resume"
    }]
};

displayProjects();


function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedMessage);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = '';
        var $skillList = $("#skills");

        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace("%data%", skill);
            console.log(formattedSkill);
            $skillList.append(formattedSkill);
        });
    }
}

function displayContacts() {
  for (contacts in contacts.header) {
    var formattedMobile = $(HTMLmobile.replace("%data%", bio.contacts.mobile));
    var formattedEmail = $(HTMLemail.replace("%data%", bio.contacts.email));
    var formattedTwitter = $(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    var formattedGithub = $(HTMLgithub.replace("%data%", bio.contacts.github));

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
}
}

function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolHeader = formattedName + formattedDegree;

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolHeader);
        $(".education-entry:last").append(formattedDates);

        if (education.schools[school].major.length > 0) {
            for (item in education.schools[school].major)
                var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".school-entry:last").append(schoolMajor);
        }
    }
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

function displayProjects() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
    $("#main").append(internationalizeButton);
}