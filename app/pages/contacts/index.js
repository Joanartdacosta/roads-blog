import React from "react";
import Form from "@/components/common/UI/forms/Form";
import Banner from "@/components/common/banner/Banner";
import NAVBAR_LINKS from "@/components/lists/navbar_links";

export default function Contacts() {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <p className="pb-11 text-center">Entre em contacto comigo.</p>

        <Form />
      </div>
    </div>
  );
}
