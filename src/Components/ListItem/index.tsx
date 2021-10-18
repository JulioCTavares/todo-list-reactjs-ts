import { Item } from '../../types/item';
import * as S from './styles'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

const ListItem = ({item, onChange}: Props) => {
    return (
        <S.Container done={item.done}>
            <input 
            type="checkbox" 
            checked={item.done} 
            onChange={e => onChange(item.id, e.target.checked)}
            />
            <label> {item.name} </label>
        </S.Container>
    )
}

export default ListItem;