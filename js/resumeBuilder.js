$('#mapDiv').append(googleMap);
var bio = {
	name: 'Alexandre Maeda',
	role: 'Web Developer',
	contacts: {
		mobile: '55+ 16 9 8107-8888',
		email: 'ale.b.maeda@gmail.com',
		github: 'alexandremaeda',
		twitter: '@alexandremaeda_',
		location: 'Ribeirão Preto'
	},
	welcomeMessage: 'Welcome to my online resume.',
	skills: ['html', 'css', 'javascript'],
	biopic: 'images/alexandremaeda.jpg',
	el: {
		header: $('#header'),
		topContacts: $('#topContacts'),
		footerContacts: $('#footerContacts')
	},
	display: function(){
		this.el.header.prepend(HTMLheaderRole.replace('%data%', this.role));
		this.el.header.prepend(HTMLheaderName.replace('%data%', this.name));
		this.el.header.append(HTMLbioPic.replace('%data%', this.biopic));
		this.el.header.append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
		this.el.header.append(HTMLskillsStart);

		this.el.skills = $('#skills');
		for (var i = 0;i < this.skills.length; i++) {
			this.el.skills.append(HTMLskills.replace('%data%', this.skills[i]));
		}

		var HTMLcontacts = HTMLmobile.replace('%data%', this.contacts.mobile);
		HTMLcontacts += HTMLemail.replace('%data%', this.contacts.email);
		HTMLcontacts += HTMLgithub.replace('%data%', this.contacts.github);
		HTMLcontacts += HTMLtwitter.replace('%data%', this.contacts.twitter);
		HTMLcontacts += HTMLlocation.replace('%data%', this.contacts.location);

		this.el.topContacts.append(HTMLcontacts);
		this.el.footerContacts.append(HTMLcontacts);
	}
};

var work = {
	jobs: [
		{
			employer: 'Smarapd',
			title: 'C# Developer',
			location: 'Ribeirão Preto',
			dates: '2014 - 2015',
			description: 'lorem ipsum'
		}
	],
	el: {
		workExperience: $('#workExperience')
	},
	display: function(){
		this.el.workExperience.append(HTMLworkStart);

		this.el.workEntry = $('.work-entry');
		for (var i = 0; i < this.jobs.length; i++) {
			var HTMLjob = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
			HTMLjob += HTMLworkTitle.replace('%data%', this.jobs[i].title);
			HTMLjob += HTMLworkDates.replace('%data%', this.jobs[i].dates);
			HTMLjob += HTMLworkLocation.replace('%data%', this.jobs[i].location);
			HTMLjob += HTMLworkDescription.replace('%data%', this.jobs[i].description);
			this.el.workEntry.append(HTMLjob);
		}
	}
};

var projects = {
	projects: [
		{
			title: 'lorem ipsum',
			dates: '2016 - 2016',
			description: 'lorem ipsum',
			images: ['images/197x148.gif', 'images/197x148.gif']
		}
	],
	el: {
		projects: $('#projects'),
	},
	display: function(){
		for (var i = 0; i < this.projects.length; i++) {
			this.el.projects.append(HTMLprojectStart);
			this.el.projectEntry = $('.project-entry');

			var HTMLproject = HTMLprojectTitle.replace('%data%', this.projects[i].title);
			HTMLproject += HTMLprojectDates.replace('%data%', this.projects[i].dates);
			HTMLproject += HTMLprojectDescription.replace('%data%', this.projects[i].description);

			for (var x = 0; x < this.projects[i].images.length; x++) {
				HTMLproject += HTMLprojectImage.replace('%data%', this.projects[i].images[x]);
			}

			this.el.projectEntry.append(HTMLproject);
		}
	}
};

var education = {
	schools: [
		{
			name: 'lorem ipsum',
			location: 'lorem ipsum',
			degree: 'lorem ipsum',
			majors: ['lorem ipsum'],
			dates: 'lorem ipsum',
			url: 'lorem ipsum',
		}
	],
	onlineCourses: [
		{
			title: 'lorem ipsum',
			school: 'lorem ipsum',
			dates: 'lorem ipsum',
			url: 'lorem ipsum'
		}
	],
	el: {
		education: $('#education')
	},
	display: function(){
		for (var i = 0; i < this.schools.length; i++) {
			this.el.education.append(HTMLschoolStart);
			this.el.educationEntry = $('.education-entry').last();

			var HTMLeducation = HTMLschoolName.replace('%data%', this.schools[i].name);
			HTMLeducation += HTMLschoolDegree.replace('%data%', this.schools[i].degree);
			HTMLeducation += HTMLschoolDates.replace('%data%', this.schools[i].dates);
			HTMLeducation += HTMLschoolLocation.replace('%data%', this.schools[i].location);

			for (var x = 0; x < this.schools[i].majors.length; x++) {
				HTMLeducation += HTMLschoolMajor.replace('%data%', this.schools[i].majors[x]);
			}

			this.el.educationEntry.last().append(HTMLeducation);
		}

		this.el.education.append(HTMLonlineClasses);

		for (var i = 0; i < this.onlineCourses.length; i++) {
			this.el.education.append(HTMLschoolStart);
			this.el.educationEntry = $('.education-entry').last();

			var HTMLonlineCourses = HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
			HTMLonlineCourses += HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
			HTMLonlineCourses += HTMLonlineDates.replace('%data%', this.onlineCourses[i].dates);
			HTMLonlineCourses += HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);

			this.el.educationEntry.last().append(HTMLonlineCourses);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
