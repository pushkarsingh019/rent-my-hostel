import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Hero(){
  return(
    <main className="hero">
      <h1>Find Pg's in Ahmedabad</h1>
      <br />
      <p>Rent my Hostel helps you by finding the available pgs & Hostels near Ahmedabad University.</p>
      <br />
      <br />
      <Button variant={`button cta`} link={`/home`} text="Find Pg's Near Ahmedabad University" />
    </main>
  )
}

export default function Home(){
  return(
      <>
        <Navbar />
        <Hero />
        <Footer />
      </>
  )
}