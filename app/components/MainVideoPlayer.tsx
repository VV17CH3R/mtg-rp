
export default async function Hero() {

  return (
    <section className="mx-auto h-[70%] max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      
      <div className="mb-8 flex  md:mb-16 ">
        <div className=" mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 ">
        <video
                poster="main-bg-video"
                autoPlay
                muted
                loop
                src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/outlaws.mp4?t=2024-05-20T18%3A10%3A39.211Z"
                className="w-full absolute top-[-100px] left-0 h-[90vh] object-cover -z-10 brightness-[60%]"
          />
          <h1 className="mb-4 text-4xl -z-10 lg:mt-0 font-bold text-center mt-5 lg:text-white/90 text-white sm:text-5xl md:mb-8 md:text-6xl">
            Да зажжется <br /> твоя искра!
          </h1>
        </div>
      </div>
    </section>
  );
}
