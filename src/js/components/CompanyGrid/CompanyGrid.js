import * as React from 'react';
import {Router, RouteComponentProps, browserHistory} from 'react-router';

export class CompanyGrid extends React.Component {


    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr className="info">
                    <th>ID</th>
                    <th>ИНН</th>
                    <th>Наименование</th>
                    <th>Руководитель</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {this.props.dataCompanies.map((company) => {
                    return (
                        <tr key={company.id}>
                        <th scope="row">{company.id}</th>
                        <td>{company.inn}</td>
                        <td>{company.company}</td>
                        <td>{company.boss}</td>
                        <td>Что-то</td>
                        </tr>
                    );
                })}


                </tbody>
            </table>
        );
    }
}