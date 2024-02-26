import AvatarDate from "./AvatarDate";

export default function Avatar() {
  return (
    <div>
      <div class="flex items-center">
        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
          <img
            class="mr-2 w-6 h-6 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Michael Gough"
          />
          Michael Gough
        </p>

        <AvatarDate />
      </div>
    </div>
  );
}
