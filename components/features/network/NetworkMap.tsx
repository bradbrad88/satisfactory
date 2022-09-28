import Image from "next/image";

const NetworkMap = () => {
  return (
    <div className="relative  w-[3000px] h-[3000px]">
      <Image
        draggable={false}
        src={"/satisfactory-map.webp"}
        alt="satisfactory map"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute w-full h-full left-0 right-0"></div>
    </div>
  );
};

export default NetworkMap;
