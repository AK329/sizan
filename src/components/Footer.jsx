import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 px-6 py-10 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; 2026{' '}
          <span className="font-medium text-foreground">Ashiqul Islam Sizan</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sizan999"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="mailto:sizan12092@gmail.com"
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-accent"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
