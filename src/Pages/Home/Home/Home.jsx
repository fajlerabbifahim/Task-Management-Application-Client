import TaskCard from "../../../Components/TaskCard/TaskCard";

const Home = () => {
  return (
    <div className="bg-[#333333] bg-gradient-to-b from-[#333333] to-[#6d6e6f] text-white p-4 h-screen pt-40">
      <TaskCard
        title={"hello this is the task one Tanjila k chudbo"}
        description={
          "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
        }
        timestamp={"21,Feb,2025"}
        category={"Toodo"}
      />
    </div>
  );
};

export default Home;
