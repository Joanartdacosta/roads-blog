import { getByIdPassport, getFeaturedPassports } from "@/helpers/api-util";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import CardInfo from "@/components/common/UI/cards/card_info/CardInfo";

export default function PassportDetailsPage(props) {
  const passport = props.selectedPassport;

  if (!passport) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["passports"]["section"]}
        imgUrl={NAVBAR_LINKS["passports"]["imgUrl"]}
        description={NAVBAR_LINKS["passports"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <CardInfo array={props.selectedPassport} />
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
