import * as React from 'react';
import {CompanyGrid} from '../CompanyGrid/CompanyGrid.js';
import companyGridStore from "../CompanyGrid/flux/CompanyGridStore.js";
import {companyGridActions} from "../CompanyGrid/flux/CompanyGridActions.js";
import AltContainer from 'alt-container';



export default class CompanyListPage extends React.Component {

    render() {
        return (
            <div className="container-fluid padding-top" id="catalogue-page">
                <div className="row">
                    <div className="col-md-2">
                        Кнопки
                    </div>
                    <div className="col-md-10">
                        <div>
                            <AltContainer store={companyGridStore}>
                                <CompanyGrid />
                            </AltContainer>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
