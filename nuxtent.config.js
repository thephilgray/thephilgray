const Prism = require('prismjs');
module.exports = {
  content: [
    [
      'projects',
      {
        page: '/projects/_slug',
        permalink: '/projects/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ],

    [
      'blog',
      {
        page: '/blog/_slug',
        permalink: '/blog/:year/:month/:day/:slug',
        isPost: true,
        generate: ['get', 'getAll']
      }
    ]
  ],
  api: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://www.thephilgray.com'
        : 'http://localhost:3000'
  },
  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(
            code,
            Prism.languages[lang] || Prism.languages.markup
          )}</code></pre>`;
        };
      }
    }
  }
};
