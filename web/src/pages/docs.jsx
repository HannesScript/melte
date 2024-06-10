import { Link } from "react-router-dom";

function Docs() {
    return (
        <>
            <main className="bg-gray-800 pb-32 pt-16">
                <h2 className="text-center">Docs</h2>
                {/* Navigation */}
                <div className="bg-gray-900">
                    <hr />
                    <nav className="flex flex-row gap-4 p-8">
                        <Link className="text-white line-none" melte-hover="text-blue-300" to={'#import'}>Import Melte</Link>
                        <Link className="text-white line-none" melte-hover="text-blue-300" to={'#attr'}>Attributes</Link>
                        <Link className="text-white line-none" melte-hover="text-blue-300" to={'#bg'}>Backgrounds</Link>
                        <Link className="text-white line-none" melte-hover="text-blue-300" to={'#text-clrs'}>Text Colors</Link>
                        {/* <Link  className="text-white line-none" melte-hover="text-blue-300" to={'#'}>What?</Link> */}
                    </nav>
                    <hr />
                </div>
                <div className="flex flex-col gap-8 text-center justify-center align-center">
                    <div id="import">
                        <h3>Import Melte</h3>
                        <p>Just add the following code to the &lt;head&gt; tag: </p>
                        <h4>Full Melte (recommended):</h4>
                        <pre>
                            <code>
                                &lt;!-- Melte --&gt; <br />
                                &lt;script src="https://cdn.jsdelivr.net/npm/melte@2/src/js/melting-jquery.min.js"&gt;&lt;/script&gt; <br />
                                &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/base.css" /&gt; <br />
                                &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/utility.css" /&gt; <br />
                                &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/fx.css" /&gt; <br />
                                &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/components/carousel.css" /&gt; <br />
                                &lt;script src="https://cdn.jsdelivr.net/npm/melte@2/src/js/attr.js"&gt;&lt;/script&gt; <br />
                                &lt;script src="https://cdn.jsdelivr.net/npm/melte@2/src/js/carousel.js"&gt;&lt;/script&gt; <br />
                            </code>
                        </pre>
                        <h4>Slim Melte (no carousels, no Melting jQuery and no FX, just the base, the utility classes and the attributes to make life easier)</h4>
                        <pre>
                            <code>
                                &lt;!-- Melte --&gt; <br />
                                &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/base.css" /&gt; <br />
                                &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/utility.css" /&gt; <br />
                                &lt;script src="https://cdn.jsdelivr.net/npm/melte@2/src/js/attr.js"&gt;&lt;/script&gt; <br />
                            </code>
                        </pre>
                        <details melte-hover="pointer">
                            <summary>Versions</summary>
                            <h3>Version ranges:</h3>
                            <p>2.x: <pre>
                                <code>
                                    &lt;!-- Melte --&gt; <br />
                                    &lt;script src="https://cdn.jsdelivr.net/npm/melte@2/src/js/melting-jquery.min.js"&gt;&lt;/script&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/base.css" /&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/utility.css" /&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@2/src/css/fx.css" /&gt; <br />
                                    &lt;script src="https://cdn.jsdelivr.net/npm/melte@2/src/js/attr.js"&gt;&lt;/script&gt; <br />
                                </code>
                            </pre></p>
                            <p>1.x: <pre>
                                <code>
                                    &lt;!-- Melte --&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@1/src/css/base.css" /&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@1/src/css/utility.css" /&gt; <br />
                                    &lt;script src="https://cdn.jsdelivr.net/npm/melte@1/src/js/attr.js"&gt;&lt;/script&gt; <br />
                                </code>
                            </pre></p>

                            <h3>Specific versions:</h3>
                            <p>1.6: <pre>
                                <code>
                                    &lt;!-- Melte --&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@1.6/src/css/base.css" /&gt; <br />
                                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/melte@1.6/src/css/utility.css" /&gt; <br />
                                    &lt;script src="https://cdn.jsdelivr.net/npm/melte@1.6/src/js/attr.js"&gt;&lt;/script&gt; <br />
                                </code>
                            </pre></p>
                        </details>
                    </div>
                    <div id="attr">
                        <h3>Attributes</h3>
                        <p>
                            With the Melte attributes you can build fast and easy websites. <br />
                            All the attributes you can give elements are melte-hover, melte-clicked and melte-focus.
                        </p>
                        <h3>Example:</h3>
                        <pre>
                            <button className="bg-blue-500" melte-hover="bg-blue-800">Hover me and I will get darker!</button>: <br />
                            <code lang="html">
                                &lt;button class=&#34;bg-blue-500&#34; melte-hover=&#34;bg-blue-800&#34;&gt;Hover me and I will get darker!&lt;/button&gt;
                            </code><br />
                            <br />
                            <button className="bg-blue-500" melte-clicked="bg-blue-800">Click me and I will get darker!</button>: <br />
                            <code lang="html">
                                &lt;button class=&#34;bg-blue-500&#34; melte-clicked=&#34;bg-blue-800&#34;&gt;Click me and I will get darker!&lt;/button&gt;
                            </code><br />
                            <br />
                            <button className="bg-blue-500" melte-focus="bg-blue-800">Focus me and I will get darker!</button>: <br />
                            <code lang="html">
                                &lt;button class=&#34;bg-blue-500&#34; melte-focus=&#34;bg-blue-800&#34;&gt;Focus me and I will get darker!&lt;/button&gt;
                            </code>
                        </pre>
                        <h4 className="text-orange-700">Note: This works on every element not only on buttons!</h4>
                    </div>
                    <div id="bg">
                        <h3>Backgrounds</h3>
                        <p>With the bg classes from Melte you can colorize your websites in seconds, <br />
                            just add &#34;bg-color-strength&#34; to the classes of the element!</p>
                        <h3>Example:</h3>
                        <div className="bg-red-500">
                            <p>The class for this is bg-red-500</p>
                        </div>
                        <div className="bg-blue-700">
                            <p>This also works with bg-blue-700</p>
                        </div>
                        <div className="bg-gray-600">
                            <p>Or with bg-gray-600</p>
                        </div>
                        <h3>Colors:</h3>
                        <ul className="list-dash">
                            <li>White</li>
                            <li>Black</li>
                            <li>Red</li>
                            <li>Blue</li>
                            <li>Green</li>
                            <li>Orange</li>
                            <li>Gray/Grey</li>
                            <li>Yellow</li>
                            <li>Purple/Violet</li>
                        </ul>
                        <h4>Note: When you want a transparent background, then you can add the class &#34;bg-none&#34;</h4>
                    </div>
                    <div id="text-clrs">
                        <h3>Text Colors</h3>
                        <p>With the text classes from Melte you can colorize the text in your websites in seconds, <br />
                            just add &#34;text-color-strength&#34; to the classes of the element!</p>
                        <h3>Example:</h3>
                            <p className="text-red-500">The class for this is text-red-500</p>
                            <p className="text-purple-700">This also works with text-purple-700</p>
                            <p className="text-green-600">Or with text-green-600</p>
                        <h3>Colors:</h3>
                        <ul className="list-dash">
                            <li>White</li>
                            <li>Black</li>
                            <li>Red</li>
                            <li>Blue</li>
                            <li>Green</li>
                            <li>Orange</li>
                            <li>Gray/Grey</li>
                            <li>Yellow</li>
                            <li>Purple/Violet</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Docs;