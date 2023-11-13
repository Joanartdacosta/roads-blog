import { useState } from "react";
import ButtonLight from "@/components/common/UI/button/ButtonLight";
import FAIRS from "@/components/lists/fairs";
import WorldIcon from "@/components/common/icons/WorldIcon";
import AvatarImg from "@/components/common/icons/AvatarImg";
import FairLocation from "./FairLocation";
import FairMonth from "./FairMonth";
import ModalInfo from "./ModalInfo";
import ButtonYellow2 from "@/components/common/UI/button/ButtonYellow2";

export default function FairCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClose() {
    setModalIsOpen(false);
  }

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  return (
    <div className="">
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <FairMonth month={props.month} />
        <div className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
            <AvatarImg imgURL={props.imgURL} title={props.title} />
            <div className="text-gray-600 dark:text-gray-400">
              <FairLocation
                title={props.title}
                district={props.district}
                town2={props.town2}
              />{" "}
              <WorldIcon region={props.region} />
            </div>
          </div>
        </div>

        <ButtonYellow2 onClick={handleSeeMore} label={"Saber mais"} />
      </div>

      {modalIsOpen && (
        <ModalInfo
          array={FAIRS}
          description={props.description}
          paragraph1={props.paragraph1}
          paragraph2={props.paragraph2}
          paragraph3={props.paragraph3}
          paragraph4={props.paragraph4}
          onClick={handleClose}
        />
      )}
    </div>
  );
}
