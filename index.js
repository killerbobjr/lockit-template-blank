var	EmailTemplates = require('swig-email-templates'),
	templates = new EmailTemplates();

module.exports = function(options, next)
{
	if(!options.template)
	{
		options.path = __dirname + '/';
		options.template = 'index.html';
	}

	templates.render(options.path + options.template, options, function(err, html, text)
		{
			if(err)
				return next(err);
			else
				next(undefined, html, text);
		});
};
