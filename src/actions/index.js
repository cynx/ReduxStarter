/**
 * Created by echosteg on 17/01/2017.
 */
export function selectBook(book){
    //this is action creator, needs to return an action, an object with type property
    //actions have type and payload
    return {
        type:'BOOK_SELECTED',
        payload: book
    };
}