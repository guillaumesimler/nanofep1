// The aim of this page is to adapt the Portfolio to the jQuery approach used in Project 2

// Cariable Declaration
	// Project description: they are put as seperate variables in order to avoid overburdening the  JSON
		// Project 1
var imageAlt1 = 'View from a hill top in the Zittauer Gebirge near Ceska Lipa (CZ)';
var projectDescription1 = '<p>This is the current pre-project of FEND. It is a great way to start. It grants you a fast confidence in HTML. It is neither too difficult nor too easy.</p>'
		//Project 2
var imageAlt2 = 'View over the Baronnies in the South of France';
var projectDescription2 = '<p><em>Madamina, il catalogo è questo [...] In Iatlia seicento e quaranta, In Lamagna duecento e trentuna, Cento in Francia, in Turchia novantuna, Ma in Ispagna son già mille e tre.</em></p><br><p>I would be happy to have as many project as Don Giovanni had lovers.</p><br><p>The project was a great dive into HTML and CSS, especially in responsive design. We learned a lot, we tried a lot (look at the amounts of commits)</p>';
		//Project 3
var imageAlt3 = 'Somewhere on the Kungsleden, the King&#39;s way, in North Sweden';
var projectDescription3 = '<p>Bib is the short form of <em>bibliothèque</em> or library in French and there is a great one in Uchaux (FR).</p><br><p>It is managed by an incredible group of young seniors who will rob you all your predjudice about grey hairs. And they need a website, but not just a website</p><br><p>They need the classic information blog-like website, with a booking option for their awsome events, a view of their catalogue, accounts for their users.</p><br><p>Everything will need to be easy to maintain and to be modular as these ladies are pushing for a Fablab !!! And I am willing to give them my share of support</p>';
		//Project 4
var imageAlt4 = 'The Italian transalpine path, GTA, near the French border';
var projectDescription4 = '<p>Well I can&#39;t tell you much here. Otherwise <em>I would need to kill you</em>. And this would not only be unethical but also uneconomical.</p><br><p>It will deal with big data, machine learning and an old industry</p>';

		//Project 5
var imageAlt5 = 'View on the summit of Beinn Challum near Tydrum (UK)';
var projectDescription5 = '<p>It is more than a resume. It was a good introduction to Javascript, to API -via the project- and to JQuery</p>';



	//	JSON

var projects ={
	'projects':[{
		'type': 'productive',
		'name': 'About Me',
		'image':'guillaume_project1',
		'imageAlt': imageAlt1,
		'description': projectDescription1,
		'slogan': 'A perfect start',
		'caption': 'Actually the pre-project of FEND',
		'url': 'https://github.com/guillaumesimler/nanofep0' 
	},
	{
		'type': 'productive',
		'name': 'The Portfolio Project',
		'image':'guillaume_project2',
		'imageAlt': imageAlt2,
		'description': projectDescription2,
		'slogan': 'The beginning of serious things !!!',
		'caption': 'Well it&#39;s me!! (if you access the site via the web)',
		'url': 'https://github.com/guillaumesimler/nanofep1' 		
	},
	{
		'type': 'future',
		'name': 'The "Bib" project',
		'image':'guillaume_project3',
		'imageAlt': imageAlt3,
		'description': projectDescription3,
		'slogan': 'An awsome pro-bono project which will follow me in my Nanodegrees !!',
		'caption': 'A website for my hometown&#39;s public library',
		'url': ''	
	},
	{
		'type': 'future',
		'name': 'Code name "Vulcan"',
		'image':'guillaume_project4',
		'imageAlt': imageAlt4,
		'description': projectDescription4,
		'slogan': '!!! Top secret !!!',
		'caption': 'A start-up project',
		'url': ''	
	},

	{
		'type': 'productive',
		'name': 'Resume',
		'image':'guillaume_project5',
		'imageAlt': imageAlt5,
		'description': projectDescription5,
		'slogan': 'After Xing, after LinkedIn, mine!!',
		'caption': 'Let&#39;s connect !',
		'url': 'https://github.com/guillaumesimler/nanofep2'
	}
	]
};





	//Builder

projects.modalBuilder = function() {
	var index = 1;

	projects.projects.forEach(function(project){
		var data = '%data%';
			
		var formatedmodalBody= HTMLmodalBody.replace(/%index%/g, index);
		formatedmodalBody = formatedmodalBody.replace(data, project.name);

		var formatedmodalImage = HTMLmodalImage.replace(/%data%/g, project.image);
		formatedmodalImage = formatedmodalImage.replace('%alt%', project.imageAlt);
		var formatedmodalDescription = project.description;
		var formatedmodalSlogan = HTMLmodalSlogan.replace(data, project.slogan);

		var target = '#target' + index;

		$(formatedmodalBody).insertBefore($('#main-html'));
		$(target).append(formatedmodalImage);

		$(target).append(formatedmodalDescription);
		$(target).append(formatedmodalSlogan);

		index +=1;

		// Alt needs to be filled

	})
};


projects.mainBuilder = function() {
	var index =1;
	var data = '%data%'
	var futureLength = projects.counter('future');
	var currentLength = projects.counter('productive');

	projects.projects.forEach(function(project){
			//check which section to use depending on the project type
		if (project.type === 'productive'){
				var section = $('#current_projects').next();
				var sizexs = 12 / Math.min(currentLength,2);
				var sizemd = 12 / currentLength;

		} else{
			var section = $('#future_projects').next();
			var sizexs = 12 / Math.min(futureLength,2);
			var sizemd = 12 / futureLength;
		};

			//format and appends the variables
		var formatedmainArticle=HTMLmainArticle.replace('%index%', index);
		var formatedmainArticle=formatedmainArticle.replace('%size%', sizexs);
		var formatedmainArticle=formatedmainArticle.replace('%size%', sizemd);
		var formatedmainImage=HTMLmainImage.replace(/%index%/g, index);
		formatedmainImage = formatedmainImage.replace(/%data%/g, project.image);
		formatedmainImage = formatedmainImage.replace('%alt%', project.imageAlt);

		var formatedmainTitle = HTMLmainTitle.replace(data, project.name);
		var formatedmainCaption = HTMLmainCaption.replace(data, project.caption);
		var formatedmainUrl = HTMLmainUrl.replace(/%data%/g, project.url);

		section.append(formatedmainArticle);

		target = section.find('#project-'+index);
		target.append(formatedmainImage);
		target.append(formatedmainTitle)
		target.append(formatedmainCaption);
		
		if (project.type === 'productive'){
				target.append(formatedmainUrl);
		}
			//move to the next item
		index +=1;
	}) ;
};

projects.counter = function(_counted) {
	var _output = 0;

	projects.projects.forEach(function(project) {

		if (project.type === _counted){
			_output +=1; 
		};
		
	});
	return _output; 
};



	// Run

projects.modalBuilder();
projects.mainBuilder();