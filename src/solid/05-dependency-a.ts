import { PostService } from './05-dependency-b';
import { JsonDBService, JsonDBService2, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDBService();
    // const provider = new LocalDataBaseService();
    const provider = new JsonDBService2();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();