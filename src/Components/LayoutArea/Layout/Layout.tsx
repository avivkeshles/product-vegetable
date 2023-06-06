import React,{useState} from 'react';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import {DataManager, Query, WebApiAdaptor} from '@syncfusion/ej2-data'
import "./Layout.css";
import Page from '../../ProductArea/Page/Page';

function Layout(): JSX.Element {
    return(
        <div  className="Layout" >
            <Page />
        </div>
    )
}
export default Layout;
