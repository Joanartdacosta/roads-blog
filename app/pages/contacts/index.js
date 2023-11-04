import React from "react";
import Form from "@/components/common/UI/forms/Form";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";

export default function Contacts() {
  return (
    <div>
      <GeneralBanner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <p className="pb-11 text-center">Entre em contacto comigo.</p>

        <Form />
      </div>
    </div>
  );
}
