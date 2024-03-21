import ObjectDetection from "@/components/object-detection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center p-8">
      <h1
      className="font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center gradient-text"
      >Object Detection - NYG</h1>
      <ObjectDetection/>
    </main>
  );
}
