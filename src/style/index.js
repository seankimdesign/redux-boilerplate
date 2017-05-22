import color from 'tinycolor2'
import deepFreeze from 'deep-freeze'

const px = 'px'
const em = 'em'
const vars = {
    primaryColor: color('#d31').toHex(),
    secondaryColor: color('#5cd').toHex(),
    backgroundColor: color('#f4eaf0').toHex(),
    lightGray: color('#d2c8c6').toHex(),
    gray: color('#ada8a9').toHex(),
    darkGray: color('#898283').toHex(),
    darkerGray: color('#5f5a5a').toHex(),
    textColor: color('#333').toHex(),
    headingColor: color('#3d3838').toHex(),
    headingSize: 24,
    titleSize: 17,
    textSize: 15,
    lineHeight: 1.65,
    hSpace: 4,
    vSpace: 6
}

const style = {
    ...vars,
    premade:{
        base:{
            backgroundColor: vars.backgroundColor,
            color: vars.textColor,
            lineHeight: vars.lineHeight+em
        },
        heading:{
            fontSize: vars.headingSize+px,
            color: vars.headingColor
        },
        text:{
            fontSize: vars.textSize+px,
            color: vars.textColor
        }
    }
}

export default deepFreeze(style)