import React from "react";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import FilteringFair from "@/components/dashboard/fairs/filter_fair/FilteringFair";
import { getAllFairs } from "@/helpers/api-util";
import { saveAllFairs } from "@/redux/fairSlice";
import store from "@/redux/store";

export default function Fairs(props) {
  store.dispatch(saveAllFairs(props.allFairs));

  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["fairs"]["section"]}
        imgUrl={NAVBAR_LINKS["fairs"]["imgUrl"]}
        description={NAVBAR_LINKS["fairs"]["description"]}
      />
      {props?.allFairs ? (
        <div className="roboto max-w-5xl m-auto pt-20 pb-20">
          <FilteringFair />
        </div>
      ) : (
        "Nao existem feiras"
      )}
    </div>
  );
}

export async function getStaticProps() {
  const fairs = await getAllFairs();

  return {
    props: {
      allFairs: fairs,
    },
    revalidate: 1800,
  };
}
