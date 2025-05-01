export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[#F5F8FE] p-5">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="max-w-lg text-gray-700 flex flex-col gap-3">
            <h1 className="text-7xl font-bold ">Lorem ipsum <p className="text-[#0052DA]">dolor sit</p>amet.</h1>
            <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates.</p>
          </div>
          <div className="max-w-2xl">
            <img src="/images/home 1.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}