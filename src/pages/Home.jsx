import TopNav from "../components/TopNav";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <div className="min-h-screen banner flex items-center justify-center">
        <div className="">
          <h1 className="text-[80px] font-bold text-white  px-4 pb-2 relative">
            Excellence Is Our{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white px-6 relative inline-block">
              <span
                className="relative text-theme"
                style={{ fontFamily: "'Rochester', cursive" }}
              >
                {" "}
                Specialty
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
