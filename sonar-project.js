const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://65.0.42.18:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Jenkins-NodeJS',
	    'sonar.projectKey':'Jenkins-NodeJS',
	    'sonar.login': 'sqp_689e416a26131937a7623ca25e1e76171a9a413a',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'Admin@123',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
