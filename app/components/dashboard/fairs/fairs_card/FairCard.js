import AvatarImg from "@/components/common/icons/AvatarImg";
import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import ButtonYellow2 from "@/components/common/UI/button/ButtonYellow2";
import CalendarIcon from "@/components/common/icons/calendar/CalendarIcon";
import { darkRgba } from "@/consts/colors";
import FairLocation from "@/components/dashboard/fairs/fairs_card/FairLocation";
import FairMonth from "@/components/dashboard/fairs/fairs_card/FairMonth";
import Modal from "react-modal";
import ModalInfo from "@/components/dashboard/fairs/fairs_card/ModalInfo";
import { useState } from "react";
import WorldIcon from "@/components/common/icons/WorldIcon";
import { whiteRgba } from "@/consts/colors";

export default function FairCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  const modalStyles = {
    content: {
      top: "5rem",
      bottom: "5rem",
      backgroundColor: whiteRgba,
      position: "absolute",
      overflow: "auto",
      transition: "opacity-5 2 ease-in-out, transform 2s ease-in-out",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: darkRgba,
    },
  };

  return (
    <div>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex">
          <span>
            <CalendarIcon />
          </span>

          {props.fair.date ? (
            <span>
              <FairMonth
                startDate={new Date(
                  props.fair.date.startDate
                ).toLocaleDateString("pt-PT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                endDate={new Date(props.fair.date.endDate).toLocaleDateString(
                  "pt-PT",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              />
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
            <AvatarImg imgURL={props.fair.imgURL} title={props.fair.title} />
            <div className="text-gray-600 dark:text-gray-400">
              <FairLocation
                town1={props.fair.location.town1}
                title={props.fair.title}
                town2={props.fair.location.town2}
              />{" "}
              <WorldIcon region={props.fair.region} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <ButtonYellow2
            onClick={openModal}
            label={BUTTONS_LABELS.moreInfo}
            id="openModal"
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
            style={modalStyles}
          >
            <div>
              <ModalInfo
                description={props.fair.description}
                onClick={closeModal}
                paragraphs={props.fair.paragraphs}
                imgURL={props.fair.imgURL}
                sources={props.fair.sources}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
