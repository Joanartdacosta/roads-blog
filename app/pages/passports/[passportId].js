import { useRouter } from "next/router";

export default function PassportDetailsPage() {
  const router = useRouter();

  const passportId = router.query.passportId;
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["passports"]["section"]}
        imgUrl={NAVBAR_LINKS["passports"]["imgUrl"]}
        description={NAVBAR_LINKS["passports"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <p>Passaporte do Douro.</p>
      </div>
    </div>
  );
}
