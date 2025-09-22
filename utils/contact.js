import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let’s Work Together`,
    description: `I’m open for new opportunities – especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:shreyanayak440@gmail.com?subject=Hello')
    },
    designAndBuiltBy: 'Designed & Built By Shreya Nayak',
    handleBuiltByClick: () => openLink('https://github.com/shreyanayak440')
}

export default contact
