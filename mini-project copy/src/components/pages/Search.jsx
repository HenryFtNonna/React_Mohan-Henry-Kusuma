import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://660faf72356b87a55c520ca4.mockapi.io/DataTabel');
            const fetchedData = response.data;
            setData(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  
    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };

   
    const filteredData = data.filter((item) =>
        item.tanggal.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.jenis.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.kategori.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.jumlah.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="overflow-x-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchKeyword}
                            onChange={handleSearchChange}
                            className="border rounded px-2 py-1 my-4"
                        />
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tanggal
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Jenis
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Kategori
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Jumlah
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
                                {filteredData.map((item, index) => (
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
    );
}
