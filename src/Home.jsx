import './Home3.css'
function Home3() {
    return (
        <div>
            <div className="main11">
                <div className='background111'>
                    <div className="grid">
                        <div className="first_div11">
                            <div className="first_div11_column">
                                <h2>WELCOME TO <span style={{ color: '#00754A' }}>Himalaya</span></h2>
                                <p >Lowest Price Guaranteed</p>
                                <button>Call Now! +7807021868</button>
                            </div>
                        </div>
                        <div className="second_div22">
                            <div className="second_div22_column">
                                <p>GET FREE QUOTE</p>
                                <input type='text' placeholder="Name" />
                                <input type='email' placeholder="Email" />
                                <input type='number' placeholder="phone" />
                                <select>
                                    <option>mukesh</option>
                                    <option>aakash</option>
                                </select>
                                <select>
                                    <option>satish</option>
                                    <option>umed</option>
                                </select>
                                <button>Send Enquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home3