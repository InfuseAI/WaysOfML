export default function Quote({quote, author, org, orgURL}) {
  return (
    <section className="py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-2xl font-medium leading-9 text-center text-gray-900">
              <p>
                &ldquo;{quote}&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    {author}
                  </div>

                  <svg
                    className="hidden w-5 h-5 mx-1 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <a href={orgURL}><div className="text-base font-medium text-gray-500">
                    {org}
                  </div></a>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
