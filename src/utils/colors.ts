import colors from "tailwindcss/colors";


const excludeColors = [
    'primary',
    'secondary',
    'positive',
    'negative',
    'warning',
    'info'
]

console.log(colors)

const makeColors = () => {


    const tw_colors = Object.entries(colors).flatMap(([name, values]) => {
        if (typeof values === 'string' || excludeColors.includes(name)) {
            return []
        }

        return Object.entries(values).map(([tonality, hex]) => ({
            name: `${name}-${tonality}`,
            value: hex
        }))
    })

    tw_colors.push({ name: 'White', value: '#fff' })
    tw_colors.push({ name: 'Black', value: '#000' })

    return tw_colors
}

console.log(makeColors())
