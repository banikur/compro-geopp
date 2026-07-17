import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Not Found</h2>
        <p className="text-slate-600 mb-8">Could not find requested resource</p>
        <Link href="/" className="px-6 py-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  )
}
