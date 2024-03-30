import { Appbar } from "../component/Appbar";
import { FullBlog } from "../component/FullBlog";
import { Spinner } from "../component/Spinner";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    const { loading, posts } = useBlog({
        id: id || ""
    });
    if (loading || !posts) {
        return <div>
            <Appbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={posts} />
    </div>
}