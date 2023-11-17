import { useState } from "react";
import FAIRS from "@/components/lists/fairs";
import WorldIcon from "@/components/common/icons/WorldIcon";
import AvatarImg from "@/components/common/icons/AvatarImg";
import FairLocation from "./FairLocation";
import FairMonth from "./FairMonth";
import ModalInfo from "./ModalInfo";
import ButtonYellow2 from "@/components/common/UI/button/ButtonYellow2";
import CalendarIcon from "@/components/common/icons/calendar/CalendarIcon";
import Link from "next/link";

export default function FairCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClose() {
    setModalIsOpen(false);
  }

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  const humanReadableDate = new Date(props.month).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex">
          <span>
            <CalendarIcon />
          </span>
          <span>
            <FairMonth month={humanReadableDate} />
          </span>
        </div>
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
        <div className="flex justify-end">
          <ButtonYellow2 onClick={handleSeeMore} label={"Saber mais"} />
        </div>
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
