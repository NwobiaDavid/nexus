
export default function SixthPage() {
  return (
    <div className="flex h-[720px] ">
      <div className="bg-blue-500 secondpage-text p-4 w-[50%]"> 
        <h1 className="font-bold text-9xl capitalize ">reach us here</h1>
        <h2 className="text-8xl text-white">take your social presence to the next scale</h2>
      </div>

      <div className="w-[50%] flex justify-center items-center ">
        <form action="#" className="flex flex-col text-center rounded-lg border-2 h-[18rem] justify-around p-4 " method="post">
      
            <div className="flex flex-col">
            <h1 className="font-bold secondpage-text">contact form</h1>
                <input type="text" className="p-2 mt-4 mb-5 duration-200  rounded-full lg:w-[300px] " placeholder="Name.." />
                <input type="email" className="p-2 duration-200  rounded-full lg:w-[300px] " placeholder="Email.." />
            </div>
            <button className="bg-blue-500 duration-200 text-white p-2 rounded-md hover:bg-blue-700" type="submit">Book a call</button>
        </form>
      </div>
    </div>
  )
}
