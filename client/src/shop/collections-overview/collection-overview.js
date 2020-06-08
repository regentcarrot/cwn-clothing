import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './collection-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

//shop page parent

const CollectionsOverview = ({collections, match, history})=>{ 
 
   return  (
<div className='collections-overview'>

{console.log(collections)}
{
    collections.map(({id,...othercollectionprops})=>(
    <CollectionPreview key={id} {...othercollectionprops} match={match} history={history}/>
    )
    )
    }

</div>



)
}
const mapStateToProps=createStructuredSelector({

    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
