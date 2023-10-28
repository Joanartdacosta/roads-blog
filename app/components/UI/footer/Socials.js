import DribbleAccount from "./DribbleAccount";
import GitHubAccount from "./GithubAccount";

export default function Socials() {
  return (
    <div>
      <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <GitHubAccount />
        <DribbleAccount />
      </div>
    </div>
  );
}
