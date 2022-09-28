import './style.scss'

const InfoTip = ({num, desc, icon, bg}) => {
    return (
        <div className={'infotip'} style={{background: bg}}>
            <div className={'img'}>
                {icon}
            </div>
            <div className={'text'}>
                <div>{num}</div>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default InfoTip