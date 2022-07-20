import { useSelector } from 'react-redux';
import Routers from './Routers';

export default function App() {
    const profile = useSelector((state: any) => state.profile);
    return (
        <>
            <div>
                <strong> { profile.nome } </strong>
            </div>
            <Routers/>
        </>
    );
}