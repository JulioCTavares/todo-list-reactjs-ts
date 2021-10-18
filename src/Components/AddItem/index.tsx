import { KeyboardEvent, useState } from 'react'
import * as S from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

const AddItem = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('')
        }
    }

    return (
        <S.Container>
            <div className="image" > ➕ </div>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </S.Container>
    )
}

export default AddItem;