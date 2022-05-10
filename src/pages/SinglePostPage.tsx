import { useParams } from "react-router";

function SinglePostPage(): JSX.Element {
    const { postId } = useParams<string>();
    return (
        <div>
            <h1>SinglePostPage</h1>
            <div>
                postId={postId}
            </div>
        </div>
    )
}
export default SinglePostPage;
