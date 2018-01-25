webpackJsonp([0x87d2a53097a6],{379:function(n,a){n.exports={data:{markdownRemark:{id:"/home/gab/Mannequin-master/src/Drupal/docs/configuration.md absPath of file >>> MarkdownRemark",html:'<p>Mannequin configuration lives in the <code>.mannequin.php</code> at the root of your project.  You should create this file, starting from the following example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span> <span class="token comment">// .mannequin.php</span>\n\n<span class="token keyword">use</span> <span class="token package">LastCall<span class="token punctuation">\\</span>Mannequin<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>MannequinConfig</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">LastCall<span class="token punctuation">\\</span>Mannequin<span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>DrupalExtension</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Finder<span class="token punctuation">\\</span>Finder</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Describe where to find Drupal templates.</span>\n<span class="token comment">// See https://symfony.com/doc/current/components/finder.html</span>\n<span class="token variable">$drupalFinder</span> <span class="token operator">=</span> Finder<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token comment">// Templates can live in your normal templates directory.</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">in</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token punctuation">.</span><span class="token string">\'/themes/mytheme/templates\'</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">files</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">\'*.twig\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n<span class="token variable">$drupalExtension</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DrupalExtension</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token string">\'finder\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable">$drupalFinder</span><span class="token punctuation">,</span>\n    <span class="token string">\'drupal_root\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token constant">__DIR__</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">return</span> MannequinConfig<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">addExtension</span><span class="token punctuation">(</span><span class="token variable">$drupalExtension</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">setGlobalJs</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token comment">// themes/mytheme/js/theme.js  </span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">setGlobalCss</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token comment">// themes/mytheme/css/theme.css</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="drupal-configuration"><a href="#drupal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Drupal Configuration</h2>\n<p>The <code>DrupalExtension</code> is what tells Mannequin how to access your Drupal template files.  The mandatory arguments are the <code>finder</code> and the <code>drupal_root</code>, but you can pass in <code>twig_options</code> as well:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n\n<span class="token variable">$drupalExtension</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DrupalExtension</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token comment">// A Symfony Finder object.</span>\n    <span class="token string">\'finder\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable">$drupalFinder</span><span class="token punctuation">,</span>\n    <span class="token comment">// The path to your Drupal root.</span>\n    <span class="token string">\'drupal_root\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token constant">__DIR__</span><span class="token punctuation">,</span>\n    <span class="token comment">// An associative array of options to pass to the Twig environment.</span>\n    <span class="token string">\'twig_options\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n      <span class="token string">\'debug\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token boolean">true</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>For more documentation on the Finder, see the <a href="https://symfony.com/doc/current/components/finder.html">Symfony Finder documentation</a>.  For information on the <code>twig_options</code> array, see the <a href="https://twig.symfony.com/api/2.x/Twig_Environment.html#method___construct">Twig documentation</a>.</p>\n<p>The DrupalExtension also has a couple additional methods you can use.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// Register a new Twig namespace so @atoms/X.html.twig loads the template</span>\n<span class="token comment">// in themes/mytheme/patterns/atoms/X.html.twig.  If you want to use</span>\n<span class="token comment">// templates from this namespace as components, be sure to add them to your</span>\n<span class="token comment">// finder as well.</span>\n<span class="token variable">$drupalExtension</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">addTwigPath</span><span class="token punctuation">(</span><span class="token string">\'atoms\'</span><span class="token punctuation">,</span> <span class="token string">\'themes/mytheme/patterns/atoms\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Set the Drupal extensions (themes or modules) that are searched for</span>\n<span class="token comment">// extend and include statements that don\'t use a namespace.  Eg:</span>\n<span class="token comment">// {% extends \'block.html.twig\' %} looks for block.html.twig in the</span>\n<span class="token comment">// classy theme.  The default fallback extension is the Stable theme.</span>\n<span class="token variable">$drupalExtension</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">setFallbackExtensions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'classy\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="mannequin-config"><a href="#mannequin-config" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mannequin Config</h2>\n<p>The <code>MannequinConfig</code> class handles configuration for Mannequin in general (the non-Drupal parts).  The configuration has a number of methods you can use to define your setup:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n\n<span class="token variable">$config</span> <span class="token operator">=</span> MannequinConfig<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Add an extension to the Mannequin configuration:</span>\n<span class="token variable">$config</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">addExtension</span><span class="token punctuation">(</span><span class="token variable">$drupalExtension</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Set the CSS files that are used for every component.  CSS can be referenced</span>\n<span class="token comment">// using a relative path, in which case it will be looked up</span>\n<span class="token comment">// relative to your .mannequin.php, or an absolute URL.</span>\n<span class="token variable">$config</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">setGlobalCss</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token string">\'themes/mytheme/css/theme.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'http://example.com/theme.css\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Set the JS files that are used for every component.  JS can be referenced</span>\n<span class="token comment">// using a relative path, in which case it will be looked up</span>\n<span class="token comment">// relative to your .mannequin.php, or an absolute URL.</span>\n<span class="token variable">$config</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">setGlobalJs</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token string">\'themes/mytheme/js/theme.js\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'http://example.com/theme.js\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',headings:[{value:"Drupal Configuration",depth:2},{value:"Mannequin Config",depth:2}],frontmatter:{title:"Configuration",description:"Configuration for the Mannequin Drupal extension."},fields:{ghEditUrl:"https://github.com/LastCallMedia/Mannequin/edit/master/src/Drupal/docs/configuration.md",extension:"Drupal"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/extensions/drupal/",menuTitle:"Overview"},frontmatter:{title:"Drupal"},id:"/home/gab/Mannequin-master/src/Drupal/README.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/components/",menuTitle:"Components"},frontmatter:{title:"Components"},id:"/home/gab/Mannequin-master/src/Drupal/docs/components.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/expressions/",menuTitle:"Expressions"},frontmatter:{title:"Expressions"},id:"/home/gab/Mannequin-master/src/Drupal/docs/expressions.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/configuration/",menuTitle:"Configuration"},frontmatter:{title:"Configuration"},id:"/home/gab/Mannequin-master/src/Drupal/docs/configuration.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/cli/",menuTitle:"CLI"},frontmatter:{title:"CLI"},id:"/home/gab/Mannequin-master/src/Drupal/docs/cli.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/support/",menuTitle:"FAQ & Support"},frontmatter:{title:"FAQ & Support"},id:"/home/gab/Mannequin-master/src/Drupal/docs/support.md absPath of file >>> MarkdownRemark"}}]}},pathContext:{id:"/home/gab/Mannequin-master/src/Drupal/docs/configuration.md absPath of file >>> MarkdownRemark",extension:"Drupal"}}}});
//# sourceMappingURL=path---extensions-drupal-configuration-782364ae326e3659bc5f.js.map