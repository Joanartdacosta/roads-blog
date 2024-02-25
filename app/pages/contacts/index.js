import React from "react";
import Form from "@/components/common/UI/forms/Form";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function Contacts() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["contacts"]["section"]}
        imgUrl={NAVBAR_LINKS["contacts"]["imgUrl"]}
        description={NAVBAR_LINKS["contacts"]["description"]}
      />
      <div className="roboto max-w-5xl m-auto pt-20 pb-20 pl-8 pr-8">
        <p className="pb-11 text-center">Entre em contacto comigo.</p>

        <Form />
      </div>
    </div>
  );
}
