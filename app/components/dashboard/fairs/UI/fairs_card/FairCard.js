import ModalInfo from "@/components/common/UI/cards/card_with_date_region/ModalInfo";
import { useState } from "react";
import LightButton from "@/components/common/UI/button/LightButton";
import FAIRS from "@/components/lists/fairs";
import WorldIcon from "@/components/common/icons/WorldIcon";
import AvatarImg from "@/components/common/icons/AvatarImg";
import FairLocation from "./FairLocation";
import FairMonth from "./FairMonth";

export default function FairCard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClose() {
    setModalIsOpen(false);
  }

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  return (
    <div className="mr-10 mb-10 mt-10">
      <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <FairMonth month={props.month} />
        <div class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <div class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
            <AvatarImg imgURL={props.imgURL} title={props.title} />
            <div class="text-gray-600 dark:text-gray-400">
              <FairLocation
                title={props.title}
                district={props.district}
                town2={props.town2}
              />{" "}
              <WorldIcon region={props.region} />
            </div>
          </div>
        </div>

        <LightButton onClick={handleSeeMore} label={"Saber mais"} />
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
