import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    currentMount.appendChild(renderer.domElement);

    // 🌌 Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2500;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: "#a855f7",
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending, // 🔥 glow effect
    //   depthWrite: false,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );

    scene.add(particlesMesh);

    // 🖱 Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 📜 Scroll movement (NEW 🔥)
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // 📱 Resize fix
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 🎮 Animation
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // rotation
      particlesMesh.rotation.y += 0.0015;
      particlesMesh.rotation.x += 0.001;

      // mouse movement
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      // 🔥 scroll depth effect
      camera.position.z = 5 + scrollY * 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      cancelAnimationFrame(animationId);

      currentMount.removeChild(renderer.domElement);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}