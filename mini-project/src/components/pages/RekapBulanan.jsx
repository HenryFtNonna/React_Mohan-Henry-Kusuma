import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RekapBulanan() {
    const apiGET = `${import.meta.env.VITE_API_GET}`;

    const [data, setData] = useState([]);
    const [totalPemasukan, setTotalPemasukan] = useState(0);
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);
    const [totalJumlah, setTotalJumlah] = useState(0);

    // Function to fetch data from API
    const fetchData = async () => {
        try {
            const response = await axios.get(apiGET);
            const fetchedData = response.data;
            setData(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to calculate totals
    const calculateTotals = () => {
        let pemasukan = 0;
        let pengeluaran = 0;

        data.forEach(item => {
            if (item.jenis === 'Pemasukan') {
                pemasukan += parseInt(item.jumlah);
            } else if (item.jenis === 'Pengeluaran') {
                pengeluaran += parseInt(item.jumlah);
            }
        });

        setTotalPemasukan(pemasukan);
        setTotalPengeluaran(pengeluaran);
        setTotalJumlah(pemasukan - pengeluaran);
    };

    // Fetch data and calculate totals when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        calculateTotals();
    }, [data]);

    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 ml-6">Rekap Bulanan</h1>
                <div className="stats mb-5">
                    <div className="stat text-green-600">
                        <div className="stat-title">Pemasukan</div>
                        <div className="stat-value">+{totalPemasukan}</div>
                    </div>
                    
                    <div className="stat text-red-600">
                        <div className="stat-title">Pengeluaran</div>
                        <div className="stat-value">-{totalPengeluaran}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Jumlah</div>
                        <div className="stat-value">{totalJumlah}</div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-300">{item.tanggal}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-300">{item.jenis}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-300">{item.kategori}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-300">Rp {item.jumlah}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
