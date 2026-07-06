export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
}

export const rowVariants = {
    hidden: (index) => ({
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40
    }),
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}