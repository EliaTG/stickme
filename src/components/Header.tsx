import AboutDialog from "./Dialog";

export default function Header() {
  return (
    <div className="inset-x-0 flex items-start justify-between w-full absolute top-0 p-6 md:p-12">
        <div>
            <h1 className="text-[26px] md:text-[32px] font-medium">Stick Me</h1>
            <p className="text-xs md:text-sm">Your face. A few lines. Some questionable moves.</p>
        </div>
        <AboutDialog/>
        {/* <button className="text-sm mt-2 cursor-pointer" type="button">About</button> */}

    </div>
  );
}