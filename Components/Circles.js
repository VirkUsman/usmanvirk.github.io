import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-2 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-20">
      <Image
        src={"/circles1.png"}
        width={480}
        height={403}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
