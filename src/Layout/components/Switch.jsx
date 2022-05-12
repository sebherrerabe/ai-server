import { useContext } from 'react'
import { ThemeContext } from '../Layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Switch = ({ switchMode }) => {
    const themeColors = useContext(ThemeContext)
    return (
        <div className={"switch " + themeColors.colorSecondary} onClick={() => { switchMode() }} >
            <button className={"switch-btn " + themeColors.textSecondaryColor}><FontAwesomeIcon icon={faMoon} /></button>
            <button className={"switch-btn switch-btn-light-active " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faSun} /></button>
        </div>
    )
}

export default Switch;