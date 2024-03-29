import Socials from "@/components/common/UI/footer/Socials";

export default function Footer() {
  return (
    <div className="footer-background width-100 pd-100">
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Estradas Blog™
              </a>
              . Todos os direitos Reservados.
            </span>

            <Socials />
          </div>
        </div>
      </footer>
    </div>
  );
}
