import Image from "next/image";

//672 936

export default function AztecCity() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        className="relative rounded-2xl 

w-[400px]
h-[570px] 
"
      >
        <Image
          className="rounded-2xl absolute -z-10"
          width={400}
          height={600}
          alt="card"
          src={`https://mtgtrade.net/cards/lci/39_0.jpg`}
        />
        <div className="flex w-full h-full flex-col justify-between">
          <div className="bg-background flex justify-between px-10 h-[9.5%] w-full top-0">
            <div className="flex text-xl font-extrabold  text-primary justify-center items-center w-full">
                Странное место
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-[5%] absolute -z-5 top-0 left-0 h-full bg-background"></div>
            <div className="w-[5%] absolute -z-5 h-full top-0 right-0 bg-background"></div>
          </div>

          <div className="bg-background p-8  absolute bottom-0 text-center  h-[44%] w-full ">
                Вы приходите в себя стоя в кругу энегетических потоков фиолетового цвета. В окрежение непонятных механических созданий. Пронизаных магией.
          </div>
        </div>
      </div>
    </div>
  );
}
