import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} © Hylight</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/terms-of-service" className="hover:text-slate-200">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-slate-200">
            Privacy Policy
          </Link>
          <Link href="/disclaimer" className="hover:text-slate-200">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
