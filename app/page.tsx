import Hero from "./components/hero";
import Skills from "./components/Skills"; 
import PersonalInfo from "./components/PersonalInfo";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import GalleryHobbies from "./components/Gallery";
import Contact from "./components/contact";
import "./nadda-style.css";


export default function CVonline() {
  return (
    <section>
      <Hero />
      <Skills/>
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <GalleryHobbies />
      <Contact /> {/* Menambahkan komponen Contact di sini */}
    </section>
  );
}
