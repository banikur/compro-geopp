import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cloud">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-ink mb-4">Not Found</h2>
        <p className="text-ink/70 mb-8">Could not find requested resource</p>
        <Link href="/" className="px-6 py-2 bg-sky text-white rounded-full hover:bg-sky/90 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  )
}
