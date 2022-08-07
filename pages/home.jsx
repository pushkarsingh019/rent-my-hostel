import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState } from "react";
import hostels from "../data/hostels";
import HostelCard from "../components/HostelCard";

function Home(){

    const [sex, setSex] = useState("Male");
    const [distance, setDistance] = useState();
    const [sexToSearch, setSexToSearch] = useState();
    const [distanceToSearch, setDistanceToSearch] = useState();

    function searchHandler(event){
        alert("The Button was clicked");
    }

    function Search(){
        return(
            <section className="search">
                <h1>Find your next stay...</h1>
                <br />
                <p>Filter Pgs based on <b>Sex</b> and <strong>Distance From Ahmedabad University.</strong> </p>
                <br />
                <div className="select-section">
                    <select value={sex} onChange={(e) => setSex(e.target.value)} placeholder="Select Sex" name="Sex" id="">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select value={distance} onChange={(e) => setDistance(e.target.value)} name="Distance From University" id="">
                        <option value="Within 1 Kms">Within 2 kms</option>
                        <option value="Within 3 kms">Within  3 Kms</option>                        
                        <option value="Within 5 kms">Within  5 Kms</option>
                        <option value="All">All</option>                        
                    </select>
                    <Button onClick={() => searchHandler()} text={`Search`} link={`/home`} variant="search-button" />
                </div>
            </section>
        )
    };

    function Find(){
        return(
            <section className="find">
                <h1>Pgs For {sex} {distance}</h1>
            </section>
        )
    };

    function Hostels(){
        return(
            <section className="hostels">
                {hostels.map((hostel) => {
                    return(
                        <div key={hostel.id} className="hostel-card">
                        <HostelCard key={hostel.id} name={hostel.name} address={hostel.address} rating={hostel.rating} review={hostel.review} distanceFromUniversity={hostel.distanceFromUniversity} id={hostel.id} price={hostel.pricing[0].price} />
                        </div>
                    )
                })}
            </section>
        )
    }


    return(
        <main>
            <Navbar />
            <Search />
            <Find />
            <Hostels />
            <Footer />
        </main>
    )
};

export default Home;