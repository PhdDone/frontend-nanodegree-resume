/*
This is empty on purpose! Your code to build the resume will go here.
*/

var skills = ["C++", "Python", "Perl", "Javascript", "Machine Learning", "NLP", "Machine Translation"];

var bio = {
    "name" : "Yuanzhe Dong",
    "role" : "Research Engineer@SDL Research",
    "welcomeMessage" : "Hello World!",
    "contacts" : {
        "mobile" : "310-000-000",
        "email": "yuanzhedong at gmail dot com",
        "github" : "https://github.com/",
        "twitter" : "www.twitter.com",
        "location" : "Los Angeles"
    },
    "welcomeMessage" : "Hello World",
    "skills" : skills,
    "biopic" : "images/fry.jpg"
};

bio.display = function () {
    //bio
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);

    //skill
    for (var i in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
    
    //contact
    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
    for(i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
}

var education = {
    "schools" : [
        {
            "name" : "Indiana University Bloomington",
            "location" : "Bloomington IN",
            "degree" : "Masters",
            "majors" : ["Computer Science"],
            "dates" : 2013,
            "url" : "www.iub.edu"
        },
        {
            "name" : "Beijing University of Posts and Telecommunications",
            "location" : "Beijing",
            "degree" : "BA",
            "majors" : ["Computer Science"],
            "dates" : 2011,
            "url" : "www.bupt.edu.cn"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree", 
            "school" : "Udacity",
            "date" : "Still on going",
            "url" : "https://www.udacity.com/"
        }
    ]
};

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(var i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            for(var j in education.schools[i].majors)
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}
var work = {
    "jobs": [
        {
            "employer" : "SDL Research",
            "title" : "Research Engineer",
            "dates" : "Sep. 2013 - Now",
            "description" : "Exploring and implementing new algorithms to improve Machine Translation qualities.",
            "url" : "http://www.sdl.com/cxc/research/people/",
            "location" : "Los Angeles"
        },
        {
            "employer" : "National Institute of Informatics(Tokyo)",
            "title" : "Internship",
            "dates" : "Jun. 2012 - Aug. 2012",
            "description" : "Improving Chinese Dependency Parsing by utilizing different word clustering algorithms.",
            "url" : "http://www.nii.ac.jp/",
            "location" : "Tokyo"
        }
    ]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

var projects = {
    "projects": [
        {
            "title": "APRO: All-Pairs Ranking Optimization for MT Tuning",
            "datesWorked": "September 2014 - December 2014",
            "description": "APRO is a new method for machine translation tuning that can handle large feature sets. As opposed to other popular methods(e.g., MERT, MIRA, PRO), which involve randomness and require multiple runs to obtain a reliable result, APRO gives the same result on any run, given initial feature weights.",
            "url": "http://www.aclweb.org/anthology/N15-1106"
        }
    ]
};

projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

$("#map-div").append(googleMap);
bio.display();
work.display();
projects.display();
education.display();

