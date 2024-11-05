import foto from "../foto.jpg";

function Profile() {
    return <img src={foto.src} alt="Nadda Shidiqah" className="fotoku" />;
}

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
            <h1 className="text-gray-400 font-bold">CV ONLINE</h1>
            <h2 className="text-3xl">Nadda Shidiqah</h2>
            <Profile />
            <p>
                Saya adalah seorang mahasiswa Semester 5 di Universitas Ma'soem
            </p>
        </div>
    );
}
