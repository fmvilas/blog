import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div className="max-w-md text-white">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry, this page doesn't exist.
        </p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-pink-500 rounded-lg hover:bg-yellow-500 hover:text-black">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
