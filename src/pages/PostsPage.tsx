import {useDispatch} from "react-redux";
import {useEffect} from "react";

function PostsPage(): JSX.Element {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('render')
        setInterval(() => {
            console.log('set', new Date());
            dispatch({
                type: 'SET_FAKE',
                payload: new Date()
            })
        }, 1000)
    }, [])
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}
export default PostsPage;
