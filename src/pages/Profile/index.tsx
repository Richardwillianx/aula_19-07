import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { save } from '../../store/modules/profile/profileSlice';

export default function Profile() {
    const profile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    const [nome, setNome] = useState(profile.nome);
    const [idade, setIdade] = useState(profile.idade);

    function onSaveProfile(event: Event) {
        event.preventDefault();
        
        dispatch(save({
            nome,
            idade
        }));
    }
    return (
        <>
            <form onSubmit={(event: any) => onSaveProfile(event)}>
                <div>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e: any) => setNome(e.target.value) } />
                </div>
                <div>
                    <label>Idade</label>
                    <input type="number" value={idade} onChange={(e: any) => setIdade(e.target.value) } />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    );
}