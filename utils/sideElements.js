import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/shreyanayak440/',
        'instagram': 'https://www.instagram.com/_shreya_nayak_/',
        'twitter': 'https://twitter.com/@shrey62738',
        'linkedin': 'https://www.linkedin.com/in/shreya-nayak-24a61a319/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'shreyanayak440@gmail.com',
        onClick: () => openLink('mailto:shreyanayak440@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements