import CardInfo from "@/components/common/UI/cards/card_info/CardInfo";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import { getByIdPassport, getFeaturedPassports } from "@/helpers/api-util";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function PassportDetailsPage(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["passports"]["section"]}
        imgUrl={NAVBAR_LINKS["passports"]["imgUrl"]}
        description={NAVBAR_LINKS["passports"]["description"]}
      />
      <div className="max-w-xl m-auto pt-20 pb-20">
        <CardInfo data={props.selectedPassport} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const passportId = context.params.passportId;

  const passport = await getByIdPassport(passportId);

  return {
    props: {
      selectedPassport: passport,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const passports = await getFeaturedPassports();
  const paths = passports.map((passport) => ({
    params: { passportId: passport.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
