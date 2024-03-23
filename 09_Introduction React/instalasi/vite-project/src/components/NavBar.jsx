export default function NavBar(props){


return (
    <div>
    props dari App.js = {props.nama}
    {props.nama === "john" && <h1>Hai Kamu Admin</h1>}
    <div>anak dari parent utama</div>

    </div>
);

}

