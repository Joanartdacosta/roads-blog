import React from "react";
import FAIRS from "@/components/lists/fairs";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuOptions from "@/components/common/UI/menu/MenuOptions";
import Calendar from "@/components/dashboard/fairs/UI/calendar/Calendar";
import ListOfFairs from "@/components/dashboard/fairs/UI/fairs_card/ListOfFairs";

export default function Fairs() {
  return (
    <div>
      <GeneralBanner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <div className="text-center pb-10">
          <MenuOptions />
        </div>

        <div className="flex">
          <div>
            <p className="pb-10 text-xl font-bold">Lista de Eventos</p>
            <ListOfFairs array={FAIRS} />
          </div>
          <div className="pl-20">
            <div className="text-center ">
              {" "}
              <DatePicker />
            </div>

            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
