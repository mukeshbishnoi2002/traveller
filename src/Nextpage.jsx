import './Nextpagge.css'
import backgro from "../src/images/tour.png"
import fire from "../src/images/fire.png"
function Nextpage() {
    let obj = [
        {
            id: 1,
            img: backgro,
            fire: fire,
            rupee: "Rs 3,000",
            title: "Simply Kasol",
            try: "MUST TRY!",
            timePeriod: "2 Nights, 3 Days",
            li1: "All tours and transfers by Personal AC Cais included",
            li2: "Driver's allowance, Road tax and Fuel charges",
            li3: "Meet & greet at arrival",
            li4: "Pick and Drop at time of arrival/departure",
            li5: "Sightseeing by private cab",
            li6: "Parking and Toll tax",
            li7: "5% GST",
            button: "Send Enquiry"
        },
        {
            id: 2,
            img: backgro,
            fire: fire,
            rupee: "Rs 3,000",
            title: "Simply Kasol",
            try: "MUST TRY!",
            timePeriod: "2 Nights, 3 Days",
            li1: "All tours and transfers by Personal AC Cais included",
            li2: "Driver's allowance, Road tax and Fuel charges",
            li3: "Meet & greet at arrival",
            li4: "Pick and Drop at time of arrival/departure",
            li5: "Sightseeing by private cab",
            li6: "Parking and Toll tax",
            li7: "5% GST",
            button: "Send Enquiry"
        },
        {
            id: 3,
            img: backgro,
            fire: fire,
            rupee: "Rs 3,000",
            title: "Simply Kasol",
            try: "MUST TRY!",
            timePeriod: "2 Nights, 3 Days",
            li1: "All tours and transfers by Personal AC Cais included",
            li2: "Driver's allowance, Road tax and Fuel charges",
            li3: "Meet & greet at arrival",
            li4: "Pick and Drop at time of arrival/departure",
            li5: "Sightseeing by private cab",
            li6: "Parking and Toll tax",
            li7: "5% GST",
            button: "Send Enquiry"
        },
        {
            id: 4,
            img: backgro,
            fire: fire,
            rupee: "Rs 3,000",
            title: "Simply Kasol",
            try: "MUST TRY!",
            timePeriod: "2 Nights, 3 Days",
            li1: "All tours and transfers by Personal AC Cais included",
            li2: "Driver's allowance, Road tax and Fuel charges",
            li3: "Meet & greet at arrival",
            li4: "Pick and Drop at time of arrival/departure",
            li5: "Sightseeing by private cab",
            li6: "Parking and Toll tax",
            li7: "5% GST",
            button: "Send Enquiry"
        }
    ];
    return (
        <Fragment>
            <div className="main4">
                <div className="main4-size">
                    <div>
                        <h2>Best Selling Tour Packages</h2>
                    </div>
                    <div className="grid-1">
                        {
                            obj.map((item) => {
                                return (
                                    <div className="grid-1-box" key={item.id}>
                                        <div style={{ position: "relative" }}> <img src={item.img} />
                                            <span className="rs">{item.rupee}</span></div>
                                        <div className="list-size">
                                            <h5 style={{ position: "relative" }}>{item.title}<span className="must"> <div className="size"><img src={item.fire} className="fire" /> </div>{item.try}</span></h5>
                                            <p>{item.timePeriod}</p>
                                            <ul>
                                                <li>{item.li1}</li>
                                                <li>{item.li2}</li>
                                                <li>{item.li3}</li>
                                                <li>{item.li4}</li>
                                                <li>{item.li5}</li>
                                                <li>{item.li6}</li>
                                                <li>{item.li7}</li>
                                            </ul>
                                        </div>
                                        <div className="enquiry-div"><button className="enquiry">{item.button}</button></div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Nextpage

