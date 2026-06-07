import { motion } from 'framer-motion';
import { FaGithub, FaDownload } from 'react-icons/fa';

export default function Hero() {
  const stats = [
    { value: '8+', label: 'Projects Built' },
    { value: '6+', label: 'Technologies' },
    { value: 'CSE', label: 'Undergraduate' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full lg:w-3/5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground text-balance">
            Ashiqul Islam{' '}
            <span className="text-accent">Sizan</span>
          </h1>

          <h2 className="mt-5 text-lg md:text-xl text-muted font-medium">
            CSE Student &middot; Full Stack Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted text-pretty">
            I&apos;m a Computer Science and Engineering student focused on full
            stack web development and software engineering — building clean,
            practical, and performant products from front to back.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FaDownload className="text-base" />
              Download CV
            </a>

            <a
              href="https://github.com/sizan999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FaGithub className="text-base" />
              View GitHub
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-border pl-4">
                <dt className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
            <div className="absolute inset-0 rounded-3xl border border-border bg-surface" />
            <div className="absolute -inset-px rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border">
              <img
                src="https://github.com/sizan999.png"
                alt="Portrait of Ashiqul Islam Sizan"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/avatar-fallback.png';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
