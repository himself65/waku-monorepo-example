"use client"

import stylex from "@stylexjs/stylex"
import { useEffect } from "react"

const styles = stylex.create({
    base: {
        color: "red"
    }
})

export const Heading = () => {
    useEffect(() => {
        console.log("huhuu")
    }, [])
    return <h1 {...stylex.props(styles.base)}>Heading</h1>
}