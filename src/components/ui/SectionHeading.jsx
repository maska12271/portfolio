// src/components/ui/SectionHeading.jsx
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 md:mb-14"
        >
            <div className="flex items-center gap-3">
                {index && <span className="font-mono text-sm text-accent/60">{index}</span>}
                <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2 className="mt-3 font-display text-section-title font-semibold text-text">{title}</h2>
        </motion.div>
    );
}
