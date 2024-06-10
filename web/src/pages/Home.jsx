function Home() {
    return (
        <div className="content-center pt-16">
            <h1>News:</h1>
            <div melte-carousel="newsCarousel 60000">
                <div className="bg-gray-900 fx-shine p-8 text-white br-8" style={{
                    background: "linear-gradient(to bottom, #111, #151515)"
                }} melte-carousel-item="">
                    <h1>Melte 2 released!</h1>
                    <p>Melte 2 just released! Now you can build better websites with ease. <br />
                        The newly added features are great like the shine you can see on <br /> this card, carousels
                        or the other new features listed down there!</p>
                    <h3>New Features:</h3>
                    <ul className="list-dash">
                        <li>Image sizing</li>
                        <li>Image ratios</li>
                        <li>Fonts</li>
                        <li>Animations</li>
                        <li>Attributes improved</li>
                        <li>Text styling</li>
                        <li>List styling</li>
                        <li>CSS Variables</li>
                        <li>Content positioning</li>
                        <li>Carousels</li>
                        <li>Melting jQuery (A jQuery migration for Melte)</li>
                        <li>Melte FX</li>
                    </ul>
                    <h3>Other new things with Melte 2:</h3>
                    <ul className="list-dash">
                        <li>Melte is now stored on a CDN (<a href="https://www.jsdelivr.com/" target="_blank" className="text-blue-300" melte-hover="text-blue-700">jsDelivr</a>)</li>
                    </ul>
                    <div className="shine"></div>
                </div>
                {/* <div melte-carousel-item="">
                    <h1>My new thing</h1>
                </div> */}
            </div>
        </div>
    )
}

export default Home;