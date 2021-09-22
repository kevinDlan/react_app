export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_TO_FAVORITES = "DELETE_TO_FAVORITES";

// Get the favorites states...

export function GETfavoriteState()
{
    const action = {
        type:GET_FAVORITES
    }
    return action;
}

// Add Data to a favorite....
export function AddToFavorite(item){
    const action = {
      type:ADD_TO_FAVORITES,
      payload:item
    }
    
    return action;
}

// delete from our favorite list
export function DelFromFavorite(item){
    const action = {
        type:DELETE_TO_FAVORITES,
        payload:item
    }
    return action;
}