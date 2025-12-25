import { BBH_Bartle, Roboto } from "next/font/google";

export const robotoFont = Roboto({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-roboto-mono',
})

export const bbhBartleFont = BBH_Bartle({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: '--font-bbh-bartle',
})