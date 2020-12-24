import * as site from './index';

export const appLayout = (layout) => {
    return (dispatch) =>{
        dispatch(site.appLayout(layout))
    };
}