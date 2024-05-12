import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
//     const apiGET = `${import.meta.env.VITE_API_GET}`;
//     const apiPUT = `${import.meta.env.VITE_API_PUT}`;
//     const apiPOST = `${import.meta.env.VITE_API_POST}`;
//     const apiDELETE = `${import.meta.env.VITE_API_DELETE}`;

    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        tanggal: '',
        jenis: '',
        kategori: '',
        jumlah: ''
       
    });
    const [editIndex, setEditIndex] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);



    // Function to fetch data from API
const fetchData = async () => {
    try {
        const response = await axios.get('https://660faf72356b87a55c520ca4.mockapi.io/DataTabel'); // Perbaiki disini
        const fetchedData = response.data;
        setData(fetchedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

    // Function to handle form data change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to add or edit data
    const handleAddData = async () => {
        try {
            // Validasi form
            if (!formData.tanggal || !formData.jenis || !formData.kategori || !formData.jumlah) {
                alert('Silahkan lengkapi semua kolom!');
                return;
            }
    
            if (editIndex !== null) {
                await axios.put(`https://660faf72356b87a55c520ca4.mockapi.io/DataTabel/${formData.id}`, formData);
                const newData = [...data];
                newData[editIndex] = { ...formData };
                setData(newData);
                setEditIndex(null);
            } else {
                const response = await axios.post('https://660faf72356b87a55c520ca4.mockapi.io/DataTabel', formData);
                const newData = response.data;
                setData([...data, newData]);
            }
            setFormData({
                id: null,
                tanggal: '',
                jenis: '',
                kategori: '',
                jumlah: ''
            });
            document.getElementById('my_modal_2').close();
        } catch (error) {
            console.error('Error adding/editing data:', error);
        }
    };
    

    // Function to handle edit
    const handleEdit = (index) => {
        const selectedData = data[index];
        setFormData({ ...selectedData });
        setEditIndex(index);
        document.getElementById('my_modal_2').showModal();
    };

    // Function to handle delete
// Function to handle delete// Function to handle delete
const handleDelete = (index) => {
    const selectedData = data[index];
    setDeleteIndex(index);
    // Simpan ID data yang akan dihapus dalam state formData
    setFormData({ ...formData, id: selectedData.id });
    document.getElementById('delete_modal').showModal();
};

// Function to confirm delete
const confirmDelete = async () => {
    try {
        // Gunakan formData.id untuk menghapus data
        await axios.delete(`https://660faf72356b87a55c520ca4.mockapi.io/DataTabel/${formData.id}`);
        const newData = [...data];
        newData.splice(deleteIndex, 1);
        setData(newData);
        setDeleteIndex(null);
        // Reset formData.id setelah penghapusan berhasil
        setFormData({ ...formData, id: null });
        document.getElementById('delete_modal').close();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
};
    // Fetch data when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 ml-6">Tambah Data</h1>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.tanggal}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.jenis}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.kategori}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Rp {item.jumlah}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="btn btn-sm btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="btn absolute right-4 top-4 " onClick={() => document.getElementById('my_modal_2').showModal()}>Tambah Data</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">{editIndex !== null ? 'Edit Data' : 'Tambah Data'}</h3>
                        <div className="modal-content container mx-auto p-3">
                            <input
                                type="date"
                                name="tanggal"
                                value={formData.tanggal}
                                onChange={handleChange}
                                className="input input-bordered mb-2"
                            /> <br />
                            <select
                                name="jenis"
                                value={formData.jenis}
                                onChange={handleChange}
                                className="select select-bordered mb-2"
                            >
                                <option value="">Pilih Jenis</option>
                                <option value="Pemasukan">Pemasukan</option>
                                <option value="Pengeluaran">Pengeluaran</option>
                            </select><br />
                            <input
                                type="text"
                                name="kategori"
                                value={formData.kategori}
                                onChange={handleChange}
                                placeholder="Masukkan Kategori"
                                className="input input-bordered mb-2"
                            /> <br />
                            <input
                                type="number"
                                name="jumlah"
                                value={formData.jumlah}
                                onChange={handleChange}
                                placeholder="Jumlah"
                                className="input input-bordered mb-2"
                            /> <br />
                            <div className="modal-action">
                                <button className="btn" onClick={handleAddData}>{editIndex !== null ? 'Simpan' : 'Tambah'}</button>
                            </div>
                        </div>
                    </div>
                </dialog>
                <dialog id="delete_modal" className="modal">
    <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Konfirmasi Hapus</h3>
        <div className="modal-content">
            <p>Apakah Anda yakin ingin menghapus data?</p>
            <div className="modal-action">
                <button className="btn" onClick={() => confirmDelete()}>Ya</button>
                <button className="btn" onClick={() => document.getElementById('delete_modal').close()}>Tidak</button>
            </div>
        </div>
    </div>
</dialog>
            </div>
        </div>
    );
};

export default Table;