// The aim of this page is to adapt the Portfolio to the jQuery approach used in Project 2

// Cariable Declaration
	//	JSON

var projects ={
	'project':[{
		'type': 'productive',
		'name': 'About Me',
		'image':'guillaume_project1',
		'imageAlt': imageAlt1,
		'projectDescription': project_Description1,
		'projectSlogan': 'A perfect start',
		'projectBrief': 'Actually the pre-project of FEND',
		'url': 'https://github.com/guillaumesimler/nanofep0' 
	},
	{
		'type': 'productive',
		'name': 'The Portfolio Project',
		'image':'guillaume_project2',
		'imageAlt': imageAlt2,
		'projectDescription': project_Description2,
		'projectSlogan': 'The beginning of serious things !!!',
		'projectBrief': 'Well it&#39; me!! (if you access the site via the web)',
		'url': 'https://github.com/guillaumesimler/nanofep1' 		
	},
	{
		'type': 'future',
		'name': 'The "Bib" project',
		'image':'guillaume_project3',
		'imageAlt': imageAlt3,
		'projectDescription': project_Description3,
		'projectSlogan': 'An awsome pro-bono project which will follow me in my Nanodegrees !!',
		'projectBrief': 'A website for my hometown&#39;s public library',
		'url': ''	
	},
	{
		'type': 'future',
		'name': 'Code name "Vulcan"',
		'image':'guillaume_project4',
		'imageAlt': imageAlt4,
		'projectDescription': project_Description4,
		'projectSlogan': '!!! Top secret !!!',
		'projectBrief': 'A start-up project',
		'url': ''	
	}
	]
};



	// Project description: they are put as seperate variables in order to avoid overburdening the  JSON
		// Project 1
var imageAlt1 = 'View from a hill top in the Zittauer Gebirge near Ceska Lipa (CZ)'
var project_description1 = '<p>This is the current pre-project of FEND. It is a great way to start. It grants you a fast confidence in HTML. It is neither too difficult nor too easy.</p>'
		//Project 2
var imageAlt2 = 'View over the Baronnies in the South of France'
var project_description2 = '<p><em>Madamina, il catalogo è questo [...] In Iatlia seicento e quaranta, In Lamagna duecento e trentuna, Cento in Francia, in Turchia novantuna, Ma in Ispagna son già mille e tre.</em></p><br><p>I would be happy to have as many project as Don Giovanni had lovers.</p><br><p>The project was a great dive into HTML and CSS, especially in responsive design. We learned a lot, we tried a lot (look at the amounts of commits)</p>'
		//Project 3
var imageAlt3 = 'Somewhere on the Kungsleden, the King&#39;s way, in North Sweden'
var project_description3 = '<p>Bib is the short form of <em>bibliothèque</em> or library in French and there is a great one in Uchaux (FR).</p><br><p>It is managed by an incredible group of young seniors who will rob you all your predjudice about grey hairs. And they need a website, but not just a website</p><br><p>They need the classic information blog-like website, with a booking option for their awsome events, a view of their catalogue, accounts for their users.</p><br><p>Everything will need to be easy to maintain and to be modular as these ladies are pushing for a Fablab !!! And I am willing to give them my share of support</p>'
		//Project 3
var imageAlt4 = 'The Italian transalpine path, GTA, near the French border'
var project_description4 = '<p>Well I can&#39;t tell you much here. Otherwise <em>I would need to kill you</em>. And this would not only be unethical but also uneconomical.</p><br><p>It will deal with big data, machine learning and an old industry</p>'



