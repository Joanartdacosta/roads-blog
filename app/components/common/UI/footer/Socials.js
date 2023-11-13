import DribbleAccount from "../../icons/socials/DribbleAccount";
import GitHubAccount from "../../icons/socials/GithubAccount";

export default function Socials() {
  return (
    <div>
      <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <GitHubAccount />
        <DribbleAccount />
      </div>
    </div>
  );
}
