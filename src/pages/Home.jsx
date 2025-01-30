// Import komponen dan library yang diperlukan
import { Canvas } from "@react-three/fiber"; // Library untuk membuat scene 3D
import { Suspense, useEffect, useRef, useState } from "react"; // Hook React yang diperlukan

// Import asset dan komponen lokal
import sakura from "../assets/sakura.mp3"; // File audio background
import { HomeInfo, Loader, Terem, Experience } from "../components"; // Komponen UI
import { soundoff, soundon } from "../assets/icons"; // Icon untuk kontrol audio
import { Bird, Island, Plane, Sky } from "../models"; // Model 3D



const Home = () => {
  // Inisialisasi audio player dengan volume 0.4 dan loop aktif
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  // State untuk mengontrol berbagai aspek scene
  const [currentStage, setCurrentStage] = useState(1); // Mengontrol stage/tahap tampilan
  const [isRotating, setIsRotating] = useState(false); // Mengontrol rotasi island
  const [isPlayingMusic, setIsPlayingMusic] = useState(false); // Mengontrol pemutaran musik

  // Effect untuk mengatur pemutaran musik
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Fungsi untuk menyesuaikan ukuran dan posisi pesawat berdasarkan ukuran layar
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) { // Untuk layar mobile

      // Skala 1.5 untuk sumbu x, y, dan z - membuat pesawat 1.5x lebih besar dari ukuran aslinya
      // [x, y, z] = [1.5, 1.5, 1.5] artinya pesawat diperbesar 1.5x secara proporsional
      screenScale = [1.5, 1.5, 1.5];
      
      // Posisi pesawat dalam koordinat 3D:
      // x = 0 (posisi tengah horizontal)
      // y = -1.5 (sedikit ke bawah dari tengah vertikal) 
      // z = 0 (posisi netral pada sumbu kedalaman)
      screenPosition = [0, -1.5, 0];
    } else { // Untuk layar desktop
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  // Fungsi untuk menyesuaikan ukuran dan posisi pulau berdasarkan ukuran layar
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) { // Untuk layar mobile
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else { // Untuk layar desktop
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  // Mendapatkan nilai skala dan posisi yang sesuai
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* Overlay untuk informasi stage */}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Canvas 3D dengan kursor yang berubah saat rotasi */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Pencahayaan scene */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          {/* Model 3D */}
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          {/* <Terem/> */}
          {/* <Stage
          /> */}
          {/* <Experience/> */}
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* Kontrol musik */}
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
