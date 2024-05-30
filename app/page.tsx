import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Hello, Studio miam!</h1>
      <button className="bg-red-100 p-2 rounded-lg hover:bg-red-400 ">Click</button>
    </main>
  );
}
