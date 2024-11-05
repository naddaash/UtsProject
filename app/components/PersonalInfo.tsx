import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
            <div className="bg-blue border border-gray-300 rounded-lg shadow-md p-6">
                <p className="text-lg"><strong>Nama:</strong> Nadda Shidiqah</p>
                <p className="text-lg"><strong>TTL:</strong> Bandung, 04 Agustus 2004</p>
                <p className="text-lg"><strong>JK:</strong> Perempuan</p>
                <p className="text-lg"><strong>Tinggi Badan:</strong> 141 cm</p>
                <p className="text-lg"><strong>Berat Badan:</strong> 42 kg</p>
                <p className="text-lg"><strong>Whatsapp:</strong> 0838-0625-8759</p>
                <p className="text-lg"><strong>Email:</strong> naddashiqah04@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
