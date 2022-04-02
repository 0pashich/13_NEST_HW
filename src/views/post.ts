import { resolve } from 'path';
import { PostsDTO } from '../api/dto/post.dto';
export const postTemplate = async (postPromise: Promise<PostsDTO>): Promise<string> => {
    const post = await postPromise
    if (post === undefined) {
        return emptyNews();
    } else {
        let html = '<div class="row">';
        html += `
        <div class="col-lg-6"> <div class="card">
        <div class="card-body">
        <h5 class="card-title">${post.name}</h5> 
        <h6 class="card-subtitle mb-2 text-muted"> Описание: ${post.description} </h6>
        <h6 class="card-subtitle mb-2 text-muted"> Дата создания: ${post.createdAt}     </h6>
        <h6 class="card-subtitle mb-2 text-muted"> Дата изменения: ${post.updatedAt}     </h6>
        <p class="card-text">${post.text}</p> </div>
        </div> </div>
        `;

        for (const commentItem of post.comments) {
            html += `
    <div class="col-lg-6"> <div class="card">
    <div class="card-body">
    <h5 class="card-title">${commentItem.id}</h5> 
    <h6 class="card-subtitle mb-2 text-muted"> Дата создания: ${commentItem.createdAt}</h6>
    <p class="card-text">${commentItem.text}</p> </div>
    </div> </div>
    `;
        }
        html += '</div>';
        return html;
    }

}


const emptyNews = () => {
    return `<h1>Список новостей пуст!</h1>`;
};