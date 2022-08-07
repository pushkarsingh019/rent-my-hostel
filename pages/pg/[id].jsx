import hostels from "../../data/hostels"
import Navbar from "../../components/Navbar";
import Image from "next/image";

import hostelBuilding from "../../public/hostelBuilding.jpeg";

import { Carousel } from "react-responsive-carousel"


export function getStaticPaths(){
    const paths = hostels.map((hostel) => {
        return {
            params : {id : hostel.id.toString()}
        }
    })

    return {
        paths,
        fallback : false
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const hostel = hostels.find((hostel) => hostel.id == id);
    return {
        props : {hostelData : hostel}
    }
};

// components

function CarouselSection(){
    return(
        <Carousel axis="horizontal">
            <div>
                <Image src={hostelBuilding} alt={`image`} />
                <p className="legend">3 Sharing</p>
            </div>
        </Carousel>
    )
};

function DetailsSection({hostelData}){
    return(
        <div className="hostel-main-grid">
            <div className="details">
                <h1>{hostelData.name}</h1>
                <div className="address-distance-section">
                    <p>{hostelData.address}</p>
                    <p>{hostelData.distanceFromUniversity}</p>
                </div>
                <div className="features-section">
                    <h2>What this Place Offers</h2>
                    <div  className="features">
                        {hostelData.features.map((feature) => {
                            return(
                                feature.available === true ? <span>{feature.featureName}</span> : null
                            )
                        })}
                    </div>
                </div>
                <div className="actions-section">
                    <button>Show All Ameneties</button>
                    <button>YouTube Video</button>
                </div>
            </div>
            <div className="pricing-section">
                <h2>Pricing</h2>
            </div>
        </div>
    )
}

function HostelPage({hostelData}){
    return(
        <main>
            <Navbar />
            <DetailsSection hostelData={hostelData} />
        </main>
    )
};


export default HostelPage;