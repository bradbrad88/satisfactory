import VentureList from "components/features/VentureList";

const Home = () => {
  return (
    <main className="h-screen flex justify-center sm:items-center">
      <div className="max-h-[61.8%] min-h-[600px] h-full max-w-[700px] w-full">
        <VentureList />
      </div>
    </main>
  );
};

export default Home;
