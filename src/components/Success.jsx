import { useHistory } from 'react-router-dom';

export default function Success() {
    const history = useHistory();
    function handle() {
        history.push("/");
    }
    return <div><p>Successfully logged</p><button onClick={handle}>Back</button></div>
}