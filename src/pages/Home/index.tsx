import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from '../../store/modules/counter/counterSlice';

export default function Home() {
    /**
     * 1. criar uma rota profile
     * 2. criar uma pagina Profile
     *  2.1 nome e idade
     * 3. criar um slice de profile
     * 4. slice começa vazio
     * 5. na página pode add
     * 6. se ja tem um profile carrega dos dados no form
     * 7. salva
     *  7.1 se não existe, salva um novo
     *  7.2 se já existe, edita
     */
    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    const skip = 10;

    function onIncrease() {
        dispatch(increase(skip));
    }

    function onDecrease() {
        dispatch(decrease(skip));
    }

    function onReset() {
        dispatch(reset());
    }
    return (
        <>
            <h1>Home</h1>
            <div>
                <button onClick={onDecrease}>-{skip}</button>
                <strong> { counter } </strong>
                <button onClick={onIncrease}>+{skip}</button>
            </div>
            <br />
            <button onClick={onReset}>Reset</button>
        </>
    );
}