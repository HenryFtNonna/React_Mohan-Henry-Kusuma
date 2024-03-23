import NavBar from "./components/NavBar";

function HeroSection(){
  return <div>HeroSection</div>;
}

export default function App() {
  // let user = "henri";
  let warna = "hitam";
  console.log("warna = " + warna);
  let bahasa = "indonesia";

  function tampil (){
    console.log("halo");
    warna = "putih";
    console.log("warna = " + warna);
  }

  const namaAnak = ["henri","raisal","thalita"];
  return(
    <div>
      <h1>Halaman App</h1>
      <HeroSection/>
      <NavBar nama={"john"}/>


      <button onClick={tampil}>
        {bahasa == "inggris" ? "tombol" : "button"}
      </button>
      {namaAnak.map((nama) =>(
      <p>{nama}</p>
      ))}
    </div>
  );
    }



export default App;


