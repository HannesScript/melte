import { Link } from "react-router-dom";

function Docs(props) {
    return (
        <>
            <h2 className="text-center">Docs</h2>
            <main className="bg-gray-900 pb-32">
                {/* Navigation */}
                <nav className="flex flex-row gap-4 bg-grey-700 p-8">
                    <Link className="text-white line-none" melte-hover="text-blue-300" to={'#import'}>Import Melte</Link>
                    <Link className="text-white line-none" melte-hover="text-blue-300" to={'#attr'}>Attributes</Link>
                    {/* <Link  className="text-white line-none" melte-hover="text-blue-300" to={'#'}>What?</Link> */}
                </nav>
                <div className="flex flex-col gap-8 text-center justify-center align-center">
                    <div id="import">
                        <h3>Import Melte</h3>
                        <p>Just add the following code to the &lt;head&gt; tag: </p>
                        <pre>
                            <code>
                                &lt;link defer rel="stylesheet" href="https://hannesscript.dev/software/melte/src/css/base.css" /&gt; <br />
                                &lt;link defer rel="stylesheet" href="https://hannesscript.dev/software/melte/src/css/utility.css" /&gt; <br />
                                &lt;script defer src="https://hannesscript.dev/software/melte/src/js/attr.js"&gt;&lt;/script&gt; <br />
                            </code>
                        </pre>
                    </div>
                    <div id="attr">
                        <h3>Attributes</h3>
                        <p>
                            With the Melte attributes you can build fast and easy websites. <br />
                            All the attributes you can give elements are melte-hover, melte-clicked and melte-focus.
                        </p>
                        <div className="bg-red-800 p-8 pl-32 pr-32 br-4">
                            <h1>Note!</h1>
                            <h2 className="flex align-center">
                                You can't change&nbsp;<span className="text-gray-300">bg</span>&nbsp;with the current version of Melte!&nbsp;
                                <span className="text-size-lg text-gray-300">(I will fix it soon...)</span>
                            </h2>
                            <h4>
                                For example: <span className="text-blue-500">&lt;element&nbsp;
                                    <span className="text-yellow-600">class="bg-blue-500" melte-hover="bg-red-500"</span>&gt;
                                    <span className="text-gray-200">Content</span>
                                    &lt;/element&gt;</span>
                                &nbsp;<span className="text-green-600">&lt;!-- Won't work! --&gt;</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Docs;