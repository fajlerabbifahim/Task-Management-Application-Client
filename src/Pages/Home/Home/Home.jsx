import { useState } from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import useUser from "../../../Hooks/useUser";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

const Home = () => {
  const [userData, isLoading] = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  if (isLoading) return <h1 className="text-4xl">Loading</h1>;
  return (
    <div className="bg-[#333333] bg-gradient-to-b from-[#333333] to-[#6d6e6f] text-white p-4 h-full pt-28">
      <div className="flex justify-center pb-10">
        <button
          onClick={openModal}
          className="text-xl border border-white px-6 py-2"
        >
          Add Task
        </button>
      </div>
      <AddTaskModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6   ">
        <div className="border-2 border-red-500 rounded-lg">
          <h1 className="text-center text-3xl pb-6 pt-6 border-b-2 ">TODO</h1>
          <TaskCard
            title={userData.name}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
        </div>
        <div className="border-2 border-red-500">
          {" "}
          <h1 className="text-center text-3xl pb-6 pt-6 border-b-2 ">
            In Process
          </h1>
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
        </div>
        <div className="border-2 border-red-500">
          {" "}
          <h1 className="text-center text-3xl pb-6 pt-6 border-b-2 ">Done</h1>
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
          <TaskCard
            title={"hello this is the task one Tanjila k chudbo"}
            description={
              "Ajke tanzila K chudbo, bashai niye aisa. onek ador korbo voda chudbo, dhon dhukabo, dud chuso"
            }
            timestamp={"21,Feb,2025"}
            category={"Toodo"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
