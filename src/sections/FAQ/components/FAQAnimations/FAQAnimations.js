export const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    show: {
        height: "auto",
        opacity: 1,
        transition: { duration: 0.25, ease: "easeInOut" }
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.25, ease: "easeInOut" }
    }
}

export const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
}