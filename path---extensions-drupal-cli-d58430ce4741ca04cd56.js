webpackJsonp([0x89f5fe66954d],{397:function(e,n){e.exports={data:{markdownRemark:{id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/cli.md absPath of file >>> MarkdownRemark",html:'<p>Mannequin is primarily a command line application.  A full, current list of options and commands can be obtained for your installation by running Mannequin with no additional command.  Individual commands can be further inspected using <code class="language-text">vendor/bin/mannequin help COMMAND</code>, where <code class="language-text">COMMAND</code> is the name of the command you want more information on.</p>\n<h2 id="global-options"><a href="#global-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global Options</h2>\n<p><code class="language-text">--config</code>, <code class="language-text">-c</code> (.mannequin.php): Specify an alternative config file.  Defaults to .mannequin.php.</p>\n<p><code class="language-text">--debug</code>, <code class="language-text">-d</code> (false): Causes exceptions to be shown in the browser when visiting a page that throws an error.</p>\n<p><code class="language-text">-v</code>: Trigger verbose mode to increase the amount of output that is displayed.  This can be useful to help debug issues.  Verbosity can be increased by using the <code class="language-text">-vv</code> or <code class="language-text">-vvv</code> flags.</p>\n<h2 id="commands"><a href="#commands" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Commands</h2>\n<h3 id="start"><a href="#start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>start</h3>\n<p><strong>Start a development server to view components in the browser.</strong>  After the command, you can optionally specify an IP and port to bind to.</p>\n<p><strong>Examples</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Start a development server on 0.0.0.0:8000</span>\n<span class="token operator">></span> vendor/bin/mannequin start\n<span class="token comment"># Start a development server on 127.0.0.1:8001</span>\n<span class="token operator">></span> vendor/bin/mannequin start 127.0.0.1:8001</code></pre>\n      </div>\n<h3 id="snapshot"><a href="#snapshot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>snapshot</h3>\n<p><strong>Capture all known components in static HTML format and save to a directory.</strong></p>\n<p><strong>Options:</strong></p>\n<p><code class="language-text">--output</code>, <code class="language-text">-o</code>: The directory to save the static output into.  Defaults to <code class="language-text">./mannequin</code>.</p>\n<p><strong>Examples</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Snapshot into ./mannequin.</span>\n<span class="token operator">></span> vendor/bin/mannequin snapshot\n<span class="token comment"># Snapshot into /tmp/static</span>\n<span class="token operator">></span> vendor/bin/mannequin snapshot --output<span class="token operator">=</span>/tmp/static</code></pre>\n      </div>\n<h3 id="debug"><a href="#debug" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>debug</h3>\n<p><strong>Output a YAML manifest of your components.</strong> This command can be useful to get a high level view of all of your components at once, or to include in bug reports.</p>\n<p><strong>Examples</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token operator">></span> vendor/bin/mannequin debug</code></pre>\n      </div>',headings:[{value:"Global Options",depth:2},{value:"Commands",depth:2},{value:"start",depth:3},{value:"snapshot",depth:3},{value:"debug",depth:3}],frontmatter:{title:"CLI",description:"How to run Mannequin from the command line."},fields:{ghEditUrl:"https://github.com/LastCallMedia/Mannequin/edit/master/src/Drupal/docs/cli.md",extension:"Drupal"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/extensions/drupal/",menuTitle:"Overview"},frontmatter:{title:"Drupal"},id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/README.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/components/",menuTitle:"Components"},frontmatter:{title:"Components"},id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/components.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/configuration/",menuTitle:"Configuration"},frontmatter:{title:"Configuration"},id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/configuration.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/expressions/",menuTitle:"Expressions"},frontmatter:{title:"Expressions"},id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/expressions.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/cli/",menuTitle:"CLI"},frontmatter:{title:"CLI"},id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/cli.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/support/",menuTitle:"FAQ & Support"},frontmatter:{title:"FAQ & Support"},id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/support.md absPath of file >>> MarkdownRemark"}}]}},pathContext:{id:"/home/gab/rigoblock-mannequin-sources/src/Drupal/docs/cli.md absPath of file >>> MarkdownRemark",extension:"Drupal"}}}});
//# sourceMappingURL=path---extensions-drupal-cli-d58430ce4741ca04cd56.js.map