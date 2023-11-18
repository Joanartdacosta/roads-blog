import ButtonBlack from "../../button/ButtonBlack";
import Link from "next/link";
import ModalInfo from "@/components/dashboard/fairs/fairs_card/ModalInfo";
import { useState } from "react";

export default function CardInfoButton(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClose() {
    setModalIsOpen(false);
  }

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  return (
    <div className="flex flex-wrap gap-12 justify-start">
      {ARRAY.map((trip) => {
        return (
          <div>
            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={trip.href}>
                {/* <img className="rounded-t-lg" src={trip.imgURL} alt={trip.title} /> */}
              </a>
              <div className="p-5">
                <a href={trip.href}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {trip.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {trip.paragraph1}
                </p>
                <Link href={trip.href}>
                  <ButtonBlack
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    label={"Saber mais"}
                    onClick={handleSeeMore}
                    // onClick={handleSeeMore}
                  />
                </Link>
              </div>
            </div>
            {modalIsOpen && (
              <ModalInfo
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
      })}
    </div>
  );
}
