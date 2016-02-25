var bio = {
    name: "Eleni Palmos",
    role: "Udacity FEND Student",
    contacts: {
        mobile: "+1.718.570.3200",
        email: "gkbluestocking@gmail.com",
        github: "gkbluestocking",
        twitter: "@gkbluestocking",
        location: "New York"
    },
    welcomeMessage: "Welcome to my second project for my Udacity Front End Web Developer Nanodegree.",
    bioPic: "images/eleni.jpg",
    skills: ["Online Advertising", "HTML CSS", "Javascript", "DoubleClick", "Sizmek", "Programmatic", "Excel"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var HTMLcontacts = formattedEmail + formattedTwitter + formattedGithub;
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedbioPic);
    $("#header").append(formattedMessage);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $('#footerContacts').append(formattedMobile);
};

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = '';
    var $skillList = $("#skills");

    bio.skills.forEach(function(skill) {
        formattedSkill = HTMLskills.replace("%data%", skill);
        $skillList.append(formattedSkill);
    });
}

bio.display();

var education = {
    school: {
        name: "New York University",
        location: "New York, NY",
        degree: "Bachelor of the Arts",
        major: "Psychology with a focus on learning and conditioning",
        date: "1997"
    }
}

education.display = function() {
    var formattedName = HTMLschoolName.replace("%data%", education.school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.school.degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.school.major);
    var formattedDate = HTMLschoolDates.replace("%data%", education.school.date);
    var formattedSchoolHeader = formattedName + formattedDegree + formattedDate;
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolHeader);
    $(".education-entry:last").append(formattedMajor);
};

education.display();

var work = {
    jobs: [{
        employer: "LiveIntent",
        title: "Billing Manager",
        dates: "October 2013 - Present",
        description: "A founding member of the startup's Accounting team. ERP selection team member. Troubleshooting of implementation. Costing research. Project research. Lessons learned. Work in NetSuite, QuickBooks, Excel (pivot tables, v-lookup and more) plus MySQL."
    }, {
        employer: "MediaMind",
        title: "Billing Specialist",
        dates: "July 2012 - October 2013",
        description: "Issued monthly invoices for US company through SAP. Provided ad hoc reports to sales and clients. Worked in Qlikview. Daily use of Excel pivot tables and v-lookup. Coordinated with R&D to continually improve platform billing process. Knowledge retention of new products and their relation to invoicing."
    }]
};

work.display = function() {
    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var projects = {
    projects: [{
        title: "Project One: My Online Resume",
        dates: "2015",
        description: "The very resume you are reading here."
    }, {
        title: "Project Two: Frogger Game",
        dates: "2016",
        description: "."
    }]
};

projects.display = function() {
    for (project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
    }
};

projects.display();