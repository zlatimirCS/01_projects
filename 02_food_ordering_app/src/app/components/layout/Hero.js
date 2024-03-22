import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero my-8">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete,a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-8 py-2 rounded-full">
            Order now
          </button>
          <button className="text-gray-600 font-semibold">Learn more</button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <Image
          src={"/pizza2.jpg"}
          layout="fill"
          objectFit="contain"
          alt="pizza"
        />
      </div>
    </section>
  );
}
