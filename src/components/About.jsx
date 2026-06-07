import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      title: 'Full Stack Development',
      text: 'Comfortable across the stack — from responsive interfaces to server-side logic and data.',
    },
    {
      title: 'Software Engineering',
      text: 'Focused on clean code, problem solving, and building maintainable, real-world projects.',
    },
    {
      title: 'Always Learning',
      text: 'Continuously exploring new technologies and frameworks to sharpen my craft.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            A bit about me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-surface p-8 md:p-12"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted text-pretty">
            I&apos;m a Computer Science and Engineering student with a strong
            passion for full stack web development and software engineering. I
            enjoy turning ideas into working products — learning new
            technologies along the way and building practical projects that
            solve real problems.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface-2 p-6"
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
