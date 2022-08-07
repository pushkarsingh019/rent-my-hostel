import hostels from "../../data/hostels"
import Navbar from "../../components/Navbar"


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
}

function HostelPage({hostelData}){
    return(
        <main>
            <Navbar />
            <h1>{hostelData.name}</h1>
        </main>
    )
};


export default HostelPage;