export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-steel/40 border-t-sky animate-spin" />
        <p className="text-sm text-steel-text font-medium">Memuat halaman...</p>
      </div>
    </div>
  );
}
