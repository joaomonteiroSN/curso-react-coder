import ReactDOM from 'react-dom'
import { jsx } from 'react/jsx-runtime'


// nesse ponto foi usando apaenas o ReactDOM e não o React propriamente dito
// const el = document.getElementById('root')
// ReactDOM.render('Olá React!!!', el)

const tag = <strong>Olá React</strong>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)
