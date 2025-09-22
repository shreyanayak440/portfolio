import { openLink } from "./methods"

const outer = {
    title1:  `Hello, I'm`,
    title2: 'Shreya Nayak,',
    decrypTexts: [
        'A Software Engineer',
        'I turn data into insights',
        'I build things for the web',
        'A Web Developer',
        'A Data Analyst ',
    ],
    desciption: `Aspiring Full Stack Developer passionate about crafting impactful and scalable web applications, eager to grow and contribute to real-world solutions.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:shreyanayak440@gmail.com?subject=Hello')
    }
}

export default outer
