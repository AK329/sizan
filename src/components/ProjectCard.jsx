import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ title, description, image }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-accent"
    >
      <div className="relative h-44 overflow-hidden bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <h3 className="px-4 text-center font-display text-lg font-semibold text-foreground">
              {title}
            </h3>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">
          {description}
        </p>

        <a
          href="https://github.com/sizan999"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
        >
          <FaGithub className="text-base" />
          View on GitHub
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
