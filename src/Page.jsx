import img1 from "../src/images/127.png"
import img2 from "../src/images/128.png"
import img3 from "../src/images/129.png"
import img4 from "../src/images/130.png"
import './Pagge.css'

function Page() {
    return (
        <div>
            <div className="main1">
                <div className="main_size">
                    <div>
                        <h2>Why The Smart Traveller</h2>
                    </div>

                    <div className="main_box">
                        <div className="one">
                            <img src={img1} />
                            <h4>Fully Personalised</h4>
                            <p>Get hour-by-hour itinerary based
                                on your interests & budget</p>
                        </div>
                        <div className="one">
                            <img src={img2} />
                            <h4>Fast & Free</h4>
                            <p>No more google searches to find
                                the best deals,plan it for free</p>
                        </div>
                        <div className="one">
                            <img src={img3} />
                            <h4>Save Extra</h4>
                            <p>Choose from the most affordable
                                stays,activities and transport</p>
                        </div>
                        <div className="one">
                            <img src={img4} />
                            <h4>Easy to Customise</h4>
                            <p>Shape the itinerary with your personal touch & manage all
                                your bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page