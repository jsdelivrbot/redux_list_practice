

export default function selectBook(state=null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.book;

  default:
    return state;
    }
}
