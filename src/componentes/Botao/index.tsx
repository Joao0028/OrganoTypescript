import './Botao.css'

interface BotaoProps {
    children: string
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao