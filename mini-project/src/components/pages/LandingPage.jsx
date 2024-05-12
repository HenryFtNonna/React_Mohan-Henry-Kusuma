import { Link } from 'react-router-dom';
import spongebobImage from './images/spongebob.png';
import iconImage from './images/icons.gif';


export default function LandingPage() {


    return (
            <div>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-75">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://www.linkedin.com/in/mohan-henry-kusuma/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={iconImage} className="h-15" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                DUITTT
                            </span>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="masuk-signup text-white mr-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                
                                <Link to="/register">Sign Up</Link>
                            </button>
                            <button
                                type="button"
                                className="masuk-login text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                <Link to="/login">Login</Link>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        </div>
                    </div>
                </nav>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={spongebobImage} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">DUITTT 🤑🤑🤑🤑</h1>
                            <p className="py-6">DUITTT adalah sebuah website yang bertujuan untuk memudahkan pengelolaan keuangan.
                  terdapat fitur utama dari duit yaitu Dashboard untuk menampilkanapan data keuangan,
                  Tambah Data untuk menambahkan data keuangan, Rekap untuk menampilkanapan rekapitulasi keuangan,
                  dan Search untuk mencari data keuangan.</p>
                            <button className="masuk-login btn btn-success">
                            <Link to="/login">Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        
    
    )
  }